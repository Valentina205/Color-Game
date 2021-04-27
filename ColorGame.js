var NumSquares = 6;

var Colors = GenerateRandomColors(6);

var Squares = document.querySelectorAll(".Square");
var PickedColor = PickColor();
var ColorDisplay = document.querySelector("#ColorDisplay");

var MessageDisplay = document.querySelector("#Message");
var H1 = document.querySelector("h1");

var Reset = document.querySelector("#Reset");
var Easy = document.querySelector("#EasyBtn");
var Hard = document.querySelector("#HardBtn");

ColorDisplay.textContent = PickedColor;

Reset.addEventListener("click", function() {
    //Generar nuevos colores
    Colors = GenerateRandomColors(NumSquares);
    //Escoger un nuevo color ganador random
    PickedColor = PickColor();
    ColorDisplay.textContent = PickedColor;
    //Cambiar los colores de los cuadros
    for (var i = 0; i < Squares.length; i++) {
        Squares[i].style.backgroundColor = Colors[i];
    }
    H1.style.backgroundColor = "steelblue";
    MessageDisplay.textContent = " ";
    this.textContent = "New Colors";
});

Easy.addEventListener("click", function() {
    Easy.classList.add("Selected");
    Hard.classList.remove("Selected");

    NumSquares = 3;

    //Escoger nuevos 3 colores y mostrar solo 3
    Colors = GenerateRandomColors(NumSquares);
    PickedColor = PickColor();
    ColorDisplay.textContent = PickedColor;
    for (var i = 0; i < Squares.length; i++) {
        if (Colors[i]) {
            Squares[i].style.backgroundColor = Colors[i];
        }
        else {
            Squares[i].style.display = "none";
        }
    }
    H1.style.backgroundColor = "steelblue";
});

Hard.addEventListener("click", function() {
    Hard.classList.add("Selected");
    Easy.classList.remove("Selected");

    NumSquares = 6;

    //Escoger nuevos 6 colores y mostrar los 6
    Colors = GenerateRandomColors(NumSquares);
    PickedColor = PickColor();
    ColorDisplay.textContent = PickedColor;
    for (var i = 0; i < Squares.length; i++) {
        if (Colors[i]) {
            Squares[i].style.backgroundColor = Colors[i];
            Squares[i].style.display = "block";
        }
    }
    H1.style.backgroundColor = "steelblue";
});

for (var i = 0; i < Squares.length; i++) {
    //Agregar los colores iniciales a los cuadros
    Squares[i].style.backgroundColor = Colors[i];

    //Agregar los listeners a los cuadros
    Squares[i].addEventListener("click", function() {
        //Guardar el color seleccionado
        var ClickedColor = this.style.backgroundColor;
        //Compararlo con el ganador
        if (ClickedColor === PickedColor) {
            MessageDisplay.textContent = "Correct";
            ChangeColor(PickedColor);
            H1.style.backgroundColor = PickedColor;
            Reset.textContent = "Play Again?";
        }
        else {
            this.style.backgroundColor = "#232323";
            MessageDisplay.textContent = "Try Again";
        }
    });
}

function ChangeColor(color) {
    //Pasar por todos los cuadros
    for(var i = 0; i < Squares.length; i++) {
        Squares[i].style.backgroundColor = color;
    }
}

function PickColor() {
    var Random = Math.floor(Math.random()*Colors.length);
    return Colors[Random];
}

function GenerateRandomColors(Num) {
    //Hacer el array
    var Arr = [];
    //Agregar los colores Random al array
    for (var i = 0; i < Num; i++) {
        Arr.push(RandomColor());
    }
    //Retornar el Array
    return Arr;
}

function RandomColor() {
    //Elergir un Red, un Green y un Blue de 0 a 255
    Red = Math.floor(Math.random()*256);
    Green = Math.floor(Math.random()*256);
    Blue = Math.floor(Math.random()*256);
    return "rgb(" + Red + ", " + Green + ", " + Blue + ")";
}