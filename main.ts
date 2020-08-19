controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    dart = sprites.createProjectileFromSprite(img`
        . 5 a a 2 . . . . . 
        5 5 a 2 2 2 2 4 4 4 
        . 5 a a 2 . . . . . 
        `, spacePlane, 200, 0)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.destroy(effects.fire, 100)
    info.changeScoreBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    info.changeLifeBy(-1)
})
let bogey: Sprite = null
let dart: Sprite = null
let spacePlane: Sprite = null
spacePlane = sprites.create(img`
    . . . . 8 2 . . . . . . . . . . . . . . . . . . 
    . . . . 1 1 1 . . . . . 9 9 9 9 9 . . . . . . . 
    . . . . 2 2 2 2 . . . 9 9 9 9 9 9 9 . . . . . . 
    . 4 4 4 f 8 6 6 6 6 6 6 9 9 9 9 9 6 6 6 . . . . 
    4 4 4 f 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 . 
    . 4 4 f 6 8 8 8 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 6 
    . . 4 4 f 8 8 . . . . . 8 8 8 8 6 6 6 6 6 6 6 . 
    . . . . . . . . . . . 8 8 8 8 8 8 2 . . . . . . 
    . . . . . . . . . . . 8 8 8 8 8 2 . . . . . . . 
    . . . . . . . . . . 8 8 8 8 8 2 . . . . . . . . 
    `, SpriteKind.Player)
spacePlane.setFlag(SpriteFlag.StayInScreen, true)
info.setLife(3)
controller.moveSprite(spacePlane, 0, 100)
game.onUpdateInterval(500, function () {
    bogey = sprites.create(img`
        . . . . 9 9 . . . . . 5 . . . 
        . . . 9 9 9 9 . . . 5 5 . . . 
        2 2 2 2 9 9 2 2 2 2 2 f 4 4 . 
        . . 2 2 2 2 5 5 5 2 2 f 4 4 4 
        . . . . . . 5 5 5 . . . . . . 
        . . . . . . . 5 5 . . . . . . 
        . . . . . . . . 5 . . . . . . 
        `, SpriteKind.Enemy)
    bogey.setVelocity(-100, 0)
    bogey.setPosition(180, randint(0, 120))
})
