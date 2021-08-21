// Ejemplo con uso de promise
/* Uso de promesas:
    - then: En caso de éxito ingresar a este método
    - catch: En caso de fracaso
Los callbacks se están inyectando dentro de la función getPosts para decirle al Promise qué
es lo que debe devolver o hacer.

FLUJO DE UNA PROMESA:
Cuando una promesa es disparada, ésta ingresa a un estado que puede ser uno de los siguientes:
- fulfilled: se cumplió con éxito
- rejected: no se pudo cumplir a causa de un error
- pending: se está procesando
- settled: finalizó
*/
function getPosts(success, error) {
    return new Promise(function(resolve, reject) {
        let req = new XMLHttpRequest();
        req.open('GET', 'https://jsonplaceholder.typicode.com/posts');
        req.onload = function() {
            if (req.status == 200) {
                resolve(JSON.parse(req.response));
            } else {
                reject();
            }
        };

        req.send();
    });
}

getPosts().then(r => {
    console.log(r);
}).catch(() => {
    console.log("Algo salió mal");
});