import platform from '../../img/platform.png';
import hills from '../../img/hills.png';
import background from '../../img/background.png';
import platformSmallTall from '../../img/platformSmallTall.png';
import spriteRunLeft from '../../img/spriteRunLeft.png';
import spriteRunRight from '../../img/spriteRunRight.png';
import spriteStandLeft from '../../img/spriteStandLeft.png';
import spriteStandRight from '../../img/spriteStandRight.png';



const canvas = document.querySelector('canvas');
const c = canvas.getContext('2d');

canvas.width = 1024;

canvas.height = 576;
const gravity = 0.67;

class Player {
    constructor() {
        this.position = {
            x: 100,
            y: 100
        }
        this.velocity = {
            x: 0,
            y: 0
        }
        this.width = 66
        this.height = 150
        this.playerSpeed = 10;
        this.image = createImage(spriteStandRight)
        this.frames = 0;
        this.sprites = {
          stand: {
            right: {sprite: createImage(spriteStandRight), cropWidth: 177, width: 66},
            left: {sprite: createImage(spriteStandLeft), cropWidth: 177, width: 66}

          },
          run: {
            right: {sprite: createImage(spriteRunRight), cropWidth: 341, width: 127.875},
            left: {sprite: createImage(spriteRunLeft), cropWidth: 341, width: 127.875}

          }
        }
        this.currentSprite = this.sprites.stand.right
    }

    draw() {
        // c.fillStyle = 'red'
        // c.fillRect(this.position.x, this.position.y, this.width, this.height)
        c.drawImage(this.currentSprite.sprite, this.currentSprite.cropWidth * this.frames, 0, this.currentSprite.cropWidth, 400, this.position.x , this.position.y, this.currentSprite.width, this.height); // (src, crop dimensions, cd, cd, cd, starting positions and width and height)
    }

    update() {// function used to animate
        this.frames++;
        if (this.frames > 59 && (this.currentSprite == this.sprites.stand.right || this.currentSprite == this.sprites.stand.left)) {this.frames = 0}
        else if (this.frames > 29 && (this.currentSprite == this.sprites.run.right || this.currentSprite == this.sprites.run.left)) {this.frames = 0}
        this.draw()
        this.position.y += this.velocity.y
        this.position.x += this.velocity.x
        if (this.position.y +this.height + this.velocity.y <= canvas.height) {
        this.velocity.y += gravity; } // check if player is above bottom of screen
        // else this.velocity.y = 0; // turn gravity off when you're on the ground

    }
}

class Platform {
	constructor({ x, y, image }) {
		this.position = {
			x: x,
			y: y,
			image: '',
		};

		this.image = image;
		this.width = image.width;
		this.height = image.height;
	}

	draw() {
		c.drawImage(this.image, this.position.x, this.position.y);
	}
}

class GenericObject {
	constructor({ x, y, image }) {
		this.position = {
			x: x,
			y: y,
			image: '',
		};

		this.image = image;
		this.width = image.width;
		this.height = image.height;
	}

	draw() {
		c.drawImage(this.image, this.position.x, this.position.y);
	}
}

function createImage(imageSource) {
  const image = new Image()
  image.src = imageSource
  return image
}

let player = new Player();
let platformImage = createImage(platform);
let platformSmallTallImage = createImage(platformSmallTall);
let platforms = [];

let genericObjects = [];
let keys = {
	right: {
		pressed: false,
	},
	left: {
		pressed: false,
	},
};

player.update();

let scrollOffset = 0; // tracks player position on overall map.

function init() {
	player = new Player();

	platforms = [
		new Platform({
			x: platformImage.width * 4 - 2 + platformImage.width,
			y: 270,
			image: platformSmallTallImage,
		}),
		new Platform({
			x: 0,
			y: 470,
			image: platformImage,
		}),
		new Platform({
			x: platformImage.width - 2,
			y: 470,
			image: platformImage,
		}),
		new Platform({
			x: platformImage.width * 2 + 100,
			y: 470,
			image: platformImage,
		}),
		new Platform({
			x: platformImage.width * 3 + 300,
			y: 470,
			image: platformImage,
		}),
		new Platform({
			x: platformImage.width * 4 + 300 - 2,
			y: 470,
			image: platformImage,
		}),
		new Platform({
			x: platformImage.width * 5 + 800 - 2,
			y: 470,
			image: platformImage,
		}),
	];

	genericObjects = [
		new GenericObject({
			x: 0,
			y: 0,
			image: createImage(background),
		}),
		new GenericObject({
			x: 0,
			y: 0,
			image: createImage(hills),
		}),
	];

	scrollOffset = 0; // tracks player position on overall map.
}

function animate() {
	requestAnimationFrame(animate);
	c.fillStyle = 'white';
	c.fillRect(0, 0, canvas.width, canvas.height); //erases previous rectangle on the screen

	genericObjects.forEach((genericObject) => {
		genericObject.draw();
	});

	platforms.forEach((platform) => {
		platform.draw();
	});
	player.update();

	if (keys.right.pressed && player.position.x <= canvas.width / 3) {
		// keeps player in front third of screen
		player.velocity.x = player.playerSpeed;
	} else if (
		(keys.left.pressed && player.position.x >= 100) ||
		(keys.left.pressed && scrollOffset === 0 && player.position.x > 0)
	) {
		// keeps player from exiting screen on the left
		player.velocity.x = -player.playerSpeed;
	} else {
		player.velocity.x = 0;

		if (keys.right.pressed) {
			// move platform code
			scrollOffset += player.playerSpeed;
			platforms.forEach((platform) => {
				platform.position.x -= player.playerSpeed;
			});
			genericObjects.forEach((genericObject) => {
				genericObject.position.x -= player.playerSpeed * 0.66;
			});
		} else if (keys.left.pressed && scrollOffset > 0) {
			scrollOffset -= player.playerSpeed;
			platforms.forEach((platform) => {
				platform.position.x += player.playerSpeed;
			});
			genericObjects.forEach((genericObject) => {
				genericObject.position.x += player.playerSpeed * 0.66;
			});
		}
		// console.log(scrollOffset)
	}

	//detect platform collision from above
	platforms.forEach((platform) => {
		let aboveAndTouchingPlatform =
			player.position.y + player.height <= platform.position.y &&
			player.position.y + player.height + player.velocity.y >=
				platform.position.y;
		let withinPlatformWidth =
			player.position.x + player.width >= platform.position.x &&
			player.position.x <= platform.position.x + platform.width;

		if (aboveAndTouchingPlatform && withinPlatformWidth) {
			player.velocity.y = 0;
		}
	});

	if (scrollOffset > platformImage.width * 5 + 400 - 2) {
		// position of last platform
		console.log('You Win!!!');
	}
	if (player.position.y > canvas.height) {
		init();
	}
}

init();
animate();

window.addEventListener('keydown', ({ key }) => {
	switch (key) {
		case 'a':
			console.log('left');
			keys.left.pressed = true;
			player.currentSprite = player.sprites.run.left;
			break;
		case 'd':
			console.log('right');
			keys.right.pressed = true;
			player.currentSprite = player.sprites.run.right;
			break;
		case 'w':
			console.log('up');
      if (event.repeat) {return}
			player.velocity.y -= 25;
			break;
		case 's':
			console.log('down');
			break;
	}
});

window.addEventListener('keyup', ({ key }) => {
	switch (key) {
		case 'a':
			console.log('left');
			keys.left.pressed = false;
			player.currentSprite = player.sprites.stand.right;
			break;
		case 'd':
			console.log('right');
			keys.right.pressed = false;
			player.currentSprite = player.sprites.stand.right;
			break;
		case 'w':
			console.log('up');
			player.velocity.y = 0;
			break;
		case 's':
			console.log('down');
			break;
	}
});
