import {Lista} from './lista.js';

let lista=null;

export function insertar_al_inicio(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista(canvas);		
    }
    
    var DATO = window.prompt("ingrese valor de nodo");

    try{
        if(lista.buscar(DATO)==true)
            throw new Error("EL NODO YA SE INGRESO");

        lista.inserta_inicio(DATO);
        lista.dibujarNodosLog();	
        lista.dibujarNodos(DATO);
    
    }catch(e){

        window.alert(e.message);
    }
}////////////////////////////////////////////////////////
export function insertar_al_final(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista(canvas);		
    }
    
    var DATO = window.prompt("ingrese valor de nodo");

    try{

        if(lista.buscar(DATO)==true)
                throw new Error("EL NODO YA SE INGRESO");

        lista.inserta_final(DATO);
        lista.dibujarNodosLog();	
        lista.dibujarNodos(DATO);
    
    }catch(e){

        window.alert(e.message);
    }

}//////////////////////////////////////////////////////////
export function insertar_antes_x(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista(canvas);		
    }
    
    try{

        var DATO = window.prompt("ingrese valor de DATO");
        if(lista.buscar(DATO)==true)
                throw new Error("EL NODO YA SE INGRESO");

        var X = window.prompt("ingrese valor de X");
        lista.inserta_antes_X(DATO,X);
        lista.dibujarNodosLog();	
        lista.dibujarNodos(DATO);
        
    }catch(e){

        window.alert(e.message);
    }

}/////////////////////////////////////////////////////////
export function elimina_inicio(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista(canvas);		
    }

    lista.elimina_inicio();
    lista.dibujarNodosLog();	
    lista.dibujarNodos();
    
    window.alert("NODO ELIMINADOS SATISFACTORIAMENTE");

}/////////////////////////////////////////////////////////