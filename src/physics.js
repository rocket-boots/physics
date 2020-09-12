import { Coords } from 'rocket-boots-coords';

function physics(objects, t) {
	// Loop through objects, apply gravity
	objects.forEach((obj) => {
		if (!physics.isPhysical(obj)) { return; }
		if (obj.collide) {
			obj.collide(objects);
		}
		if (obj.gravitate) {
			obj.gravitate(t, objects);
		}
		if (obj.move) {
			obj.move(t);
		}
		// obj.y += 0.01 * t;
	});
}

physics.Coords = Coords;
physics.bigG = 5.;
physics.collidingVelocityMultiplier = 0.95;
physics.collidePushbackMultipler = 0.2;
physics.elasticity = 0.98;
physics.MIN_GRAVITY_RADIUS = 1.;

function newXy () {
	return new physics.Coords();
}

// Thanks to https://www.toptal.com/game/video-game-physics-part-ii-collision-detection-for-solid-objects
/**
 * Checks for a collision/overlap between two objects based on an AABB calculation using only their
 * outer radius (with inner radius as a backup), thus only considers a square for bounding box
 * @param {Object} a 
 * @param {Object} b 
 */
physics.checkAabbCollision = (a, b) => {
	const aR = a.outerRadius || a.innerRadius;
	const bR = b.outerRadius || b.innerRadius;

	const aMax = {
		x: a.pos.x + aR,
		y: a.pos.y + aR,
	};
	const bMin = {
		x: b.pos.x - bR,
		y: b.pos.y - bR,
	};
	if (bMin.x > aMax.x || bMin.y > aMax.y) { return false; }

	const aMin = {
		x: a.pos.x - aR,
		y: a.pos.y - aR,
	};
	const bMax = {
		x: b.pos.x + bR,
		y: b.pos.y + bR,
	};
	if (aMin.x > bMax.x || aMin.y > bMax.y) { return false; }

	return true;
};

physics.checkRadiusCollision = (a, b) => {
	const innerRadius = (typeof a.innerRadius === 'number') ? a.innerRadius : 0;
	const innerRadiusB = (typeof b.innerRadius === 'number') ? b.innerRadius : 0;
	const r = a.pos.getDistance(b.pos);
	const edgeToEdgeDistance = r - innerRadius - innerRadiusB;
	const isColliding = (edgeToEdgeDistance > 0) ? false : true;
	return { isColliding, edgeToEdgeDistance };
};

/**
 * Determine if the object is physical
 * @param {Object} o - object
 */
physics.isPhysical = (o) => {
	return o.pos instanceof physics.Coords && o.vel instanceof physics.Coords;
}

physics.getOrbitalVelocity = function (smallObject, bigObject, left = false, bigG = physics.bigG) {
	// const m = smallObject.mass;
	const M = bigObject.mass;
	const r = smallObject.pos.getDistance(bigObject.pos);
	const speed = Math.sqrt( bigG * M / r );
	const unit = smallObject.pos.getUnitVector(bigObject.pos);
	const v = unit.getPerpendicularVector(left).multiply(speed);
	// console.log(arguments, M, r, speed, unit, v);
	return v;
};

physics.canCollide = (o) => ({
	colliding: [],
	collideDetect(b) {
		if (!physics.checkAabbCollision(this, b)) { return false; }
		return physics.checkRadiusCollision(this, b); 
	},
	collidePushback(b, edgeToEdgeDistance, pushMultiplier = physics.collidePushbackMultipler) {
		const pusher = (o.mass > b.mass) ? o : b;
		const pushee = (pusher === o) ? b : o;
		const push = pushee.pos.getUnitVector(pusher.pos) // push direction
			.multiply(edgeToEdgeDistance * pushMultiplier); // push amount
		pushee.pos.add(push);
		return { pusher, pushee, push };
	},
	collideBounce(o2, elasticity = physics.elasticity) {
		// Thanks to http://www.gamasutra.com/view/feature/131424/pool_hall_lessons_fast_accurate_.php?page=3
		var o1 = this;
		if (o1.mass <= 0 || o2.mass <= 0) {
			return false;
		}
		//console.log(o1.name, o2.name);
		//console.log("original", o1.vel.x, o1.vel.y, o2.vel.x, o2.vel.y);
		//console.log("momentum before", (o1.mass * o1.vel.getMagnitude()) + (o2.mass * o2.vel.getMagnitude()));
		var p = (o1.mass * o1.vel.getMagnitude()) + (o2.mass * o2.vel.getMagnitude());
		var n = o1.pos.getUnitVector(o2.pos);
		//console.log("n = ", n);
		var a1 = o1.vel.getDot(n);
		var a2 = o2.vel.getDot(n);
		var optimizedP = (2 * (a1 - a2)) / (o1.mass + o2.mass);
		o1.vel.add( n.getMultiply(-1 * optimizedP * o2.mass) );
		o1.vel.multiply(elasticity);
		o2.vel.add( n.getMultiply(optimizedP * o1.mass) );
		o1.vel.multiply(elasticity);
		//var pNew = (o1.mass * o1.vel.getMagnitude()) + (o2.mass * o2.vel.getMagnitude());
		//console.log(pNew - p);
		//if (pNew > p) {
				//console.log(o1.name, o2.name, "pNew > p", pNew, p);
		//}else console.log(o1.name, o2.name, "pNew <= p", pNew, p);
		//console.log("after", newV1.x, newV1.y, newV2.x, newV2.y);
		//console.log("momentum after", (o1.mass * o1.vel.getMagnitude()) + (o2.mass * o2.vel.getMagnitude()));
		return true;
	},
	collideDamage(b) {
		if (!o.damage) { return; }
		const relativeVelocity = o.vel.clone().add(b.vel);
		const velocityMag = relativeVelocity.getMagnitude();
		// (trial and error damage)
		const velocityDamage = (velocityMag < 1) ? 0 : Math.ceil(Math.pow(velocityMag, 1.4) / 10);
		if (!velocityDamage) { return; }
		o.damage(velocityDamage, b);
	},
	collide(objs) {
		o.isColliding = false; // assume not colliding
		o.colliding.length = 0; // Clear list of colliding objects
		objs.forEach((b) => {
			if (o === b || !physics.isPhysical(b)) {
				return false;
			}
			const { isColliding, edgeToEdgeDistance } = o.collideDetect(b)
			if (!isColliding) { return false; }
			// Keep track of colliding objects
			o.colliding.push(b);
			// Push back to avoid overlaps
			o.collidePushback(b, edgeToEdgeDistance);
			// Bounce
			o.collideBounce(b);
			// Damage
			o.collideDamage(b);
			return true;
		});
		o.isColliding = o.colliding.length > 0;
		if (o.isColliding) {
			o.vel.multiply(physics.collidingVelocityMultiplier);
		}
	}
});

physics.canMove = (o) => ({
	lastPos: newXy(),
	pos: newXy(),
	force: newXy(),
	acc: newXy(),
	vel: newXy(),
	move(t) {
		o.lastPos.set(o.pos);
		if (o.mass !== 0) {
			const forceAcc = new physics.Coords((o.force.x / o.mass), (o.force.y / o.mass));
			o.acc.add(forceAcc);
		}
		const deltaVel = o.acc.getMultiply(t); // new physics.Coords(o.acc.x * t, o.acc.y * t);
		o.vel.add(deltaVel);
		const deltaPos = o.vel.getMultiply(t/2); // new physics.Coords(o.vel.x * t / 2, o.vel.y * t / 2);
		o.pos.add(deltaPos);
		// clear because ongoing forces need to be re-applied
		o.force.clear();
		o.acc.clear();
		// Sync base x,y if they exist
		// if (o.x !== undefined) { o.x = o.pos.x; }
		// if (o.y !== undefined) { o.y = o.pos.y; }
	}
});

physics.canGravitate = (o, bigG = physics.bigG) => ({
	gravitate(t, objs) {
		if (o.mass === 0) { return false; }
		const bigGMass = bigG * o.mass;
		objs.forEach((b) => { return o.gravitateOne(b, bigGMass); });
		// o.force.add(new physics.Coords(0,0.0001));
	},
	gravitateOne(b, bigGMass) { // Apply force of gravity due to one object
		if (
			b === o // can't get gravity from self
			|| b.mass === 0 || o.mass === 0 // things without mass don't make gravity
			|| o.isColliding // collisions cancel gravity with normal force
			|| !o.gravitate
			|| !physics.isPhysical(b)
		) {
			return false;
		}
		const r = o.pos.getDistance(b.pos);
		// Last resort to prevent black holes or super flinging
		if (r < physics.MIN_GRAVITY_RADIUS) {
			// o.vel.multiply(0.2);
			return false; 
		}
	
		// F = G (m1 m2) / r^2
		// See http://en.wikipedia.org/wiki/Newton's_law_of_universal_gravitation#Vector_form            
		//console.log("Forces on", this.name, " due to ", b.name);
		const unit = o.pos.getUnitVector(b.pos);
		//console.log("unit vector", JSON.stringify(rv));
		
		const rSquared = Math.pow(r, 2);
		const forceMagnitude = (rSquared == 0) ? 0 : ((bigGMass * b.mass)/rSquared);
		const forceOfGravity = unit.getMultiply(forceMagnitude);
		o.force.add(forceOfGravity);		
		// console.log(o.name, o.pos, b.pos, rSquared, forceMagnitude);
		return true;
	}
});

physics.canRotate = (o) => ({
	// https://gamedevelopment.tutsplus.com/tutorials/how-to-create-a-custom-2d-physics-engine-oriented-rigid-bodies--gamedev-8032
	rotation: 0., // aka. orientation
	rotVel: 0., // "ω" (omega), aka. angular velocity
	torque: 0., // T = r × ω
	momentOfInertia: 0., // difficulty of rotating
	inverseMomentOfInertia: 0., 
	rotate(t) {
		o.rotation += o.rotVel * t;
		// o.rotVel = 0.;
	}
});

physics.physical = (o, { mass = 1, bigG = physics.bigG }) => {
	Object.assign(
		o,
		{
			mass,
			// pos: new physics.Coords(),
			// force: new physics.Coords(),
			// acc: new physics.Coords(),
			// vel: new physics.Coords(),
			// colliding: [],
		},
		physics.canCollide(o),
		physics.canMove(o),
		physics.canGravitate(o, bigG),
		physics.canRotate(o),
	);
	return o;
};

export default physics;
