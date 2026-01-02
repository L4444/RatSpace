class Bullet extends Phaser.Physics.Arcade.Sprite {



    constructor(scene) {

        // pass in a "dummy sprite" when they are created, later on the texture gets set
        super(scene, 999, 999, 'red');



        // Manually add ship to scene and physics (contructor doesn't do this for us)
        scene.add.existing(this);
        scene.physics.add.existing(this);

       

        // The bullets should be under the ship but over the background layer.
        this.setDepth(1);

        // Start disabled, ready to fire
        this.disable();

        this.scene = scene;


        // Technically you don't need to intialise variables in JS, but I like to do that for sanity reasons.
        this.lifetime = 0;
    }

    preUpdate(time, delta) {
        this.lifetime--;

        if (this.lifetime <= 0) {
            this.disable();
        }

    }

    disable() {
        // Move them "way off screen" before you disable them, otherwise when
        // wireframe physics (debug) is on, it will leave the pink/purple hitbox still on the screen.
        // it won't do anything it will just look ugly when debugging
        this.body.x = -9999;
        this.body.y = -9999;
        this.disableBody(true, true);
        


    }

    fire(parent, spriteName) {
        this.enableBody(true, parent.x, parent.y, true, true);
        this.setTexture(spriteName);
         this.setCircle(this.width / 4, this.width / 4, this.width / 4);

        this.lifetime = 20;

        let speed = -1200;
        if (parent.isEnemy) { speed = -1200; } // Gimp the enemies, to make them easier to dodge

        // Use vectors to set the path of the bullet, use the X axis to align with the player ship.
        let v = new Phaser.Math.Vector2(0, speed);
        v.rotate(parent.rotation);

        this.setVelocity(v.x + parent.body.velocity.x, v.y + parent.body.velocity.y);


        this.rotation = parent.rotation;
        // Assign the bullet's "owner" so ships can't damage themselves
        this.owner = parent;

    }


}