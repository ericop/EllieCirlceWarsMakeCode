namespace SpriteKind {
    export const Friend = SpriteKind.create()
}
function cloneAFriend () {
	
}
sprites.onCreated(SpriteKind.Friend, function (sprite) {
    sprite.setPosition(bluey.x, bluey.y)
    friendArray.push(sprite)
    sprite.setVelocity(speedX, speedY)
    sprite.setBounceOnWall(true)
})
let newFriend: Sprite = null
let speedY = 0
let speedX = 0
let friendArray: Sprite[] = []
let bluey: Sprite = null
scene.setBackgroundColor(1)
let redy = sprites.create(assets.image`enemy`, SpriteKind.Enemy)
bluey = sprites.create(assets.image`player`, SpriteKind.Player)
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
    newFriend = sprites.create(assets.image`friend`, SpriteKind.Player)
})
