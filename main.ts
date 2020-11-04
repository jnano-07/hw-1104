basic.forever(function () {
    for (let x = 0; x <= 4; x++) {
        for (let y = 0; y <= x; y++) {
            led.plot(4 - x, y)
            led.plot(4 - y, x)
        }
        basic.pause(200)
    }
    basic.clearScreen()
})
