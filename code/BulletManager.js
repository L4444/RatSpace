class BulletManager
{

    constructor(scene)
    {
        this.scene = scene;
        this.bullets = [];
        this.nextBullet = 0;

        for( var i = 0; i < 100;i++)
        {
            this.bullets[i] = new Bullet(this.scene, this, 'pew');
            this.bullets[i].setDepth(1);
            this.bullets[i].disable();

        }

    }

    getBullets()
    {
        return this.bullets;
    }

   

    shoot(parent)
    {
         this.bullets[this.nextBullet].x = parent.x;
            this.bullets[this.nextBullet].y = parent.y;
            this.bullets[this.nextBullet].lifetime = 40;

            let speed = -800;
            if (parent.isEnemy) { speed = -200; } // Gimp the enemies, to make them easier to dodge

            // Use vectors to set the path of the bullet, use the X axis to align with the player ship.
            let v = new Phaser.Math.Vector2(0, speed);
            v.rotate(parent.rotation);

            this.bullets[this.nextBullet].setVelocity(v.x, v.y);
            this.bullets[this.nextBullet].rotation = parent.rotation;
            // Assign the bullet's "owner" so ships can't damage themselves
            this.bullets[this.nextBullet].owner = parent;

            if (this.nextBullet < this.bullets.length - 1) { this.nextBullet++; } else { this.nextBullet = 0; }


    }

}