const sube2 = document.getElementById('index');

sube2.addEventListener('click', () => {
window.location.href = "http://solucionaya.es/";
});
if (JSON.parse(localStorage.getItem('usuario1')) !== null) {

    // El localStorage existe, puedes realizar acciones adicionales aquí
    var valorAlmacenado = JSON.parse(localStorage.getItem('usuario1'));
    console.log('El valor almacenado es: ', valorAlmacenado);
    let pa=document.getElementById('conte');

    if(valorAlmacenado.rol=='AJ'){
    let bu=document.createElement('button');
    bu.id='bot';
    bu.className='btn btn-primary';
    bu.textContent='Solucionar';
    pa.appendChild(bu)
    let url = window.location.toString();
      url = url.replace("?", "/");
      fetch(url, {
           method: "GET",
           headers: {
               "Content-Type": "application/json"
           }
       })
           .then(response => response.json())
           .then(data => {
                            let conte = data;
                            console.log(conte);
                            if(conte.solucionado=="1"){


                            bu.remove();

                            let p=document.createElement('p');
                            p.textContent='Problema Solucionado';
                                    pa.appendChild(p)


                            }else{
                             bu.addEventListener('click',function(){
                                let  data2 = { "id": conte.id, "solucionado": '1' };
                                fetch("http://solucionaya.es/api/update",
                                        {
                                            method: "POST",
                                            headers: {
                                                "Content-Type": "application/json"
                                            },
                                            body: JSON.stringify(data2)
                                        }).then(response => response.json())
                                        .then(data => {
                                       Swal.fire({
                                                                                         title: 'Post solucionado',
                                                                                         icon: 'success',
                                                                                         showConfirmButton: false,
                                                                                         timer: 2000 // Muestra el mensaje durante 2 segundos
                                                                                       }).then(() => {
                                                                                         // Redirige a la URL después de que termine el tiempo
                                                                                         window.location.href = 'http://solucionaya.es/'; // Reemplaza 'URL_DEL_SITIO' con la URL a la que deseas redirigir
                                                                                       });
                                        })

                                })
                            }
                            })

    //addEVent de bu
    }
    if(valorAlmacenado.rol=='A'){
    let bu=document.createElement('button');
    bu.id='bot';
    bu.className='btn btn-primary';
        bu.textContent='Solucionar';
        pa.appendChild(bu)
        let url = window.location.toString();
              url = url.replace("?", "/");
              fetch(url, {
                   method: "GET",
                   headers: {
                       "Content-Type": "application/json"
                   }
               })
                   .then(response => response.json())
                   .then(data => {
                                    let conte = data;

                                    if(conte.solucionado=="1"){


                                    bu.remove();

                                    let p=document.createElement('p');
                                    p.textContent='Problema Solucionado';
                                            pa.appendChild(p)


                                    }else{
                                     bu.addEventListener('click',function(){
                                        let  data2 = { "id": conte.id, "solucionado": '1' };
                                        fetch("http://solucionaya.es/api/update",
                                                {
                                                    method: "POST",
                                                    headers: {
                                                        "Content-Type": "application/json"
                                                    },
                                                    body: JSON.stringify(data2)
                                                }).then(response => response.json())
                                                .then(data => {
                                               Swal.fire({
                                                                                                 title: 'Post solucionado',
                                                                                                 icon: 'success',
                                                                                                 showConfirmButton: false,
                                                                                                 timer: 2000 // Muestra el mensaje durante 2 segundos
                                                                                               }).then(() => {
                                                                                                 // Redirige a la URL después de que termine el tiempo
                                                                                                 window.location.href = 'http://solucionaya.es/'; // Reemplaza 'URL_DEL_SITIO' con la URL a la que deseas redirigir
                                                                                               });
                                                })

                                        })
                                    }
                                    })
    }


} else {

    // El localStorage no existe o no tiene un valor para la clave 'miClave'
    console.log('El localStorage no tiene un valor para la clave "miClave".');
}


window.addEventListener("load", function (event)  {
 let url = window.location.toString();
  url = url.replace("?", "/");

    let url4 = 'http://solucionaya.es/api/loca';
      let url3 = 'http://solucionaya.es/api/calle';
      let url2 = 'http://solucionaya.es/api/problema';
      let url5 = 'http://solucionaya.es/api/auto';
 // Concatena el dato como parámetro en la URL
 fetch(url, {
     method: "GET",
     headers: {
         "Content-Type": "application/json"
     }
 })
     .then(response => response.json())
     .then(data => {
                      let conte = data;



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
                                      if (data2[x].id == conte.id_problema) {
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
                                              if (data3[x].id == conte.id_Calle) {
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
                                                      if (conte.id_localidad == data4[x].id) {
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
                                                                            if (conte.id_Autonoma == data5[x].id) {
                                                                          au = data5[x].c_autonoma;
                                                                                       }

                                                                              }

                                                          Ver(conte, pro, ca, local,au);

                                                                   }
                                                                     )

                                              }
                                              )
                                      }
                                      )
                              }
                              )

                      })

});

function Ver(conte, pro, ca, local,au){
let prob=document.getElementById('proble');
let desc=document.getElementById('exampleFormControlTextarea1');
let lu=document.getElementById('validationServer01');
let img=document.getElementById('fotomostrar');
let niv=document.getElementById('validationServer05');


prob.textContent=pro;
desc.textContent=conte.descripcion;
img.src="./imagenes/"+conte.foto;
lu.value=au+', '+local+', '+capitalizarCadaPalabra(ca);

niv.value=conte.nivel;


}
function capitalizarCadaPalabra(str) {
    // Convertir la cadena a minúsculas y dividirla en palabras
    let palabras = str.toLowerCase().split(' ');
    // Recorrer cada palabra y capitalizar la primera letra
    for (let i = 0; i < palabras.length; i++) {
        palabras[i] = palabras[i].charAt(0).toUpperCase() + palabras[i].slice(1);
    }
    // Unir las palabras nuevamente en una sola cadena
    return palabras.join(' ');
}