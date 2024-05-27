

const back = document.getElementById('back');
back.addEventListener('click', () => {
window.location.href = "http://35.180.138.214:8888/";
});

const formu = document.querySelector('form');

formu.addEventListener('submit', e => {
    e.preventDefault();
    let name = document.getElementById("user").value;
    let mail = document.getElementById("email").value;
    let loca = document.getElementById("loca").value;
    let password = document.getElementById("pass").value;
    let contra2=document.getElementById("repass").value;

    let validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
         let bool = true;
            if (name == '') {
            document.getElementById("error").textContent = "El campo nombre no puede estar vacío";
                bool = false;
            }
             if(!(/^[a-zA-ZáéíóúüÜÁÉÍÓÚñÑ\s-]{3,30}$/).test(name)){
document.getElementById("error").textContent = "El campo nombre debe tener un minimo de 3-30 caracteres";
                    bool = false;
                }

                if (mail == '') {
document.getElementById("error").textContent = "El campo correo no puede estar vacío";
                    bool = false;
                }
                if (password == '') {
document.getElementById("error").textContent = "El campo contraseña no puede estar vacío";
                    bool = false;
                }
                if(!(/(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{5,10}$)/).test(password)){
document.getElementById("error").textContent = "La contraseña debe tener entre 5 y 10 caracteres, y debe contener un numero y una letraº";
                    bool = false;
                }

                if (contra2 == '') {
document.getElementById("error").textContent = "El campo recontraseña no puede estar vacío";
                    bool = false;
                }
                if(!(/(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{5,10}$)/).test(contra2)){
document.getElementById("error").textContent = "La recontraseña debe tener entre 5 y 10 caracteres, y debe contener un numero y una letraº";
                    bool = false;

                }

                if (password != contra2) {
document.getElementById("error").textContent = "La contraseña y recontraseña debe ser iguales";
                    bool = false;
                }
                if (!validEmail.test(mail)) {
 document.getElementById("error").textContent = "El campo correo esta mal formulado";
                    bool = false;
                }

                if(bool==true){
const data1 = { "nombre": name, "email":mail,"password": password };

    let url = "http://35.180.138.214:8888/api/registro";

        fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body:  JSON.stringify(data1)
        })
            .then(response => response.json() )
            .then(data => res(JSON.stringify(data)))
            .catch(error => console.error("Error:", error));

}else{
console.log("Error");
}

});
function res(dato){

 if(dato=='false'){ console.log('Usuario ya existe')}
}