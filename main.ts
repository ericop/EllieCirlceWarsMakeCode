namespace SpriteKind {
    export const Friend = SpriteKind.create()
}
let redy = sprites.create(assets.image`enemy`, SpriteKind.Enemy)
let bluey = sprites.create(assets.image`player`, SpriteKind.Player)
let greeny = sprites.create(assets.image`friend`, SpriteKind.Friend)
