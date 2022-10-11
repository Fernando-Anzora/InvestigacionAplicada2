const indexedDB = window.indexedDB;

if(indexedDB){
    let db;
    const respuesta = indexedDB.open("Lista",1);
    respuesta.onsuccess = () =>{
       db = respuesta.result
        alert("Abriendo Base de Datos",db);
        
    }
    
    respuesta.onupgradeneeded = () =>{
        db = respuesta.result
        alert("Creando Base de Datos",db);
        const objeto = db.createObjectStore("Lista");
    }
    
    respuesta.onerror = (Error) =>{
        alert("Error",Error);
        
    }
}

