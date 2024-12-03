// 40:
// 41:
// 42: CONTROLLER A -> MACHINE A
// 43: MACHINE A -> CONTROLLER A
// 44: CONTROLLER B -> MACHINE B
// 45: MACHINE B -> CONTROLLER B
// 46:
// 47:
// 48:
// 49:
input.onButtonPressed(Button.A, function () {
    radio.sendString("speed_up")
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(1000)
})
input.onButtonPressed(Button.B, function () {
    radio.sendString("speed_down")
})
/**
 * PORT_SETTINGS
 */
basic.showIcon(IconNames.SmallSquare)
radio.setGroup(42)
loops.everyInterval(100, function () {
    radio.sendNumber(input.rotation(Rotation.Roll))
})
