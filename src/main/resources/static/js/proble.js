const sube2 = document.getElementById('index');

sube2.addEventListener('click', () => {
window.location.href = "https://solvenow.onrender.com/";
});

window.addEventListener("load", function (event)  {
 let url = window.location.toString();
  url = url.replace("?", "/");
    let url4 = 'https://solvenow.onrender.com/api/loca';
      let url3 = 'https://solvenow.onrender.com/api/calle';
      let url2 = 'https://solvenow.onrender.com/problema';
      let url5 = 'https://solvenow.onrender.com/api/auto';
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
                      console.log(conte);

                          fetch(url2, {
                              method: "GET",
                              headers: {
                                  "Content-Type": "application/json"
                              },
                          })
                              .then(response => response.json())
                              .then(data2 => {
                                  let pro;
                                    console.log('2');
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
console.log('3');
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

console.log(local);
prob.textContent=pro;
desc.textContent=conte.descripcion;
img.src="./imagenes/"+conte.foto;
lu.value=au+', '+local+', '+ca;

niv.value=conte.nivel;

}