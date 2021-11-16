class Pujar {
    constructor() {

    }

    pujar() {
        $("h1").prepend("Enorabuena " + document.getElementById("nombre").value + ", pujaste " + document.getElementById("puja").value + " pavos");
    }
}

var p = new Pujar();