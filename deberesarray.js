let canales = ["telecinco", "lasexta", "fdf", "neox"];

document.getElementById("demo").innerHTML = canales;

for(let i = 0; i < canales.length; i++){
    canales.push(canales[0]);



    canales.shift();

    document.write(canales + "<br><br>");




}

