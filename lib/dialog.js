export function bootbox_prompt(){

    return new Promise((resolve, reject) => {

        window.bootbox.prompt("ingrese valor de nodo", function(result){
            resolve(result);
        });
          
    });
}////////////////////////////////////////////////////////
export function bootbox_alert(mensaje){

    return new Promise((resolve, reject) => {

        window.bootbox.alert(mensaje, function(){
            resolve("");
        });
          
    });
}////////////////////////////////////////////////////////