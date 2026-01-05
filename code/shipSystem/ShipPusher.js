class ShipPusher extends ShipSystem {
  constructor(scene, parent) {
    super(scene, parent, "MachineGun", 0.3, 20);

    this.pm = scene.getProjectileManager();
  }

  onActivate() {
    let projData = {
      spriteName: "MachineGun",
      speed: 600,
      range: 300,
      energyCost: 33,
      weapon: this,
    };

    this.pm.shoot(this.parent, projData);
  }

  onHit(hitShip) {
    hitShip.body.velocity.x += 100;
  }
}
