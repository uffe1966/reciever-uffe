radio.onReceivedNumber(function (receivedNumber) {
    led.toggle(4, 4)
    serial.writeValue("Celsius", receivedNumber)
})
basic.showString("Reciever")
radio.setGroup(55)
basic.forever(function () {
	
})
