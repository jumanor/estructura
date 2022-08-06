import {ListaCircularSimplementeLigada} from './lista.js';
import {ListCircularSimplementeLigadaCanvas} from './listaCanvas.js';
import {bootbox_prompt,bootbox_alert} from '../utils/dialog.js';

let lista=null;
let listaCanvas=null;

export async function insertar_al_inicio(){
    var canvas=document.getElementById('tutorial2'); 
    if(lista==null){
        listaCanvas=new ListCircularSimplementeLigadaCanvas(canvas);
        lista=new ListaCircularSimplementeLigada(listaCanvas);
    }
    
    var DATO = await bootbox_prompt("ingrese valor de nodo");
    if(DATO==null || DATO.trim()=="")
        return;

    try{
        
        DATO=DATO.trim();
        if(lista.buscar(DATO)==true)
            throw new Error("EL NODO YA SE INGRESO");

        lista.inserta_inicio(DATO);
        
        lista.dibujarNodosLog();	
    
    }catch(e){
        console.log(e);
        await bootbox_alert(e.message);
    }
}////////////////////////////////////////////////////////