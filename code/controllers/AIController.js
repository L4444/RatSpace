class AIController {
  constructor(scene) {
    this.scene = scene;
    this.isAggressive = true;
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

    if (p.energy >= 100) {
      this.isAggressive = true;
    }

    if (p.energy <= 10) {
      this.isAggressive = false;
    }

    // always face the player if possible
    p.rotateTo(targetAngle + Math.PI / 2);

    let isClose =
      Phaser.Math.Distance.Between(
        p.x,
        p.y,
        this.scene.getPlayer().x,
        this.scene.getPlayer().y
      ) < 300;

    if (this.isAggressive) {
      if (isClose) {
        p.shoot(0);
      } else {
        p.forward();
      }
    } else {
      p.back();
    }
  }
}
