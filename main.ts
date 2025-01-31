input.onPinPressed(TouchPin.P0, function () {
    Minutes = -1
})
input.onButtonPressed(Button.A, function () {
    Minutes += 1
})
input.onPinPressed(TouchPin.P2, function () {
    basic.showNumber(Seconds)
})
input.onButtonPressed(Button.B, function () {
    Seconds += 1
})
input.onPinPressed(TouchPin.P1, function () {
    basic.showNumber(Minutes)
})
let Seconds = 0
let Minutes = 0
Minutes = 0
Seconds = 0
basic.showString("Hello!")
basic.showIcon(IconNames.Happy)
