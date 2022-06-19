import {Lista} from './lista.js';

let lista=null;

export function agregar(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista(canvas);		
    }
    
    var result = window.prompt("ingrese valor de nodo");
    lista.agregarNodo(result);	

}////////////////////////////////////////////////////////