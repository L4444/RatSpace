var gameScreen = {
    width: 800,
    height: 800
};


var config = {
    type: Phaser.AUTO,
    width: gameScreen.width,
    height: gameScreen.height,
    physics: {
        default: 'arcade',
        arcade: {
            x: 0,
            y: 0,
            width: gameScreen.width,
            height: gameScreen.height,
            debug: true // Show the wireframes and velocity 
        }
    },
    scene: GameScene
};

const state = {
    Menu: 'Menu',
    Gameplay: 'Gameplay'
}


var game = new Phaser.Game(config);

