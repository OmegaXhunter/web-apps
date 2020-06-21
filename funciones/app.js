var canvas = document.getElementById("graficos")
var contexto = canvas.getContext("2d")
var pixel = function(x,y,color){
    contexto.fillStyle = color;
    contexto.fillRect( x, y, 1, 1 );
}
var linea = function(x,y,x2,y2,color){
    contexto.beginPath()
    contexto.moveTo(x,y)
    contexto.lineTo(x2,y2)
    contexto.strokeStyle = color
    contexto.stroke()
}
var rectangulo = function(x, y, w, h, color) {
    contexto.beginPath();
    contexto.fillStyle = color;
    contexto.fillRect(x, y, w, h);
    contexto.stroke();
}

// y=x^2
var funcion =function(valor){
return Math.sin(valor * zoom) * valor
}

var zoom = 1
var lap = false

var dibujar= function() {

    rectangulo(0, 0, canvas.clientWidth, canvas.clientHeight, 'rgb(255,255,255)')

    linea(canvas.clientWidth/2,0,canvas.clientWidth/2,canvas.clientHeight,'rgb(0,0,255)')
    linea(0,canvas.clientHeight/2,canvas.clientWidth,canvas.clientHeight/2,'rgb(0,0,255)')

    var puntoAnterior = {x:canvas.clientWidth/2,y:0}

    for(var x=Math.trunc(canvas.clientWidth/2);x<canvas.clientWidth;x++){
        var y=funcion(x-(canvas.clientWidth/2))
        linea(puntoAnterior.x,-puntoAnterior.y+(canvas.clientHeight/2),x,-y+(canvas.clientHeight/2),"rgb(255,0,0)")
        puntoAnterior.x=x
        puntoAnterior.y=y
    }
    
    puntoAnterior = {x:canvas.clientWidth/2,y:0}
    
    for(var x=Math.trunc(canvas.clientWidth/2);x>0;x--){
        var y=funcion(x-(canvas.clientWidth/2))
        linea(puntoAnterior.x,-puntoAnterior.y+(canvas.clientHeight/2),x,-y+(canvas.clientHeight/2),"rgb(255,0,0)")
        puntoAnterior.x=x
        puntoAnterior.y=y
    }
    if (lap)
        zoom -= 0.01
    else
        zoom += 0.01

    //if (zoom < -10 || zoom > 10)
    //  lap = !lap
    window.requestAnimationFrame(dibujar);
}

window.requestAnimationFrame(dibujar);