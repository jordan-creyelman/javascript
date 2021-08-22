window.onload = function()
{ 
    var canvas;
    var ctx;
    var delay =1000;
    var yCoord= 0;
    var xCoord = 0;


    init();
    function init()
    {
     canvas =document.createElement('canvas');
    //dessiner le canvas 
    canvas.width=900;
    canvas.height=600;
    canvas.style.border ="1px solid";
    //accroche le canvas
    document.body.appendChild(canvas);
    // dessiner en 2d
     ctx = canvas.getContext('2d');
    ctx.fillStyle ="#ff0000";
    // rectangle commencer part ou le mettre puis le dessiner
    ctx.fillRect(30,30,100,50);
    refreshCanvas();
    setTimeout(refreshCanvas,delay);
    }

    function refreshCanvas(){
    ctx.clearRect(0,0,canvas.width,canvas.height);
    ctx.fillStyle ="#ff0000";
    // rectangle commencer part ou le mettre puis le dessiner
    ctx.fillRect(xCoord,yCoord,100,50);
    setTimeout(refreshCanvas,delay);
    }


}