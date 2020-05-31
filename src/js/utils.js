const colors = ['#7920a7', '#bcf6a8', '#f3b365', '#db8d87', '#8796c5', '#e66eba', '#ee014e', '#7f2235', '#26ae00', '#1669e2'];

export function getRandomNumber(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

export function getRandomColors() {
    return colors[getRandomNumber(0, colors.length - 1)];
}
