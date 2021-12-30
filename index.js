// PARA PODER TRABAJAR NUESTRP SERVIDOR NECESITAMOS DE UN MODULO LLAMADO HTTP
// Y USAREMOS REQUITRE PARA IMPORTAR EL MODULO
var http = require('http');
// SIEMPRE QUE USAMOS REQUIRE NOS VA A DEVOLVER UN OBJETO
// Y DENTRO DE ESE OBJETO TEDREMOS TODAS LAS FUNCIONALIDADES
// POR ESO CREAMOS UNA VARIABLE Y LA IGUALAMOS AL REQUIRE 

var fs = require('fs'); //FILESYSTEM, MODULO PARA LEER ARCHIVOS DESDE NODEJS Y ASI REDIRECCIONAR CON LAS PETICIONES

// LO PRIMNERO QUE HAREMOS ES CREAR UN SERVIDOR USANDO LA FUNCION CREATE SERVER
// METODO QUE RECIBE UNA FUNCION COMO PARAMETRO
http.createServer((req, res)=>{
    //FUNCION SE EJECUTARA POR CADA PETICION DEL USUARIO
    // EN ESTA FUNCION TEMDREMOS DOS PARAMTROS, LA PETICION Y LA RESPUESTA. COMO PARAMETRO
    
    if (req.url == '/pagina2') {
        res.writeHead(404,{'Content-type':'text/html'});
        res.write(`<html><body><h1>404</h1></body></html>`);
        res.end();
    }else if (req.url == '/formulario.html') {
        fs.readFile('./form.html',(error, data)=>{
            // FUNCION QUE SE EJECUTA CUANDO TERMINA DE LEER EL ARCHIVO
            res.writeHead(200,{'Content-type':'text/html'});
            
            if (error) {
                res.write(error);
            } else {
                res.write(data);
                res.end();
            }
        });
    }else{ //PARA CUALQUIER OTRA PETICION
        // console.log(req.url);
        res.writeHead(200,{'Content-type':'text/html'});
        // ESCRIBIR EL ENCABEZADO DE LA RESPUESTA, PARA CUALQUIER PETICION 
        // DEBEMOS DE INDICAR EL ENCABEZADO DE LA FUNCION EN DONDE VA INFO 
        // PARA INFORMARLE AL CLIENTE QUE ES LO QUE ESTA RECIBIENDO
        
        // AHORA MANDAREMOS LA RESPUESTA
        res.write(`<html><body><h1>Hola Mundo ${req.url}</h1></body></html>`);
        res.end();
        //LISTEN ES UNA FUNCION QUE TENGO QUE LLMAR DE LO QUE ME RETORNE EL CREATESERVER
    }

    
}).listen(4200,()=>{//MONTAMOS EL SERVIDOR EN UN PUERTO LIBRE
    // FUNCION QUE SE EJECUTA CUANDO EL SERVIDOR ESTA LEVANTADO
    console.log('Se levanto el servidor');
});

// PARA EJECUTAR EL CODIGO Y MONTAR EL SERVIDOR
// node index.js DESDE CONSOLA

// SI INSTALAMOS npm install -g nodemon NOS PERMITIRA CORRER EL SERVIDOR Y NO TENERLO  QUE BAJAR Y SUBIR CADA QUE SE HAGA UN CAMBIO
// AHORA CORREREMOS LOS ARCHIVOS EN LUGAR DE NODE INDEX.JS SERA 
// !NODEMON INDEX.JS 