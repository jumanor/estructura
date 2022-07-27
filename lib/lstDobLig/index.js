import {ListaDoblementeLigada} from './lista.js';
import {bootbox_prompt,bootbox_alert} from '../utils/dialog.js';

let lista=null;

export async function insertar_al_inicio(){
    
    if(lista==null){
        lista=new ListaDoblementeLigada();		
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

        await bootbox_alert(e.message);
    }
}////////////////////////////////////////////////////////