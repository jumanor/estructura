import {Lista} from './lista.js';
import {MiError} from './error.js';
import {bootbox_prompt,bootbox_alert} from './dialog.js';

let lista=null;

export async function insertar_al_inicio(){
    
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista(canvas);		
    }
    
    var DATO=await bootbox_prompt();
    if(DATO==null)
        return;
    
    try{

        if(lista.buscar(DATO)==true){
            throw new Error("El DATO ya esta ingresado en la Lista");
        }

        lista.inserta_inicio(DATO);
        lista.dibujarNodosLog();	
        lista.dibujarNodos(DATO);
        
    }catch(e){

        await bootbox_alert(e.message);
    }
}////////////////////////////////////////////////////////
export async function insertar_al_final(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista(canvas);		
    }
   
    try{
        if(lista.es_vacio()===true){
            throw new Error("LA LISTA NO PUEDE SER VACIA")
        }
        var DATO = window.prompt("ingrese valor de nodo");
        lista.inserta_final(DATO);
        lista.dibujarNodosLog();	
        lista.dibujarNodos(DATO);
    
    }catch(e){

        console.log("111");
        await bootbox_alert(e.message);
        console.log("222");
    }

}//////////////////////////////////////////////////////////
export function insertar_antes_x(){
    var canvas=document.getElementById('tutorial'); 
    if(lista==null){
        lista=new Lista(canvas);		
    }
    
    try{
        var DATO = window.prompt("ingrese valor de DATO");
        var X = window.prompt("ingrese valor de X");
        lista.inserta_antes_X(DATO,X);
        lista.dibujarNodosLog();	
        lista.dibujarNodos();
    }catch(e){

        if( e instanceof MiError){

            window.alert(e.name+":::"+e.message);
        
        }
        else 
             window.alert(e.name+":::"+e.message);
        
    }
}/////////////////////////////////////////////////////////