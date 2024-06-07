
let ini = document.getElementById('ini');
let regi = document.getElementById('regi');
if (JSON.parse(localStorage.getItem('usuario1')) !== null) {

    // El localStorage existe, puedes realizar acciones adicionales aquí
    var valorAlmacenado = JSON.parse(localStorage.getItem('usuario1'));
    console.log('El valor almacenado es: ', valorAlmacenado);
  const sube = document.getElementById('sube');
  sube.addEventListener('click', () => {
  window.location.href = "http://solucionaya.es/sube";
  });
let ini = document.getElementById('ini');
let regi = document.getElementById('regi');
let pa = document.getElementById('profileDropdown');



  ini.textContent='Perfil';
  regi.textContent='Cerrar sesion';
  if(valorAlmacenado.rol=='A'){
  let admin = document.createElement('a');
    admin.textContent='Panel Admin';
    admin.href="http://solucionaya.es/admin";
    pa.appendChild(admin);

  }

changeStrokeColor();

ini.href="http://solucionaya.es/perfil?"+valorAlmacenado.id;
regi.href="http://solucionaya.es/";

 regi.addEventListener('click',function(){
     localStorage.setItem("usuario1", null);
    window.location.href="http://solucionaya.es/";
    });





} else {
const sube = document.getElementById('sube');
sube.addEventListener('click', () => {
  Swal.fire({
                                                    title: 'Necessita estar logeado',
                                                    icon: 'success',
                                                    showConfirmButton: false,
                                                    timer: 2000 // Muestra el mensaje durante 2 segundos
                                                  })
  });

    // El localStorage no existe o no tiene un valor para la clave 'miClave'
    console.log('El localStorage no tiene un valor para la clave "miClave".');
}


function changeStrokeColor() {
            document.getElementById("Vector").setAttribute("stroke", "#4CAF50");
            document.getElementById("Vector_2").setAttribute("stroke", "#4CAF50");
            document.getElementById("Vector_3").setAttribute("stroke", "#4CAF50");
        }


const sube2 = document.getElementById('index');

sube2.addEventListener('click', () => {
window.location.href = "http://solucionaya.es/";
});







window.addEventListener("load", function (event) {

    let url = 'http://solucionaya.es/api/post';
    let url4 = 'http://solucionaya.es/api/loca';
    let url5 = 'http://solucionaya.es/api/auto';
    let url3 = 'http://solucionaya.es/api/calle';
    let url2 = 'http://solucionaya.es/api/problema';
    fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    })
        .then(response => response.json())
        .then(data => {
            let conte = data;
            for (let i = 0; i < conte.length; i++) {
                fetch(url2, {
                    method: "GET",
                    headers: {
                        "Content-Type": "application/json"
                    },
                })
                    .then(response => response.json())
                    .then(data2 => {
                        let pro;

                        for (let x = 0; x < data2.length; x++) {
                            if (data2[x].id == conte[i].id_problema) {
                                pro = data2[x].problema;

                            }
                        }

                        fetch(url3, {
                            method: "GET",
                            headers: {
                                "Content-Type": "application/json"
                            },
                        })
                            .then(response => response.json())
                            .then(data3 => {

                                let ca;
                                let loca;

                                for (let x = 0; x < data3.length; x++) {
                                    if (data3[x].id == conte[i].id_Calle) {
                                        ca = data3[x].calle;
                                        loca = data3[x].id_localidad;

                                    }
                                }
                                fetch(url4, {
                                    method: "GET",
                                    headers: {
                                        "Content-Type": "application/json"
                                    },
                                })
                                    .then(response => response.json())
                                    .then(data4 => {
                                        let local;

                                        for (let x = 0; x < data4.length; x++) {
                                            if (data4[x].id == conte[i].id_localidad) {
                                                local = data4[x].ciudad;

                                            }

                                        }
                                         fetch(url5, {
                                               method: "GET",
                                                    headers: {
                                                 "Content-Type": "application/json"
                                             },
                                               })
                                               .then(response => response.json())
                                                     .then(data5 => {
                                                     let au;

                                               for (let x = 0; x < data5.length; x++) {
                                                       if (conte[i].id_Autonoma == data5[x].id) {
                                                         au = data5[x].c_autonoma;
                                                              }

                                                                 }

                                                     index(conte[i], pro, ca, local,au);

                                              }
                                             )



                                    }
                                    )
                            }
                            )
                    }
                    )
                }
            })
})



function index(conte,pro,ca,loca,au){


let padre = document.getElementById('contenedor');


let div1 = document.createElement('div');
let div2 = document.createElement('div');

let img = document.createElement('img');
let p = document.createElement('p');
let p2 = document.createElement('p');

let imgdata="./imagenes/"+conte.foto;
img.setAttribute('src',imgdata);

p.textContent=pro;

p2.textContent=au+', '+loca+', '+ca;

padre.appendChild(div1);
if(conte.nivel==1){
div1.style.backgroundColor = 'green';
}else if(conte.nivel==2){
div1.style.backgroundColor = 'yellow';
}else if(conte.nivel==3){
div1.style.backgroundColor = 'red';
}

div1.appendChild(div2);
div2.appendChild(img);
div2.appendChild(p);
div2.appendChild(p2);
 div1.addEventListener('click', function (e) {
            window.location = "http://solucionaya.es/problema?"+conte.id;
        });


}


