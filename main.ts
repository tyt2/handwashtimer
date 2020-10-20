function plotCol (x: number) {
    for (let index = 0; index <= 4; index++) {
        led.plot(x, index)
    }
}
function startTimer () {
    timerStarted = true
    for (let index2 = 0; (index2 <= MAX_TIME && !sleeping); index2++) {
        // basic.showNumber(index)
        led.plotBarGraph(
        index2,
        MAX_TIME
        )
        basic.pause(1000)
    }
for (let index = 0; index < 8 && !sleeping; index++) {
        basic.showIcon(IconNames.SmallHeart)
        basic.pause(100)
        basic.showIcon(IconNames.Heart)
        basic.pause(100)
    }
    timerStarted = false
}
input.onButtonPressed(Button.A, function () {
    sleeping = !sleeping
})
function checkLightTrigger () {
    checkingLight = true
    interrupted = false
    if (input.lightLevel() == 0) {
        count = 0
        basic.showIcon(IconNames.Duck)
        while (count++ < 50 && !sleeping) {
            if (input.lightLevel() > 1) {
                interrupted = true
                break;
            }
            basic.clearScreen()
            basic.pause(30)
            // plotCol(count % 6 - 1)
            basic.pause(70)
        }
        basic.clearScreen()
        if (count > 9 && interrupted) {
            // timerStarted = 1
            startTimer()
        }
    }
    checkingLight = false
}
let interrupted = false
let checkingLight = false
let sleeping = false
let count = 0
let MAX_TIME = 0
let timerStarted = false
sleeping = true
MAX_TIME = 25
basic.showNumber(0)
basic.forever(function () {
    if (sleeping) {
        timerStarted = false
        checkingLight = false
        basic.showIcon(IconNames.Asleep)
    } else {
        if (!(timerStarted) || !(checkingLight)) {
            checkLightTrigger()
            basic.showIcon(IconNames.Happy)
        }
    }
    basic.pause(1000)
})
