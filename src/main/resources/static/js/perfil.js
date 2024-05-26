const sube2 = document.getElementById('index');

sube2.addEventListener('click', () => {
window.location.href = "https://solvenow.onrender.com/";
});

if (JSON.parse(localStorage.getItem('usuario1')) !== null) {

    // El localStorage existe, puedes realizar acciones adicionales aquí
    var valorAlmacenado = JSON.parse(localStorage.getItem('usuario1'));
    console.log('El valor almacenado es: ', valorAlmacenado);


} else {
             window.location.href = 'https://solvenow.onrender.com/';
    // El localStorage no existe o no tiene un valor para la clave 'miClave'
    console.log('El localStorage no tiene un valor para la clave "miClave".');
}

window.addEventListener("load", function (event)  {
 let url = window.location.toString();
  url = url.replace("?", "/");

 // Concatena el dato como parámetro en la URL
 fetch(url, {
     method: "GET",
     headers: {
         "Content-Type": "application/json"
     }
 })
     .then(response => response.json())
     .then(data => {

     Usuario(data);

     })

     })

     function Usuario(data){
let no=document.getElementById('no');
let em=document.getElementById('em');
let ape=document.getElementById('ape');
let pass=document.getElementById('pass');
let comu=document.getElementById('comu');
let loca=document.getElementById('loca');

no.value=data.nombre;
em.value=data.email;
pass.value=data.password;


let url = 'https://solvenow.onrender.com/api/auto'
    let url2= 'https://solvenow.onrender.com/api/loca'

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

                    if (data.id_Autonoma == data3[i].id) {
                         comuna = data3[i].c_autonoma;

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

                                 if (data.id_Localidad == data2[i].id) {
                                       local = data2[i].ciudad;


                                                   }

                                               }
                                               comu.value=comuna;
                                               loca.value=local;
                                               ape.value=data.descripcion;
                                               LI(data3);
                                               LI2(data2);

                        })
                        })



     }


function LI(data){

for(let i=0;i<data.length;i++){
    const ul = document.querySelector('#conti > form > div:nth-child(2) > div:nth-child(1) > div > ul');
    const nuevoLi = document.createElement('li');

nuevoLi.textContent = data[i].c_autonoma;

nuevoLi.classList.add('list-group-item');
nuevoLi.classList.add('list-group-item-action');
nuevoLi.classList.add('filtro');

nuevoLi.addEventListener('click',function(){
document.getElementById('comu').value=nuevoLi.textContent;
console.log(nuevoLi.textContent);
})

ul.appendChild(nuevoLi);

}
}
function LI2(data){

for(let i=0;i<data.length;i++){
    const ul = document.querySelector('#conti > form > div:nth-child(2) > div:nth-child(2) > div > ul');
    const nuevoLi = document.createElement('li');

nuevoLi.textContent = data[i].ciudad;

nuevoLi.classList.add('list-group-item');
nuevoLi.classList.add('list-group-item-action');
nuevoLi.classList.add('filtro');

nuevoLi.addEventListener('click',function(){
document.getElementById('loca').value=nuevoLi.textContent;
console.log(nuevoLi.textContent);
})

ul.appendChild(nuevoLi);

}
}

     document.getElementById('comu').addEventListener('keyup', e => {


         document.querySelectorAll('#conti > form > div:nth-child(2) > div:nth-child(1) > div > ul > .list-group-item').forEach(element => {
             element.textContent.toLowerCase().includes(e.target.value.toLowerCase())
                 ? element.classList.remove('filtro')
                 : element.classList.add("filtro")

         })


     })

     document.getElementById('comu').addEventListener('keypress', e => {
         if (e.key === 'Enter') {

             document.querySelectorAll('#conti > form > div:nth-child(2) > div:nth-child(1) > div > ul > .list-group-item').forEach(element => {
                 element.classList.add('filtro')
             })
             document.querySelector('#conti > form > div:nth-child(2) > div:nth-child(1) > div').classList.add('filtro');
         }
     }
     )

     document.getElementById('comu').addEventListener('click', e => {

         document.querySelectorAll('#conti > form > div:nth-child(2) > div:nth-child(1) > div > ul > .list-group-item').forEach(element => {

              element.textContent.toLowerCase().includes(e.target.value.toLowerCase())
                                          ? element.classList.remove('filtro')
                                          : element.classList.add("filtro")


         })
           document.querySelector('#conti > form > div:nth-child(2) > div:nth-child(1) > div').classList.remove('filtro');


     })
     document.getElementById('loca').addEventListener('keyup', e => {


         document.querySelectorAll('#conti > form > div:nth-child(2) > div:nth-child(2) > div > ul > .list-group-item').forEach(element => {
             element.textContent.toLowerCase().includes(e.target.value.toLowerCase())
                 ? element.classList.remove('filtro')
                 : element.classList.add("filtro")

         })


     })

     document.getElementById('loca').addEventListener('keypress', e => {
         if (e.key === 'Enter') {

             document.querySelectorAll('#conti > form > div:nth-child(2) > div:nth-child(2) > div > ul > .list-group-item').forEach(element => {
                 element.classList.add('filtro')
             })
             document.querySelector('#conti > form > div:nth-child(2) > div:nth-child(2) > div').classList.add('filtro');
         }
     }
     )

     document.getElementById('loca').addEventListener('click', e => {

         document.querySelectorAll('#conti > form > div:nth-child(2) > div:nth-child(2) > div > ul > .list-group-item').forEach(element => {

            element.textContent.toLowerCase().includes(e.target.value.toLowerCase())
                             ? element.classList.remove('filtro')
                             : element.classList.add("filtro")


         })
           document.querySelector('#conti > form > div:nth-child(2) > div:nth-child(2) > div').classList.remove('filtro');


     })

   const formu = document.querySelector('form');
   formu.addEventListener('submit', e => {
       e.preventDefault();
       let no = document.getElementById('no');
       let em = document.getElementById('em');
       let ape = document.getElementById('ape');
       let pass = document.getElementById('pass');
       let comu = document.getElementById('comu');
       let loca = document.getElementById('loca');
       let url3 = "https://solvenow.onrender.com/api/cambio";

       let url = 'https://solvenow.onrender.com/api/auto'
       let url2 = 'https://solvenow.onrender.com/api/loca'

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

                   if (comu.value == data3[i].c_autonoma) {
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

                           if (loca.value == data2[i].ciudad) {
                               local = data2[i].id;


                           }

                       }
                       const data1 = { "id": valorAlmacenado.id, "nombre": no.value, "email": em.value, "password": pass.value, "descripcion": ape.value,"id_Autonoma":comuna ,"id_Localidad":local,"rol":valorAlmacenado.rol};


                       fetch(url3, {
                           method: "POST",
                           headers: {
                               "Content-Type": "application/json"
                           },
                           body: JSON.stringify(data1)
                       })
                           .then(response => response.json())
                           .then(data => console.log(JSON.stringify(data)))

                   })
           })



   });





