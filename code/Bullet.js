class Bullet extends Phaser.Physics.Arcade.Sprite {



    constructor(scene, bulletManager, spriteName) {

        super(scene, 999,999,spriteName);

        
        
        // Manually add ship to scene and physics (contructor doesn't do this for us)
        scene.add.existing(this);
        scene.physics.add.existing(this); 

        this.setCircle(39 / 4, 39 / 4, 39 / 4);

        this.scene = scene;
        this.bulletManager = bulletManager
        this.lifetime = 200;
    }

     preUpdate(time, delta) {
        this.lifetime --;

        if(this.lifetime <= 0)
        {
            this.disable();
        }

     }

     disable()
     {
        this.x = -9999;
        this.y = -9999;

     }


}