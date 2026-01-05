class AIController {
  constructor(scene) {
    this.scene = scene;
  }

  update(p) {
    // isActive disables AI (for testing)
    if (!p.isActive) {
      return;
    }

    let targetAngle = Phaser.Math.Angle.Between(
      p.x,
      p.y,
      this.scene.getPlayer().x,
      this.scene.getPlayer().y
    );

    if (
      Phaser.Math.Distance.Between(
        p.x,
        p.y,
        this.scene.getPlayer().x,
        this.scene.getPlayer().y
      ) > 300
    ) {
      p.forward();
    } else {
      let faceAngle = targetAngle + Math.PI / 2;
      // Then check if we are facing the player.
      //if (Math.abs(faceAngle - p.rotation) < 1) {
      p.shoot(1);
      //}
    }

    p.rotateTo(targetAngle + Math.PI / 2);
  }
}
