class ValueBar {
  constructor(scene, parent, offset, colour) {
    this.hpBarBack = scene.add.rectangle(
      0, // x
      0, // y
      parent.displayWidth, // width
      10, // height
      0x000000, // rgb colour
      1
    );
    //this.hpBarBack.setDepth(SpriteLayer.HP);
    this.hpBarFront = scene.add.rectangle(
      0, // x
      0, // y
      parent.displayWidth, // width
      5, // height
      colour, // rgb colour
      1
    );
    this.hpBarFront.setDepth(SpriteLayer.HP);

    this.parent = parent;
    this.offset = offset;
  }

  update(value) {
    // line up the hp bar, Do this AFTER checking hp so that when we move the hp bar doesn't look glitchy
    this.hpBarBack.x = this.parent.x;
    this.hpBarBack.y =
      this.parent.y + this.offset - this.parent.displayHeight / 2;

    this.hpBarFront.x =
      this.parent.x +
      ((value / 100) * this.parent.displayWidth) / 2 -
      this.parent.displayWidth / 2;

    this.hpBarFront.y = this.hpBarBack.y;
    this.hpBarFront.displayWidth = (value / 100) * this.parent.displayWidth;
  }
}
