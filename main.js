function change_color() {
    const body = document.querySelector('body')
    var first_number = Math.floor(Math.random() * (255 - 1 + 1)) + 1;
    var second_number = Math.floor(Math.random() * (255 - 1 + 1)) + 1;
    var third_number = Math.floor(Math.random() * (255 - 1 + 1)) + 1;
    end = 'rgb(' + first_number + ', ' + second_number + ', ' + third_number + ')';
    body.style.backgroundColor = end;
    console.log('Текущий RGB-код: ' + first_number + ', ' + second_number + ', ' + third_number);
}