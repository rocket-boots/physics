# physics
Basic Physics in JavaScript

## Install

`npm install git+https://github.com/rocket-boots/physics.git#master` (Substitute master for the particular version number of your choice)

## How to Use

```js
class MyPhysicalThing {
	constructor() {
		Object.assign(
			this,
			{ mass: 100 },
			physics.canMove(this), // Adds .move() and various properties
			// physics.canCollide(this),
			// decayer.canDecay(this),
		);
	}
}

const physicalThing = new MyPhysicalThing();

// Do inside of a loop with a time `t`:
physicalThing.move(t);

```
