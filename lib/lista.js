class Nodo{

    //publicos
    _info=0;
    _liga=null;
    
}/////////////////////////////////////////////////////////
export class Lista{
	
    _canvas=null;
    _inicio=null;
    _anterior=null;

    constructor(canvas) {
                this._canvas = canvas;
      }
    agregarNodo(info){

        var nodo=new Nodo();
        nodo._info=info;


        if(this._inicio==null){//inicio
             
             this._anterior=nodo;
             this._inicio=this._anterior;
        }
        else{//

            this._anterior._liga=nodo;
            this._anterior=nodo;

        }
        
        this.dibujarNodosLog();
        this.dibujarNodos();
    }
    dibujarNodosLog(){

        //var canvas=this.canvas;
        //var ctx = canvas.getContext('2d');
        var	tmp=this._inicio;
        var cad="";
        while(tmp!=null){
            cad+=tmp._info+"::";
            tmp=tmp._liga;
        }
        console.log(cad);
    }
    dibujarNodos(){

        var canvas=this._canvas;
        var ctx = canvas.getContext('2d');
        var	tmp=this._inicio;
        
        var x=0;
        var y=0;
        var ctd=0;				
        while(tmp!=null){
            
            //Dibujar rectangulo
            ctx.beginPath();
            ctx.fillStyle = "rgb(200,0,0)";
             ctx.fillRect (x,y, 55,30);
            //texto
            ctx.fillStyle="white";
            ctx.font = '15px Arial';
            ctx.fillText(tmp._info,x+20,y+20);
            ctx.closePath();

            //Dibujar flecha
            //linea de la flecha
            ctx.beginPath();
            ctx.moveTo(x+55,y+15);
            ctx.lineTo(x+55+20,y+15);
            ctx.closePath();
            ctx.stroke();
            //cabeza de la flecha
            ctx.beginPath();
            ctx.fillStyle="black";
            ctx.moveTo(x+55+20,y+10);
            ctx.lineTo(x+55+20+5,y+15);
            ctx.lineTo(x+55+20,y+20);
            ctx.closePath();
            ctx.fill();

            x=80*++ctd;
            tmp=tmp._liga;
        }
        
    }
}/////////////////////////////////////////////////////////