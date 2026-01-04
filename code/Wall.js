class Wall extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, spriteName, x, y, width, height) {
    super(scene, x, y, spriteName);

    // Manually add ship to scene and physics (contructor doesn't do this for us)
    scene.add.existing(this);
    scene.physics.add.existing(this);

    this.displayWidth = width;
    this.displayHeight = height;

    // Finding this flag took me like 30 mins of googling, chat gpt was rubbish.
    // Make the wall STATIC, as in it doesn't move
    this.setImmovable();
  }
}
