function mostrar(elemento) {
    document.getElementById("demo").innerHTML = elemento;
}

let myPromise = new Promise(function(myResolve, myReject) {
    let x = 0;

    let date = new Date();
    let seconds = date.getSeconds();

    if (seconds % 2 == 0) {
        myResolve("OK: Par - " + seconds);
    } else {
        myReject("Error: Impar - " + seconds);
    }
});

myPromise.then(
    function(value) {
        mostrar(value);
    },
    function(error) {
        mostrar(error);
    }
);