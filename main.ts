namespace SpriteKind {
    export const Friend = SpriteKind.create()
}
sprites.onCreated(SpriteKind.Friend, function (sprite) {
    sprite.setPosition(greeny ? greeny.x : 0, greeny ? greeny.y : 0)
    friendArray.push(sprite)
    sprite.setVelocity(randint(-50, 50), randint(-50, 50))
    sprite.setBounceOnWall(true)
})
let newFriend: Sprite = null
let speedY = 0
let speedX = 0
let friendArray: Sprite[] = []
scene.setBackgroundColor(1)
let redy = sprites.create(assets.image`enemy`, SpriteKind.Enemy)
let bluey = sprites.create(assets.image`player`, SpriteKind.Player)
let greeny = sprites.create(assets.image`friend`, SpriteKind.Friend)
info.setScore(0)
controller.moveSprite(bluey)
greeny.setPosition(randint(0, 160), randint(0, 160))
game.onUpdateInterval(2000, function () {
    speedX = randint(-50, 50)
    speedY = randint(-50, 50)
    greeny.setVelocity(speedX, speedY)
    greeny.setBounceOnWall(true)
    friendArray = []
    newFriend = sprites.create(assets.image`friend`, SpriteKind.Friend)
})
forever(function () {
    sprites.allOfKind(SpriteKind.Friend).forEach(pal => {
        if (bluey.overlapsWith(pal)){
            pal.destroy()
        }
    })
})
