if (JSON.parse(localStorage.getItem('usuario1')) !== null) {

    // El localStorage existe, puedes realizar acciones adicionales aquí
    valorAlmacenado = JSON.parse(localStorage.getItem('usuario1'));
    console.log('El valor almacenado es: ', valorAlmacenado);
const sube = document.getElementById('per');

sube.addEventListener('click', function () {
window.location.href = "http://localhost:8888/perfil?"+valorAlmacenado.id;
});

} else {
             window.location.href = 'http://localhost:8888';
    // El localStorage no existe o no tiene un valor para la clave 'miClave'
    console.log('El localStorage no tiene un valor para la clave "miClave".');
}

const sube2 = document.getElementById('inicio');

sube2.addEventListener('click', function() {
window.location.href = "http://localhost:8888";
});

const sube3 = document.getElementById('us');

sube3.addEventListener('click', function() {
datos();

});

const sube4 = document.getElementById('pos');

sube4.addEventListener('click', function() {

datos2();

});

function crearElementoBotton(texto = "Ejemplo", tipo = "div", padre = contenido) {
    let elemento = document.createElement(tipo);
    elemento.textContent = texto;
    elemento.className='btn btn-primary';
    padre.appendChild(elemento);
    return elemento;
}
function crearElementoTexto2(texto = "Ejemplo", tipo = "div", padre = contenido) {
    let elemento = document.createElement(tipo);
    elemento.textContent = texto;

    padre.appendChild(elemento);
    return elemento;
}
function crearElementoTexto3(ca, local,au, tipo = "div", padre = contenido) {
    let elemento = document.createElement(tipo);
    elemento.textContent = au+', '+local+', '+ca;
    padre.appendChild(elemento);
    return elemento;
}
function crearElemento(tipo = 'br', padre = contenido) {
    let elemento = document.createElement(tipo);
    padre.appendChild(elemento);
    return elemento;
}
function crearElemento2(tipo = 'br', padre = contenido) {
    let elemento = document.createElement(tipo);
    elemento.id="sep";
    padre.appendChild(elemento);
    return elemento;
}

function crearTabla1(datosTabla){
let tabla=document.getElementById('ta')
    tabla.innerHTML='';
    let fila3 = crearElemento('tr', tabla);
    crearElementoTexto2('id', 'td', fila3);
    crearElementoTexto2('usuario', 'td', fila3);
    crearElementoTexto2('', 'td', fila3);

    for (let i = 0; i < datosTabla.length; i++) {

            let fila = crearElemento('tr', tabla);
            crearElementoTexto2(datosTabla[i].id, 'td', fila);
        crearElementoTexto2(datosTabla[i].email, 'td', fila);
              let td = crearElemento('td', fila);
              let di = crearElemento2('div', td);


                          let eli= crearElementoBotton('Eliminar', 'button', di);

                          eli.addEventListener('click', function() {
                          let data={"id":datosTabla[i].id};
                          fetch("http://localhost:8888/api/deleteUsu", {
                                  method: "POST",
                                  headers: {
                                      "Content-Type": "application/json"
                                  },
                                   body: JSON.stringify(data)
                              })
                                  .then(response => response.json())
                                  .then(data =>{datos();})

                          })


    }
}
function crearTabla2(datosTabla, pro, ca, local,au){
let tabla=document.getElementById('ta')




            let fila = crearElemento('tr', tabla);
            crearElementoTexto2(datosTabla.id, 'td', fila);
        crearElementoTexto3(ca, local,au, 'td', fila);
        crearElementoTexto2(pro, 'td', fila);
        crearElementoTexto2(datosTabla.nivel, 'td', fila);
              let td = crearElemento('td', fila);
              let di = crearElemento2('div', td);


                          let eli= crearElementoBotton('Eliminar', 'button', di);
                          eli.addEventListener('click', function() {
                                                    let data={"id":datosTabla.id};
                                                    fetch("http://localhost:8888/api/deletePo", {
                                                            method: "POST",
                                                            headers: {
                                                                "Content-Type": "application/json"
                                                            },
                                                             body: JSON.stringify(data)
                                                        })
                                                            .then(response => response.json())
                                                            .then(data =>{datos2()})

                                                    })



}

function datos(){
let url = 'http://localhost:8888/api/users';
 fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        },
    })
        .then(response => response.json())
        .then(data => {
        crearTabla1(data);
        })
}

function datos2(){
let tabla=document.getElementById('ta')
    tabla.innerHTML='';
    let fila3 = crearElemento('tr', tabla);
        crearElementoTexto2('id', 'td', fila3);
        crearElementoTexto2('Lugar', 'td', fila3);
        crearElementoTexto2('Problema', 'td', fila3);
        crearElementoTexto2('Nivel', 'td', fila3);
        crearElementoTexto2('', 'td', fila3);
let url = 'http://localhost:8888/api/post';
let url4 = 'http://localhost:8888/api/loca';
      let url3 = 'http://localhost:8888/api/calle';
      let url2 = 'http://localhost:8888/api/problema';
      let url5 = 'http://localhost:8888/api/auto';
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


                                        for (let x = 0; x < data3.length; x++) {
                                            if (data3[x].id == conte[i].id_Calle) {
                                                ca = data3[x].calle;


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

                                                             crearTabla2(conte[i], pro, ca, local,au);

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
}