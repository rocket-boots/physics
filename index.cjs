(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./src/Coords.js
class Coords {
	constructor(x = 0, y = 0) {
		this.x = x;
		this.y = y;
	}
	//------------------------------------------ Set coordinates (Mutations)
	/** Set the coordinates */
	set({x, y}) {
		this.x = x || 0;
		this.y = y || 0;
		return this;
	}
	/** Set x and y to zero */
	clear() {
		this.x = 0;
		this.y = 0;
	}
	/** If the coordinate x y values are invalid, try to fix them */
	fix() {
		if (this.check()) { return true; } // Didn't need fixing
		this.x = Number(this.x);
		this.y = Number(this.y);
		if (this.check()) { return true; } // Fixed and values should be what you'd expect
		this.x = 0;
		this.y = 0;
		return false; // Fixed and values could not be salvaged so zeroes were used
	}
	/** Add coordinates by another {x, y} coordinate */
	add({x, y}) {
		this.x += x || 0;
		this.y += y || 0;
		return this;
	}
	/** Subtract coordinates by another {x, y} coordinate */
	subtract({x, y}) {
		this.x -= x || 0;
		this.y -= y || 0;
		return this;
	}
	/** Multiply coordinates by a number */
	multiply(m) {
		this.x *= m || 1;
		this.y *= m || 1;
		return this;
	}
	/** Set coordinates to absolute values */
	abs() {
		this.x = Math.abs(this.x);
		this.y = Math.abs(this.y);
		return this;
	}
	round() {
		this.x = Math.round(this.x);
		this.y = Math.round(this.y);
		return this;
	}
	reverse() {
		return this.multiply(-1);
	}
	normalize() {
		const vectorLength = this.getMagnitude();
		if (vectorLength === 0) {
			this.x = 0;
			this.y = 0;
			return this;
		}
		this.x = this.x / vectorLength;
		this.y = this.y / vectorLength;
		return this;		
	}
	setMagnitude(m) {
		return this.normalize().multiply(m);
	}
	setTangent() {
		return this.set(this.y, this.x);
	}

	//------------------------------------------ Get values
	getDistance({x, y}) {
		return Math.sqrt( Math.pow((this.x - x), 2) + Math.pow((this.y - y), 2) );
	}
	getAbsoluteDistance(coords = {}) {
		return Math.abs(this.getDistance(coords));
	}
	getMagnitude() {
		return Math.sqrt( Math.pow(this.x, 2) + Math.pow(this.y, 2)	);
	}

	//------------------------------------------ Cloning - Returns a new object
	/** Create a copy of these coordinates (useful to avoid mutating a coordinates object) */
	clone() {
		return new Coords(this.x, this.y);
	}
	getMultiply(m) {
		return new Coords(this.x * m, this.y * m);
	}
	getUnitVector(coords = {}) {
		const d = this.getAbsoluteDistance(coords);
		if (d === 0) { return new Coords(0, 0); }
		const dx = coords.x - this.x;
		const dy = coords.y - this.y;
		const x = dx / d;
		const y = dy / d;
		return new Coords(x, y);
	}
	getUnitVectorTangent(coords = {}) {
		const d = this.getAbsoluteDistance(coords);
		if (d === 0) { return new Coords(0, 0); }
		const x = (coords.y - this.y) / d;
		const y = (this.x - coords.x) / d;
		return new Coords(x, y);
	}
	getPerpendicularVector(left = false) {
		return (left) ? new Coords(-1 * this.y, this.x) : new Coords(this.y, -1 * this.x);
	}
	getTangent() {
		return new Coords(this.y, this.x);
	}

	//------------------------------------------ Checks (True/False)
	/** Determine if the coordinates' x y values are valid numbers */
	check() {
		return (
			typeof this.x === 'number' && typeof this.y === 'number' &&
			!isNaN(this.x) && !isNaN(this.y)
		);
	}
	isEqual({x, y}) {
		return (this.x === x && this.y === y);
	}
	isEqualInteger({x, y}) {
		return (Math.round(this.x) === Math.round(x) && Math.round(this.y) === Math.round(y));
	}

	//------------------------------------------ Polar Coordinate Methods
	setByPolarCoords(r, theta) {
		return this.set({
			x: (r * Math.cos(theta)),
			y: (r * Math.sin(theta))
		}) ;
	};
	// static convertPolarToCartesianCoords(r, theta) {
	// 	var x = r * Math.cos(theta);
	// 	var y = r * Math.sin(theta);
	// 	return (new Coords(x, y));
	// };
	rotate(deltaTheta, aroundOriginCoords) {
		this.subtract(aroundOriginCoords);
		this.setByPolarCoords(this.r, (this.theta + deltaTheta));
		this.add(aroundOriginCoords);
		return this;
	};
	/** Get radius to the center (0,0) */
	getRadius() {
		return this.getDistance({x: 0, y: 0});
	}
	setRadius(r) {
		this.setByPolarCoords(r, this.getTheta());
		return this;
	}
	getTheta() {
		return Math.atan2(this.y, this.x); // http://stackoverflow.com/a/8898965/1766230
	}
	setTheta(theta) {
		this.setByPolarCoords(this.getRadius(), theta);
	}
	getDegrees() {
		return this.getTheta() * (180/Math.PI)
	}

	//------------------------------------------ Aliases
	equals(coords = {}) {
		return this.isEqual(coords);
	}
	copy() {
		return this.clone();
	}
	getCopy() {
		return this.clone();
	}
	getClone() {
		return this.clone();
	}
}

/* harmony default export */ var src_Coords = (Coords);

// CONCATENATED MODULE: ./index.mjs


/* harmony default export */ var index = __webpack_exports__["default"] = ({ Coords: src_Coords });


/***/ })
/******/ ])["default"]));

/***/ }),
/* 1 */
/***/ (function(__webpack_module__, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/rocket-boots-coords/index.cjs
var rocket_boots_coords = __webpack_require__(0);

// CONCATENATED MODULE: ./src/physics.js


const BIG_G_DEFAULT = 5.;
const MIN_GRAVITY_RADIUS = 1;

function physics(objects, t) {
	// Loop through objects, apply gravity
	objects.forEach((obj) => {
		if (!(obj.pos instanceof XY)) { return; }
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

physics.getOrbitalVelocity = function (smallObject, bigObject, left = false, bigG = BIG_G_DEFAULT) {
	// const m = smallObject.mass;
	const M = bigObject.mass;
	const r = smallObject.pos.getDistance(bigObject.pos);
	const speed = Math.sqrt( bigG * M / r );
	const unit = smallObject.pos.getUnitVector(bigObject.pos);
	const v = unit.getPerpendicularVector(left).multiply(speed);
	console.log(arguments, M, r, speed, unit, v);
	return v;
};

physics.canCollide = (o) => ({
	colliding: [],
	collide(objs) {
		const innerRadius = (typeof o.innerRadius === 'number') ? o.innerRadius : 0;
		o.isColliding = false;
		o.colliding.length = 0;
		const pushBack = (b, amount) => {
			const pusher = (o.mass > b.mass) ? o : b;
			const pushee = (pusher === o) ? b : o;
			const push = pushee.pos.getUnitVector(pusher.pos).multiply(amount);
			pushee.pos.add(push);
		};
		const doDamage = (m, objHit) => {
			if (m < 1) { return; }
			// (trial and error damage)
			const velocityDamage = Math.ceil(Math.pow(m, 1.4) / 10);
			// console.log('Damage', m, '-->', velocityDamage);
			if (o.damage) {
				o.damage(velocityDamage, objHit);
			}
		};
		objs.forEach((b) => {
			if (o === b || !(b.pos instanceof XY && b.vel instanceof XY)) {
				return false;
			}
			const r = o.pos.getDistance(b.pos);
			const innerRadiusB = (typeof b.innerRadius === 'number') ? b.innerRadius : 0;
			const edgeToEdgeDistance = r - innerRadius - innerRadiusB;
			if (edgeToEdgeDistance > 0) {
				return false;
			}
			o.colliding.push(b);
			// Push back to avoid overlaps
			// const pushAmount = edgeToEdgeDistance;
			// pushBack(b, pushAmount);

			// Bounce
			// TODO: bounce ... see setNewCollisionVels

			// Damage
			const relativeVelocity = o.vel.clone().add(b.vel);
			const velocityMag = relativeVelocity.getMagnitude();
			doDamage(velocityMag, b);
			return true;
		});
		o.isColliding = o.colliding.length > 0;
		if (o.isColliding) {
			o.vel.multiply(0.7);
		}
	}
});

physics.canMove = (o) => ({
	lastPos: new rocket_boots_coords["Coords"](),
	pos: new rocket_boots_coords["Coords"](),
	force: new rocket_boots_coords["Coords"](),
	acc: new rocket_boots_coords["Coords"](),
	vel: new rocket_boots_coords["Coords"](),
	move(t) {
		o.lastPos.set(o.pos);
		if (o.mass !== 0) {
			const forceAcc = new rocket_boots_coords["Coords"]((o.force.x / o.mass), (o.force.y / o.mass));
			o.acc.add(forceAcc);
		}
		const deltaVel = o.acc.getMultiply(t); // new Coords(o.acc.x * t, o.acc.y * t);
		o.vel.add(deltaVel);
		const deltaPos = o.vel.getMultiply(t/2); // new Coords(o.vel.x * t / 2, o.vel.y * t / 2);
		o.pos.add(deltaPos);
		// clear because ongoing forces need to be re-applied
		o.force.clear();
		o.acc.clear();
		// Sync base x,y if they exist
		// if (o.x !== undefined) { o.x = o.pos.x; }
		// if (o.y !== undefined) { o.y = o.pos.y; }
	}
});

physics.canGravitate = (o, bigG = BIG_G_DEFAULT) => ({
	gravitate(t, objs) {
		if (o.mass === 0) { return false; }
		const bigGMass = bigG * o.mass;
		objs.forEach((b) => { return o.gravitateOne(b, bigGMass); });
		// o.force.add(new Coords(0,0.0001));
	},
	gravitateOne(b, bigGMass) { // Apply force of gravity due to one object
		if (
			b === o // can't get gravity from self
			|| b.mass === 0 || o.mass === 0 // things without mass don't make gravity
			|| o.isColliding // collisions cancel gravity with normal force
			|| !(b.pos instanceof rocket_boots_coords["Coords"])
		) {
			return false;
		}
		const r = o.pos.getDistance(b.pos);
		// Last resort to prevent black holes or super flinging
		if (r < MIN_GRAVITY_RADIUS) {
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

physics.physical = (o) => {
	Object.assign(
		o,
		{
			mass: 1,
			// pos: new Coords(),
			// force: new Coords(),
			// acc: new Coords(),
			// vel: new Coords(),
			// colliding: [],
		},
		physics.canCollide(o),
		physics.canMove(o),
		physics.canGravitate(o, BIG_G_DEFAULT),
	);
	return o;
};

/* harmony default export */ var src_physics = (physics);

// CONCATENATED MODULE: ./index.mjs


/* harmony default export */ var index = __webpack_exports__["default"] = ({ physics: src_physics });


/***/ })
/******/ ])["default"]));