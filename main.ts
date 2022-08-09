namespace SpriteKind {
    export const Friend = SpriteKind.create()
}
// make variables
sprites.onCreated(SpriteKind.Enemy, function (sprite) {
    let enemyArray: Sprite[] = []
    makeCircleAlive(sprite, redy ? redy.x : 0, redy ? redy.y : 0, randint(-30, 30), randint(-30, 30))
    enemyArray.push(sprite)
})
function makeCircleAlive (spriteCircle: Sprite, x: number, y: number, speedX: number, speedY: number) {
    spriteCircle.setPosition(x, y)
    spriteCircle.setVelocity(speedX, speedY)
    spriteCircle.setBounceOnWall(true)
}
sprites.onCreated(SpriteKind.Friend, function (sprite) {
    let friendArray: Sprite[] = []
    makeCircleAlive(sprite, greeny ? greeny.x : 0, greeny ? greeny.y : 0, randint(-50, 50), randint(-50, 50))
    friendArray.push(sprite)
})
let newEnemy: Sprite = null
let newFriend: Sprite = null
game.splash("EllieCircleWars")
game.showLongText(`*You* are the Blue Circle.
Move using the direction keys. 
Be quick!

Touch the Green Circles 
for 2pts
Touching Reds get you 
-3pts

Try to get 20pts to win!

`, DialogLayout.Bottom)
let speedY = 0
let speedX = 0
scene.setBackgroundColor(1)
let redy = sprites.create(assets.image`enemy`, SpriteKind.Enemy)
let bluey = sprites.create(assets.image`player`, SpriteKind.Player)
let greeny = sprites.create(assets.image`friend`, SpriteKind.Friend)
info.setScore(0)
controller.moveSprite(bluey)
makeCircleAlive(bluey, 0, 0, 0, 0)
makeCircleAlive(greeny, randint(0, 160), randint(0, 160), randint(-50, 50), randint(-50, 50))
makeCircleAlive(redy, randint(0, 160), randint(0, 160), randint(-30, 30), randint(-30, 30))
game.onUpdateInterval(2000, function () {
    newFriend = sprites.create(assets.image`friend`, SpriteKind.Friend)
    newEnemy = sprites.create(assets.image`enemy`, SpriteKind.Enemy)
})
forever(function () {
    sprites.allOfKind(SpriteKind.Friend).forEach(pal => {
        if (bluey.overlapsWith(pal)){
            pal.destroy()
            music.powerUp.play()
            info.changeScoreBy(2)
            if (info.score() > 20) {
                game.over(true)
            }
            
        }
   
    })
})
forever(function () {
    sprites.allOfKind(SpriteKind.Enemy).forEach(badguy => {
        if (bluey.overlapsWith(badguy)) {
            badguy.destroy()
            music.bigCrash.play()
            info.changeScoreBy(-3)
            if (info.score() < -20) {
                game.over(false)
            }
        }

    })
})
