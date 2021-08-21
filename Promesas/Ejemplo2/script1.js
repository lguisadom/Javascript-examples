// Ejemplo sin uso de promise
/* Tenemos que hacer 2 callbacks a nuestra función getPosts para interceptar 
los eventos. */
function getPosts(success, error) {
    let req = new XMLHttpRequest();
    req.open('GET', 'https://jsonplaceholder.typicode.com/posts');

    req.onload = function() {
        if (req.status = 200) {
            success(JSON.parse(req.response));
        } else {
            error();
        }
    };

    req.send();
}

getPosts(
    function(r) {
        console.log("Success:", r);
    },
    function(r) {
        console.log('Ocurrió un error');
    }
);