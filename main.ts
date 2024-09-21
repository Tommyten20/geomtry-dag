namespace SpriteKind {
    export const spike = SpriteKind.create()
    export const opener = SpriteKind.create()
}
controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    if (up == true) {
        animation.runImageAnimation(
        mySprite3,
        [img`
            5555555555555555
            5555555555555555
            5555555555555555
            5555555555555555
            5555555555555555
            5555555555555555
            5555555555555555
            5555555555555555
            5555555555555555
            5555555555555555
            5555555555555555
            5555555555555555
            5555555555555555
            5555555555555555
            5555555555555555
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            `],
        100,
        false
        )
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.spike, function (sprite, otherSprite) {
    game.gameOver(false)
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    if (play == true) {
        scene.setBackgroundColor(9)
        sprites.destroy(textSprite2)
        sprites.destroy(mySprite)
        textSprite3 = textsprite.create("Jumps")
        textSprite3.setPosition(80, 60)
        textSprite4 = textsprite.create("press A")
        textSprite4.setPosition(80, 82)
        mySprite2 = sprites.create(img`
            ..............................
            ..............................
            ..............................
            ..............................
            ........e.e.e.e.e.e.e.........
            ........8888888888888.........
            ........8888888888888.........
            ......88888888888888888.......
            ......88888888888888888.......
            ......88877788887778888.......
            ......8887f788887f78888.......
            ......88877788887778888.......
            ......88888888888888888.......
            ......88888888888888888.......
            ......88888888888888888.......
            ......88878888888878888.......
            ......88887888888788888.......
            ......88888777777888888.......
            ......88888888888888888.......
            ........8888878888888.........
            ........8888887888888.........
            ...............8..............
            .............8.8.8............
            ..............888.............
            ...............8..............
            ...............8..............
            ..............8.8.............
            .............8...8............
            ..............................
            ..............................
            `, SpriteKind.Player)
        mySprite2.setPosition(80, 20)
        textSprite5 = textsprite.create("Easy")
        textSprite5.setPosition(80, 44)
        Jumps = true
    }
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    if (Jumps == true) {
        tiles.setCurrentTilemap(tilemap`level2`)
        sprites.destroy(textSprite3)
        sprites.destroy(textSprite4)
        sprites.destroy(mySprite2)
        sprites.destroy(textSprite5)
        mySprite3 = sprites.create(img`
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.Player)
        tiles.placeOnTile(mySprite3, tiles.getTileLocation(0, 11))
        scene.cameraFollowSprite(mySprite3)
        mySprite3.setVelocity(100, 0)
        jump = true
        up = true
        pause(100)
        Jumps = false
        mySprite4 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . d d . . . . . . . 
            . . . . . . d f f d . . . . . . 
            . . . . . d f f f f d . . . . . 
            . . . . d 1 f f f f f d . . . . 
            . . . d 1 1 f f f f f f d . . . 
            . . d f f f f f f f f f f d . . 
            . d d f f f f f f f f f f d d . 
            d f f f f f f f f f f f f f f d 
            `, SpriteKind.spike)
        tiles.placeOnTile(mySprite4, tiles.getTileLocation(13, 11))
        mySprite5 = sprites.create(img`
            d f f f f f f f f f f f f f f d 
            . d d f f f f f f f f f f d d . 
            . . d f f f f f f f f f f d . . 
            . . . d f f f f f f 1 1 d . . . 
            . . . . d f f f f f 1 d . . . . 
            . . . . . d f f f f d . . . . . 
            . . . . . . d f f d . . . . . . 
            . . . . . . . d d . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.spike)
        tiles.placeOnTile(mySprite5, tiles.getTileLocation(18, 12))
        mySprite6 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . d d . . . . . . . 
            . . . . . . d f f d . . . . . . 
            . . . . . d f f f f d . . . . . 
            . . . . d 1 f f f f f d . . . . 
            . . . d 1 1 f f f f f f d . . . 
            . . d f f f f f f f f f f d . . 
            . d d f f f f f f f f f f d d . 
            d f f f f f f f f f f f f f f d 
            `, SpriteKind.spike)
        tiles.placeOnTile(mySprite6, tiles.getTileLocation(25, 11))
        mySprite7 = sprites.create(img`
            d f f f f f f f f f f f f f f d 
            . d d f f f f f f f f f f d d . 
            . . d f f f f f f f f f f d . . 
            . . . d f f f f f f 1 1 d . . . 
            . . . . d f f f f f 1 d . . . . 
            . . . . . d f f f f d . . . . . 
            . . . . . . d f f d . . . . . . 
            . . . . . . . d d . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.spike)
        tiles.placeOnTile(mySprite7, tiles.getTileLocation(29, 12))
        mySprite8 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . d d . . . . . . . 
            . . . . . . d f f d . . . . . . 
            . . . . . d f f f f d . . . . . 
            . . . . d 1 f f f f f d . . . . 
            . . . d 1 1 f f f f f f d . . . 
            . . d f f f f f f f f f f d . . 
            . d d f f f f f f f f f f d d . 
            d f f f f f f f f f f f f f f d 
            `, SpriteKind.spike)
        tiles.placeOnTile(mySprite8, tiles.getTileLocation(32, 11))
        mySprite9 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 5 
            . 5 5 5 5 5 5 5 5 5 5 5 5 5 5 . 
            . . 5 5 5 5 5 5 5 5 5 5 5 5 . . 
            . . . 5 5 5 5 5 5 5 5 5 5 . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.opener)
        tiles.placeOnTile(mySprite9, tiles.getTileLocation(34, 12))
        mySprite10 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . d d . . . . . . . 
            . . . . . . d f f d . . . . . . 
            . . . . . d f f f f d . . . . . 
            . . . . d 1 f f f f f d . . . . 
            . . . d 1 1 f f f f f f d . . . 
            . . d f f f f f f f f f f d . . 
            . d d f f f f f f f f f f d d . 
            d f f f f f f f f f f f f f f d 
            `, SpriteKind.spike)
        tiles.placeOnTile(mySprite10, tiles.getTileLocation(35, 11))
        mySprite11 = sprites.create(img`
            d f f f f f f f f f f f f f f d 
            . d d f f f f f f f f f f d d . 
            . . d f f f f f f f f f f d . . 
            . . . d f f f f f f 1 1 d . . . 
            . . . . d f f f f f 1 d . . . . 
            . . . . . d f f f f d . . . . . 
            . . . . . . d f f d . . . . . . 
            . . . . . . . d d . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            `, SpriteKind.spike)
        tiles.placeOnTile(mySprite11, tiles.getTileLocation(35, 12))
        mySprite12 = sprites.create(img`
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . . . . . . . . . . 
            . . . . . . . d d . . . . . . . 
            . . . . . . d f f d . . . . . . 
            . . . . . d f f f f d . . . . . 
            . . . . d 1 f f f f f d . . . . 
            . . . d 1 1 f f f f f f d . . . 
            . . d f f f f f f f f f f d . . 
            . d d f f f f f f f f f f d d . 
            d f f f f f f f f f f f f f f d 
            `, SpriteKind.spike)
        tiles.placeOnTile(mySprite12, tiles.getTileLocation(38, 11))
    }
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.opener, function (sprite, otherSprite) {
    sprites.destroy(mySprite10)
    animation.runImageAnimation(
    mySprite3,
    [img`
        5555555555555555
        5555555555555555
        5555555555555555
        5555555555555555
        5555555555555555
        5555555555555555
        5555555555555555
        5555555555555555
        5555555555555555
        5555555555555555
        5555555555555555
        5555555555555555
        5555555555555555
        5555555555555555
        5555555555555555
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        ................
        `],
    100,
    false
    )
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    if (jump == true) {
        animation.runImageAnimation(
        mySprite3,
        [img`
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            ................
            5555555555555555
            5555555555555555
            5555555555555555
            5555555555555555
            5555555555555555
            5555555555555555
            5555555555555555
            5555555555555555
            5555555555555555
            5555555555555555
            5555555555555555
            5555555555555555
            5555555555555555
            5555555555555555
            5555555555555555
            5555555555555555
            ................
            ................
            `],
        100,
        false
        )
    }
})
let mySprite12: Sprite = null
let mySprite11: Sprite = null
let mySprite10: Sprite = null
let mySprite9: Sprite = null
let mySprite8: Sprite = null
let mySprite7: Sprite = null
let mySprite6: Sprite = null
let mySprite5: Sprite = null
let mySprite4: Sprite = null
let jump = false
let Jumps = false
let textSprite5: TextSprite = null
let mySprite2: Sprite = null
let textSprite4: TextSprite = null
let textSprite3: TextSprite = null
let mySprite3: Sprite = null
let up = false
let play = false
let textSprite2: TextSprite = null
let mySprite: Sprite = null
scene.setBackgroundColor(9)
let textSprite = textsprite.create("loding")
textSprite.setPosition(80, 60)
pause(1000)
sprites.destroy(textSprite)
scene.setBackgroundColor(15)
pause(200)
scene.setBackgroundColor(8)
mySprite = sprites.create(img`
    8888888888888888888888888888888888888888
    8888888888888888888888888888888888888888
    8888888888888888888888888888888888888888
    8888888888888888888888888888888888888888
    8888888888888888888888888888888888888888
    8888888888888888888888888888888888888888
    8888888888888888888888888888888888888888
    8888888888888888888888888888888888888888
    8888888888888888888888888888888888888888
    8888888888888778888888888888888888888888
    8888888888888777888888888888888888888888
    8888888888888777788888888888888888888888
    8888888888888777778888888888888888888888
    8888888888888777777888888888888888888888
    8888888888888777777788888888888888888888
    8888888888888777777778888888888888888888
    8888888888888777777777888888888888888888
    8888888888888777777777788888888888888888
    8888888888888777777777778888888888888888
    8888888888888777777777777888888888888888
    8888888888888777777777777788888888888888
    8888888888888777777777777888888888888888
    8888888888888777777777778888888888888888
    8888888888888777777777788888888888888888
    8888888888888777777777888888888888888888
    8888888888888777777778888888888888888888
    8888888888888777777788888888888888888888
    8888888888888777777888888888888888888888
    8888888888888777778888888888888888888888
    8888888888888777788888888888888888888888
    8888888888888777888888888888888888888888
    8888888888888778888888888888888888888888
    8888888888888888888888888888888888888888
    8888888888888888888888888888888888888888
    8888888888888888888888888888888888888888
    8888888888888888888888888888888888888888
    8888888888888888888888888888888888888888
    8888888888888888888888888888888888888888
    8888888888888888888888888888888888888888
    8888888888888888888888888888888888888888
    `, SpriteKind.Player)
mySprite.setPosition(80, 39)
textSprite2 = textsprite.create("press B")
textSprite2.setPosition(80, 74)
play = true
pause(100)
