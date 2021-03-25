radio.onReceivedNumber(function (receivedNumber) {
    serial.writeValue("Celsius", receivedNumber)
    led.toggle(4, 4)
    if (input.buttonIsPressed(Button.A)) {
        serial.writeValue("A", 100)
    } else if (input.buttonIsPressed(Button.B)) {
        serial.writeValue("B", 100)
    } else if (input.buttonIsPressed(Button.AB)) {
        serial.writeValue("A+B", 100)
    } else {
        Samle_antal_smiley()
        Samle_smileys = [0 + 0, 300]
    }
})
function Samle_antal_smiley () {
	
}
let Samle_smileys: number[] = []
basic.showString("Reciever")
radio.setGroup(55)
basic.forever(function () {
	
})
