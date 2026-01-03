class BulletManager {

    constructor(scene) {
        this.scene = scene;
        this.bullets = [];
        this.nextBullet = 0;

        for (var i = 0; i < 100; i++) {
            this.bullets[i] = new Bullet(this.scene);


        }

    }

    getBullets() {
        return this.bullets;
    }



    shoot(parent, bulletData) {
        this.bullets[this.nextBullet].fire(parent,bulletData);

        if (this.nextBullet < this.bullets.length - 1) { this.nextBullet++; } else { this.nextBullet = 0; }


    }

}