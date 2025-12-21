class GameBackground extends Phaser.GameObjects.TileSprite
{

    constructor(scene, spriteName, x, y, width, height)
    {
        super(scene,x, y, width, height, spriteName);
        scene.add.existing(this);

        this.setScrollFactor(0.2);

    }

}
