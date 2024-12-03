def on_button_pressed_a():
    record.start_recording(record.BlockingState.BLOCKING)
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    record.play_audio(record.BlockingState.BLOCKING)
input.on_button_pressed(Button.B, on_button_pressed_b)

def on_forever():
    pass
basic.forever(on_forever)
