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
   isVacio(){
        if(this.INICIO==null)
            return true;
        else 
            return false;
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
    inserta_antes_X(DATO,X){

        if(this.INICIO==null){
            throw new Error("NO IMPLEMENTADO");
        }
        
        var P=this.INICIO;
        
        var Q=P;
        while(Q.ligaDer!=null && Q.info!=X){
            Q=Q.ligaDer;
        }
        if(Q.info==X){
            var T=new Nodo();
            T.info=DATO;
            T.ligaDer=Q;
            var R=Q.ligaIzq;
            Q.ligaIzq=T;
            
            if(P==Q){//LA lista tiene solo un elemento
                P=T;
                T.ligaIzq=null;//OPCIONAL 
            }
            else{
                R.ligaDer=T;
                T.ligaIzq=R;
            }
        }
        else{

            throw new Error("EL elemento no se encuentra en la lista");
        }
        
        this.INICIO=P;

        this.LISTA_CANVAS.inserta_antes_X(this.INICIO,T);

    }///////////////////////////////////////////
    inserta_despues_X (DATO,X){
        var P=this.INICIO;
        var F=this.FIN;
        
        var Q=P;
        var BAND=1;
        while ( Q.info!=X && BAND==1 ){
            if(Q.ligaDer!=null){
                Q=Q.ligaDer;
            }
            else{
                BAND=0;
            }
        }
        if(BAND==1){
            var T=new Nodo();
            T.info=DATO;
            T.ligaDer=Q.ligaDer;
            Q.ligaDer=T;
            
            ////------------------
            T.ligaIzq=Q;
            if(Q==F){//ULTIMO NODO
                
                F=T;
            }
            else{
                
                T.ligaDer.ligaIzq=T;    
            }
            ////----------------------
        }
        else{
            throw new Error("EL NODO DADO COMO REFERENCIA NO SE ENCUENTRA EN LA LISTA");
        }
        
        this.INICIO=P;
        this.FIN=F;

        this.LISTA_CANVAS.inserta_despues_X(this.INICIO,T);

    }//////////////////////////////////////////////////////////////////
    async elimina_inicio(){

        await this.LISTA_CANVAS.elimina_inicio_pre(this.INICIO);

        let Q = this.INICIO;
        this.INICIO = Q.ligaDer;
        
        if(this.INICIO!=null)//Solo si hay mas de un nodo
            this.INICIO.ligaIzq=null;//Necesario
        
        Q=null;//En c++ "delete Q",como buena práctica(en esta caso no es necesario) revisar https://es.javascript.info/garbage-collection
        
        this.LISTA_CANVAS.elimina_inicio_post(this.INICIO);
        
    }///////////////////////////////////////////// 
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