input.onButtonPressed(Button.A, function () {
    music.changeTempoBy(-5)
})
input.onButtonPressed(Button.AB, function () {
    basic.showNumber(music.tempo())
})
input.onButtonPressed(Button.B, function () {
    music.changeTempoBy(5)
})
music.setTempo(100)
basic.forever(function () {
    music.playTone(698, music.beat(BeatFraction.Sixteenth))
    music.rest(music.beat(BeatFraction.Half))
    music.rest(music.beat(BeatFraction.Quarter))
    music.rest(music.beat(BeatFraction.Eighth))
    music.rest(music.beat(BeatFraction.Sixteenth))
})
