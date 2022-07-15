const fs = require('fs');
const data = fs.readFileSync("productos.json", "utf-8");
const archivito = JSON.parse(data);
class Contenedor {
    constructor(archivo=[]){
        this.archivo = archivo;
        
    }
    traerArray(){
        const productos = data;
        //console.log(productos);
        return productos;
    }
    save(objeto){
        let nuevoArray =[];
        this.archivo = archivito;
        let idGenerico = 1;
        nuevoArray = this.archivo
        
        console.log(nuevoArray);
        
            try{
                if(nuevoArray.length<1)
            {   
            nuevoArray=this.archivo;
            nuevoArray.push(objeto)
            console.log(nuevoArray);
            for (let i=0; i < nuevoArray.length; i++){
                nuevoArray[i].id = idGenerico;
                console.log(`id asignado: ${idGenerico}`)
                idGenerico++;
            }   
                
                fs.writeFileSync("productos.json", JSON.stringify(nuevoArray));
                
            }
            else{
                nuevoArray.push(objeto);
                for(let i=0; i< nuevoArray.length; i++){
                const tieneId = nuevoArray[i].hasOwnProperty('id');
                    if(tieneId){
                        idGenerico++;
                    }else{
                        nuevoArray[i].id = idGenerico;
                        console.log(`id asignado: ${idGenerico}`)
                        idGenerico++;
                    }
                }
                
                fs.writeFileSync("archivo.json", JSON.stringify(nuevoArray));
                
            }
            }catch(err){
                console.error(err);
            }
    }
        
        
        
    
    getById(numero){
        let nuevoArray =[];
        this.archivo = archivito;
        nuevoArray = this.archivo;
        var item = nuevoArray.find(item => item.id === numero);
        console.log(item);
        
    }

    getAll(){
        try{
        let nuevoArray =[];
        this.archivo = archivito;
        
        nuevoArray = this.archivo
        
        console.log(nuevoArray);
        }catch(err){
            console.error(err);
        }
    }

    deleteById(numero){
        let nuevoArray =[];
        this.archivo = archivito;
        nuevoArray = this.archivo;
        const indexOfObject = nuevoArray.findIndex(object =>{
            return object.id === numero;
        });
        nuevoArray.splice(indexOfObject, 1);
        console.log(nuevoArray);
    }

    deleteAll(){
        let nuevoArray =[];
        this.archivo = archivito;
        nuevoArray = this.archivo
        nuevoArray = [];
        fs.writeFileSync("archivo.json", JSON.stringify(nuevoArray));
        console.log("Objetos eliminados con exito");
        console.log(nuevoArray);
    }
}

module.exports = Contenedor
