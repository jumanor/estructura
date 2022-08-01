import {ListaDoblementeLigada} from './lista.js';
import {bootbox_prompt,bootbox_alert} from '../utils/dialog.js';
import { ListaDoblementeLigadaCanvas } from './listaCanvas.js';

let lista=null;
let listaCanvas=null;

export async function insertar_al_inicio(){
    
    if(lista==null){
        var canvas=document.getElementById('tutorial3');

        listaCanvas=new ListaDoblementeLigadaCanvas(canvas);
        lista=new ListaDoblementeLigada(listaCanvas);	
    }
    
    var DATO = await bootbox_prompt("ingrese valor de nodo");
    if(DATO==null || DATO.trim()=="")
        return;

    try{
        DATO=DATO.trim();
        
        lista.inserta_inicio(DATO);
        
        console.log("recorrido derecha");
        lista.dibujarNodosLogDer();
        console.log("recorrido izquierda");	
        lista.dibujarNodosLogIzq();	
    
    }catch(e){
        console.log(e);
        await bootbox_alert(e.message);
    }
}////////////////////////////////////////////////////////