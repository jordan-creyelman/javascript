window.onload = function()
{
    var canvas =document.createElement('canvas');
    //dessiner le canvas 
    canvas.width=900;
    canvas.height=600;
    canvas.style.border ="1px solid";
    //accroche le canvas
    document.body.appendChild(canvas);
    // dessiner en 2d
    var ctx = canvas.getContext('2d');
    ctx.fillStyle ="#ff0000";
    // rectangle commencer part ou le mettre puis le dessiner
    ctx.fillRect(30,30,100,50);
    
}