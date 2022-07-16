export function irToVista1(){

    document.getElementById("principal").style.display="none";
    document.getElementById("vista1").style.display="";
    document.getElementById("vista2").style.display="none";
    
    history.pushState({vistaId:"vista1"},null,"#vista1");
}
export function irToVista2(){

    document.getElementById("principal").style.display="none";
    document.getElementById("vista1").style.display="none";
    document.getElementById("vista2").style.display="";
    
    history.pushState({vistaId:"vista2"},null,"#vista2");
}
window.onpopstate = function checkState(e) {
    
    if(e.state==null) {
        
        document.getElementById("principal").style.display="";
        document.getElementById("vista1").style.display="none";
        document.getElementById("vista2").style.display="none";
        
    }
    else if(e.state.vistaId=="vista1"){

        document.getElementById("principal").style.display="none";
        document.getElementById("vista1").style.display="";
        document.getElementById("vista2").style.display="none";
    
    }
    else if(e.state.vistaId=="vista2"){
        
        document.getElementById("principal").style.display="none";
        document.getElementById("vista1").style.display="none";
        document.getElementById("vista2").style.display="";
    
    }
}/////////////////////////////////////////////////////////////////////////////
window.onload=function(){
  
    if(window.location.hash=="#vista1"){

        document.getElementById("principal").style.display="none";
        document.getElementById("vista1").style.display="";
        document.getElementById("vista2").style.display="none";

    }
    else if(window.location.hash=="#vista2"){
        
        document.getElementById("principal").style.display="none";
        document.getElementById("vista1").style.display="none";
        document.getElementById("vista2").style.display="";
    }

}/////////////////////////////////////////////////////////////////////////////