class Nodo{

    info=0;
    liga=null;
}
export class ListaCircularSimplementeLigada{

    INICIO=null;

    LISTA_CANVAS=null;

    constructor(listaCanvas) {
         this.LISTA_CANVAS = listaCanvas;
    }///////////////////////////////////////////
    inserta_inicio(DATO){
       
        if(this.INICIO==null){//vacio
            var P=this.INICIO;
            
            var Q=new Nodo();
            Q.info=DATO;
            Q.liga=Q;
            P=Q;
            
            this.INICIO=P;
      }
      else{//no vacio
        
          var P=this.INICIO;
      
          var Q=new Nodo();
          Q.info=DATO;
          
          var F=P;//buscar el ultimo
          while(F.liga!=P){
              F=F.liga;
          }
          F.liga=Q;
          Q.liga=P;
          P=Q;
          
          this.INICIO=P;
          
      }

      this.LISTA_CANVAS.inserta_inicio(this.INICIO);

    }///////////////////////////////////////////
    dibujarNodosLog(){

        var P=this.INICIO;
        if(P!=null){
            var F=P;
            
            var cad="";
            if(F.liga==P){//1
                
                cad+=P.info+"::";
                cad+=P.liga.info;
                
            }
            else{//2 o mas
                
                var cad="";
                while(F.liga!=P){
                    cad+=F.info+"::";
                    F=F.liga;
                }    
                cad+=F.info+"::";
                cad+=F.liga.info;
            }
                
            console.log(cad);
        }
       

    }/////////////////////////////////////////////
    buscar(DATO){
        if(this.INICIO==null)
                return false;
        
        var encontrado=false;
        var	tmp=this.INICIO;
        var P=this.INICIO;

        do{
            if(tmp.info==DATO){
                encontrado=true;
                break;
            }
            tmp=tmp.liga;

        }while(tmp!=P);
        
        return encontrado;
    }///////////////////////////////////////////
}