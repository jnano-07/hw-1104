def on_forever():
    for x in range(5):
        y = 0
        while y <= x:
            led.plot(4 - x, y)
            led.plot(4 - y, x)
            y += 1
        basic.pause(200)
    basic.clear_screen()
basic.forever(on_forever)
