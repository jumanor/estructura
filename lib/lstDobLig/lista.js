class Nodo{

    info=0;
    ligaDer=null;
    ligaIzq=null;
}
export class ListaDoblementeLigada{

   INICIO=null;
   FIN=null;

   LISTA_CANVAS=null;

   constructor(listaCanvas) {
        this.LISTA_CANVAS = listaCanvas;
   }///////////////////////////////////////////
   inserta_inicio(DATO){

        if(this.INICIO==null){//Algoritmo Jorge
            
            var Q=new Nodo();
            Q.info=DATO;
            
            this.INICIO=Q;
            this.FIN=Q;
        }
        else{//Algoritmo cairo
            
            var P=this.INICIO;
                
            var Q=new Nodo();
            Q.info=DATO;
            Q.ligaDer=P;
            P.ligaIzq=Q;
            Q.ligaIzq=null;//Opcional no es necesario
            P=Q;
            
            this.INICIO=P;    
        }

        this.LISTA_CANVAS.inserta_inicio(this.INICIO);

    }///////////////////////////////////////////
    dibujarNodosLogDer(){

        var P=this.INICIO;
        var cad="";
        while(P!=null){
            cad+=P.info+"::";
            P=P.ligaDer;
        }
        console.log(cad);

    }/////////////////////////////////////////////
    dibujarNodosLogIzq(){

        var P=this.FIN;
        var cad="";
        while(P!=null){
            cad+=P.info+"::";
            P=P.ligaIzq;
        }
        
        console.log(cad);
    }/////////////////////////////////////////////
}