basic.show_number(0)

def on_forever():
    led.plot_bar_graph(input.light_level(), 255)
    basic.pause(500)
    basic.show_icon(IconNames.TSHIRT)
basic.forever(on_forever)
