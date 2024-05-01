const formu = document.querySelector('form');

 formu.addEventListener('submit', e => {
        e.preventDefault();

    let name = document.getElementById("user").value;
    let password = document.getElementById("pass").value;
    if (isvalid(name, "correo")) {

        if (isvalid(password, "password")) {

    let  data = { "email": name, "password": password };
    let url = "http://localhost:8888/api/iniciosesion";

    fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body:  JSON.stringify(data)
    })
        .then(response => response.json() )
        .then(data =>{

        response(data);
        }
         )
        .catch(error => console.error("Error:", error));
    }
}
});

function response(data) {

    let respuesta = JSON.stringify(data);
    let name = document.getElementById("user").value;
        let password = document.getElementById("pass").value;

    let  data2 = { "email": name, "password": password };
    console.log(data2);
    if (respuesta == "true") {
        fetch("http://localhost:8888/api/obtenerusuario",
        {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data2)
        }).then(response => response.json())
        .then(data => {
        console.log(JSON.stringify(data));
            let usuario = {
                "imgperfil": data.imgperfil,
                "username": data.username,
                "correo": data.correo
            }
            localStorage.setItem("usuario", JSON.stringify(usuario));
            console.log('login');
        })

    } else {
        console.log('error');
    }
}
function isvalid(valor, param) {

    switch (param) {
        case "correo":
            if (valor == '') {
                document.getElementById("error").textContent = "El campo correo no puede estar vacío";
                return false;
            }
            if (!/^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/.test(valor)) {
                document.getElementById("error").textContent = "El campo correo no puede tener menos de 3 caracteres";
                return false;
            }

            break;
        case "password":

            if (valor == '') {
                document.getElementById("error").textContent = "El campo password no puede estar vacío";
                return false;
            }

            if((/^!(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{5,10}$)/).test(valor)){
                document.getElementById("error").textContent = "La contraseña debe tener entre 5 y 10 caracteres, y debe contener un numero y una letraº";
                return false;
            }
            break;

            default:
                return true;
                break;
    }

    return true;
}