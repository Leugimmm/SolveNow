

const back = document.getElementById('back');
back.addEventListener('click', () => {
window.location.href = "http://solucionaya.es/";
});

const formu = document.querySelector('form');

formu.addEventListener('submit', e => {
    e.preventDefault();
    let name = document.getElementById("user").value;
    let mail = document.getElementById("email").value;
    let loca = document.getElementById("loca").value;
     let comu = document.getElementById("comu").value;
    let password = document.getElementById("pass").value;
    let contra2=document.getElementById("repass").value;
    let p3=document.querySelector('#a1');
            let p4=document.querySelector('#a2');
            let p5=document.querySelector('#a5');
                    let p6=document.querySelector('#a6');
                    p3.style.display = 'none';
                    p4.style.display = 'none';
                    p5.style.display = 'none';
                    p6.style.display = 'none';

    let validEmail = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
         let bool = true;
            if (name == '') {
            p3.textContent = "El campo nombre no puede estar vacío";
            p3.style.display = 'block';
                    p3.style.color='red';
                bool = false;
            }
             if(!(/^[a-zA-ZáéíóúüÜÁÉÍÓÚñÑ\s-]{3,30}$/).test(name)){
p3.textContent = "El campo nombre debe tener un minimo de 3-30 caracteres y no puede tener numeros";
p3.style.display = 'block';
                    p3.style.color='red';
                    bool = false;
                }

                if (mail == '') {
p4.textContent = "El campo correo no puede estar vacío";
p4.style.display = 'block';
                    p4.style.color='red';
                    bool = false;
                }
                if (password == '') {
p5.textContent = "El campo contraseña no puede estar vacío";
p5.style.display = 'block';
                    p5.style.color='red';
                    bool = false;
                }
                if(!(/(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{5,10}$)/).test(password)){
p5.textContent = "La contraseña debe tener entre 5 y 10 caracteres, y debe contener un numero y una letraº";
p5.style.display = 'block';
                    p5.style.color='red';
                    bool = false;
                }

                if (contra2 == '') {
p6.textContent = "El campo recontraseña no puede estar vacío";
p6.style.display = 'block';
                    p6.style.color='red';
                    bool = false;
                }
                if(!(/(?!^[0-9]*$)(?!^[a-zA-Z]*$)^([a-zA-Z0-9]{5,10}$)/).test(contra2)){
p6.textContent = "La recontraseña debe tener entre 5 y 10 caracteres, y debe contener un numero y una letraº";
p6.style.display = 'block';
                    p6.style.color='red';
                    bool = false;

                }

                if (password != contra2) {
p5.textContent = "La contraseña y recontraseña debe ser iguales";
p5.style.display = 'block';
                    p5.style.color='red';
                    bool = false;
                }
                if (!validEmail.test(mail)) {
p4.textContent = "El campo correo esta mal formulado";
 p4.style.display = 'block';
                     p4.style.color='red';
                    bool = false;
                }

                if(bool==true){
                let url = 'http://solucionaya.es/api/auto'
                       let url2 = 'http://solucionaya.es/api/loca'

                       fetch(url, {
                           method: "GET",
                           headers: {
                               "Content-Type": "application/json"
                           }
                       })
                           .then(response => response.json())
                           .then(data3 => {
                               let comuna;

                               for (let i = 0; i < data3.length; i++) {

                                   if (comu == data3[i].c_autonoma) {
                                       comuna = data3[i].id;

                                   }
                               }
                               fetch(url2, {
                                   method: "GET",
                                   headers: {
                                       "Content-Type": "application/json"
                                   }
                               })
                                   .then(response => response.json())
                                   .then(data2 => {
                                       let local;


                                       for (let i = 0; i < data2.length; i++) {

                                           if (loca == data2[i].ciudad) {
                                               local = data2[i].id;


                                           }

                                       }
                                       if(comproba(comuna,local)==true){
                                       }else{
const data1 = { "nombre": name, "email":mail,"password": password,"id_Autonoma":comuna ,"id_Localidad":local };

    let url3 = "http://solucionaya.es/api/registro";

        fetch(url3, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body:  JSON.stringify(data1)
        })
            .then(response => response.json() )
            .then(data => res(JSON.stringify(data)))
            .catch(error => console.error("Error:", error));
            }

            })
            })

}else{
console.log("Error");
}

});
function res(dato){
let p4=document.querySelector('#a2');
 if(dato=='false'){ p4.textContent = "Usuario con este correo ya existe";
                    p4.style.display = 'block';
                                        p4.style.color='red';}else{
                                        window.location.href = "http://solucionaya.es/login";
                                        }
}

window.addEventListener("load", function (event)  {
let url = 'http://solucionaya.es/api/auto'
    let url2= 'http://solucionaya.es/api/loca'

        fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then(response => response.json())
            .then(data3 => {


                fetch(url2, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    }
                })
                    .then(response => response.json())
                    .then(data2 => {
                        let local;



                                               LI(data3);
                                               LI2(data2);

                        })
                        })

})
function LI(data){

for(let i=0;i<data.length;i++){
    const ul = document.querySelector('body > main > div.login-container > div > form > div:nth-child(7) > div.conte > ul');
    const nuevoLi = document.createElement('li');

nuevoLi.textContent = data[i].c_autonoma;

nuevoLi.classList.add('list-group-item');
nuevoLi.classList.add('list-group-item-action');
nuevoLi.classList.add('filtro');

nuevoLi.addEventListener('click',function(){
document.getElementById('comu').value=nuevoLi.textContent;
document.querySelector('body > main > div.login-container > div > form > div:nth-child(7) > div.conte ').classList.add('filtro');
})

ul.appendChild(nuevoLi);

}
}
function LI2(data){

for(let i=0;i<data.length;i++){
    const ul = document.querySelector('body > main > div.login-container > div > form > div:nth-child(9) > div.conte > ul');
    const nuevoLi = document.createElement('li');

nuevoLi.textContent = data[i].ciudad;

nuevoLi.classList.add('list-group-item');
nuevoLi.classList.add('list-group-item-action');
nuevoLi.classList.add('filtro');

nuevoLi.addEventListener('click',function(){
document.getElementById('loca').value=nuevoLi.textContent;
document.querySelector('body > main > div.login-container > div > form > div:nth-child(9) > div.conte ').classList.add('filtro');
})

ul.appendChild(nuevoLi);

}
}

     document.getElementById('comu').addEventListener('keyup', e => {


         document.querySelectorAll('body > main > div.login-container > div > form > div:nth-child(7) > div.conte > ul > .list-group-item').forEach(element => {
             element.textContent.toLowerCase().includes(e.target.value.toLowerCase())
                 ? element.classList.remove('filtro')
                 : element.classList.add("filtro")

         })


     })

     document.getElementById('comu').addEventListener('keypress', e => {
         if (e.key === 'Enter') {

             document.querySelectorAll('body > main > div.login-container > div > form > div:nth-child(7) > div.conte > ul > .list-group-item').forEach(element => {
                 element.classList.add('filtro')
             })
             document.querySelector('body > main > div.login-container > div > form > div:nth-child(7) > div.conte ').classList.add('filtro');
         }
     }
     )

     document.getElementById('comu').addEventListener('click', e => {

         document.querySelectorAll('body > main > div.login-container > div > form > div:nth-child(7) > div.conte > ul > .list-group-item').forEach(element => {

              element.textContent.toLowerCase().includes(e.target.value.toLowerCase())
                                          ? element.classList.remove('filtro')
                                          : element.classList.add("filtro")


         })
           document.querySelector('body > main > div.login-container > div > form > div:nth-child(7) > div.conte').classList.remove('filtro');


     })
     document.getElementById('loca').addEventListener('keyup', e => {


         document.querySelectorAll('body > main > div.login-container > div > form > div:nth-child(9) > div.conte > ul > .list-group-item').forEach(element => {
             element.textContent.toLowerCase().includes(e.target.value.toLowerCase())
                 ? element.classList.remove('filtro')
                 : element.classList.add("filtro")

         })


     })

     document.getElementById('loca').addEventListener('keypress', e => {
         if (e.key === 'Enter') {

             document.querySelectorAll('body > main > div.login-container > div > form > div:nth-child(9) > div.conte > ul > .list-group-item').forEach(element => {
                 element.classList.add('filtro')
             })
             document.querySelector('body > main > div.login-container > div > form > div:nth-child(9) > div.conte').classList.add('filtro');
         }
     }
     )

     document.getElementById('loca').addEventListener('click', e => {

         document.querySelectorAll('body > main > div.login-container > div > form > div:nth-child(9) > div.conte > ul > .list-group-item').forEach(element => {

            element.textContent.toLowerCase().includes(e.target.value.toLowerCase())
                             ? element.classList.remove('filtro')
                             : element.classList.add("filtro")


         })
           document.querySelector('body > main > div.login-container > div > form > div:nth-child(9) > div.conte').classList.remove('filtro');


     })
     document.addEventListener('click', e => {
         const input = document.getElementById('comu');
          const input2 = document.getElementById('loca');

         const conte = document.querySelector('body > main > div.login-container > div > form > div:nth-child(7) > div.conte ');
         const conte2 =document.querySelector('body > main > div.login-container > div > form > div:nth-child(9) > div.conte ');

         // Verificar si el clic se ha realizado fuera del input y de los elementos asociados
         if (!input.contains(e.target) && !conte.contains(e.target)) {
             conte.classList.add('filtro');
         }
         if (!input2.contains(e.target) && !conte2.contains(e.target)) {
                 conte2.classList.add('filtro');
             }

     });

      function comproba(comuna,local){
        let p1=document.querySelector('#a3');
        let p2=document.querySelector('#a4');

        p1.style.display = 'none';
        p2.style.display = 'none';


        if(comuna==null){

        p1.style.display = 'block';
        p1.style.color='red';
        return true;
        }
        if(local==null){

        p2.style.display = 'block';
        p2.style.color='red';
        return true;
        }

        return false;

        }