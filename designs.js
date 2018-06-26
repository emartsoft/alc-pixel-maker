// When size is submitted by the user, call makeGrid()
$('#sizePicker').submit(function (event) {
    event.preventDefault();
    const gridHeight = $('#inputHeight').val();
    const gridWidth = $('#inputWeight').val();

    makeGrid(gridHeight, gridWidth);
});

// Function to create the grid
function makeGrid(gridHeight, gridWidth) {
    $('tr').remove();
    for (let row = 1; row <= gridHeight; row++) {
        $('#pixelCanvas').append('<tr></tr>');
        for (let column = 1; column <= gridWidth; column++) {
            $('tr').filter(':last').append('<td></td>');
        }
    }
    fillCellColor();
}

// Clear and reset the grid
$('#reset').click(function (event) {
    event.preventDefault();
    $('#pixelCanvas').find('tr').remove();
});

//Fill the cells with color when click event is registered
function fillCellColor() {
    const cell = $('td');
    cell.click(function () {
        const color = $('#colorPicker').val();
        //Add or remove style color if it's been set or not
        if ($(this).attr('style')) {
            $(this).removeAttr('style');
        } else {
            $(this).attr('style', 'background-color:' + color);
        }
    });
}