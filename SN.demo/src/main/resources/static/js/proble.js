const sube2 = document.getElementById('index');

sube2.addEventListener('click', () => {
window.location.href = "http://localhost:8888";
});

window.addEventListener("load", function (event)  {
 let url = window.location.toString();
  url = url.replace("?", "/");
    let url4 = 'http://localhost:8888/api/loca';
      let url3 = 'http://localhost:8888/api/calle';
      let url2 = 'http://localhost:8888/api/problema';
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
                                                      if (data4[x].id == loca) {
                                                          local = data4[x].ciudad;

                                                      }

                                                  }

                                                  Ver(conte, pro, ca, local);

                                              }
                                              )
                                      }
                                      )
                              }
                              )

                      })

});

function Ver(conte, pro, ca, local){
let prob=document.getElementById('proble');
let desc=document.getElementById('exampleFormControlTextarea1');
let lu=document.getElementById('validationServer01');
let img=document.getElementById('fotomostrar');
let niv=document.getElementById('validationServer05');

console.log(local);
prob.textContent=pro;
desc.textContent=conte.descripcion;
img.src="./imagenes/"+conte.foto;
lu.value=local+', '+ca;

niv.value=conte.nivel;

}