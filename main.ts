input.onButtonPressed(Button.A, function () {
    if (gameplaying) {
        racer1.change(LedSpriteProperty.Y, -0.05)
    }
})
input.onButtonPressed(Button.B, function () {
    if (gameplaying) {
        racer2.change(LedSpriteProperty.Y, -0.05)
    }
})
let gameplaying = false
let racer2: game.LedSprite = null
let racer1: game.LedSprite = null
racer1 = game.createSprite(1, 4)
racer2 = game.createSprite(3, 4)
gameplaying = true
basic.forever(function () {
    if (racer1.get(LedSpriteProperty.Y) == 0) {
        basic.showString("a won!")
        gameplaying = false
    }
})
basic.forever(function () {
    if (racer2.get(LedSpriteProperty.Y) == 0) {
        basic.showString("b won!")
        gameplaying = false
    }
})
