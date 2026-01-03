class AIController {


    constructor(scene) {

        this.scene = scene;
        this.targetAngle = 0;

    }

    update(p) {
        // isActive disables AI (for testing)
        if (!p.isActive) { return; }

        this.targetAngle = Phaser.Math.Angle.Between(p.x, p.y, this.scene.getPlayer().x, this.scene.getPlayer().y);

        if (Phaser.Math.Distance.Between(p.x, p.y, this.scene.getPlayer().x, this.scene.getPlayer().y) > 300) {
            p.forward();


        }
        else {
            p.brake();

        }

        // Rotate the target angle so that it "faces" the player properly. 
        // Phaser calculates angles assuming the sprites are facing right.
        // But all my sprites face up
        this.targetAngle += Math.PI / 2;


        // First check if we are actually in range
        if (Phaser.Math.Distance.Between(p.x, p.y, this.scene.getPlayer().x, this.scene.getPlayer().y) < 500) {

            // Then check if we are facing the player.
            if (Math.abs(this.targetAngle - p.rotation) < 1) {


                p.shoot(2);
            }
        }


        p.rotateTo(this.targetAngle);



    }

}