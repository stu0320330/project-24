input.onButtonPressed(Button.A, function () {
    led.unplot(x_positin_catcher, y_position_catcher)
    if (x_positin_catcher > 0) {
        x_positin_catcher += -1
    }
    led.plot(x_positin_catcher, y_position_catcher)
})
input.onButtonPressed(Button.B, function () {
    led.unplot(x_positin_catcher, y_position_catcher)
    if (x_positin_catcher < 4) {
        x_positin_catcher += 1
    }
    led.plot(x_positin_catcher, y_position_catcher)
})
let Item = 0
let y_position_catcher = 0
let x_positin_catcher = 0
let Game_Over = false
let Drop_Time = 2000
let round_number = 1
let Final_round_number = 4
let x_position_rain = 2
let y_position_rain = 0
x_positin_catcher = 0
y_position_catcher = 4
basic.forever(function () {
    while (!(Game_Over)) {
        led.plot(x_positin_catcher, y_position_catcher)
        led.plot(x_position_rain, y_position_rain)
        basic.pause(Drop_Time)
        led.unplot(x_position_rain, y_position_rain)
        Item += 1
        if (x_position_rain == x_positin_catcher && y_position_rain == y_position_catcher) {
            Drop_Time = Drop_Time ** 2
            round_number += 1
            x_position_rain = randint(0, 4)
            y_position_rain = 0
            basic.pause(1000)
            if (round_number > Final_round_number) {
                Game_Over = true
            }
        } else {
            if (y_position_rain > (round_number > Final_round_number)) {
                basic.showIcon(IconNames.Happy)
            } else {
                basic.showIcon(IconNames.Sad)
            }
        }
    }
})
