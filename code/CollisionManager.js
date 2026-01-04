class CollisionManager {

    constructor(scene, ships, bulletManager, statics) {

           // 1) Check for ship to static (asteroid, wall etc.) collisions
        scene.physics.add.collider(ships, statics, function (pShip, eShip, body1, body2) {
            console.log(pShip.name + " hit asteroid ");
        });

        // 2) Check for ship to ship collisions
        scene.physics.add.collider(ships, ships, function (pShip, eShip, body1, body2) {
            //pShip.hp -= 10; eShip.hp -= 10;
           // if (pShip.hp > 0) { pShip.hitSound.play(); }
        });

        // 3) Check for ship to bullet collisions
        scene.physics.add.overlap(ships, bulletManager.getBullets(), function (hitShip, hitBullet, body1, body2) {

            if (hitShip != hitBullet.owner) {
                console.log(hitShip.name + ' hit');
                hitShip.tintTick = 0;
                hitShip.hp -= hitBullet.damage;
                //if(hitShip.hp > 0) {hitShip.hitSound.play();} /// This is a horrible sound
                //hitShip.setVelocity(hitBullet.body.velocity.x, hitBullet.body.velocity.y);
                hitBullet.disable();


            }
        });

        // 4) Finally, check for bullet to static collisions.
        scene.physics.add.overlap(statics, bulletManager.getBullets(), function (hitStatic, hitBullet, body1, body2) {


            hitBullet.disable();



        });


    }

}