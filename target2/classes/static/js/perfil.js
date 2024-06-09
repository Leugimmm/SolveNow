const sube2 = document.getElementById('index');

sube2.addEventListener('click', () => {
window.location.href = "http://solucionaya.es/";
});

if (JSON.parse(localStorage.getItem('usuario1')) !== null) {

    // El localStorage existe, puedes realizar acciones adicionales aquí
    var valorAlmacenado = JSON.parse(localStorage.getItem('usuario1'));
    console.log('El valor almacenado es: ', valorAlmacenado);
    let url = window.location.toString();
    let paramValue = url.split('?').pop();
    let numero = parseInt(paramValue, 10);

if( !(valorAlmacenado.id==numero) ){
  window.location.href = 'http://solucionaya.es/';
  }

} else {
             window.location.href = 'http://solucionaya.es/';
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
let img = document.getElementById('fotomostrar');

let imgdata="./imagenes/"+data.foto;
img.setAttribute('src',imgdata);

no.value=data.nombre;
em.value=data.email;
pass.value=data.password;
let pa=document.querySelector('form');
if(data.rol=='A'){
let bu=document.createElement('button');
    bu.id='bot';
    bu.className='btn btn-primary';
        bu.textContent='Panel de Admin';
        pa.appendChild(bu)
        bu.addEventListener('click',function(){
                window.location.href="http://solucionaya.es/admin";
                });
}


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
document.querySelector('#conti > form > div:nth-child(2) > div:nth-child(1) > div').classList.add('filtro');
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
document.querySelector('#conti > form > div:nth-child(2) > div:nth-child(2) > div').classList.add('filtro');
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
     document.addEventListener('click', e => {
         const input = document.getElementById('comu');
          const input2 = document.getElementById('loca');

         const conte = document.querySelector('#conti > form > div:nth-child(2) > div:nth-child(1) > div');
         const conte2 =document.querySelector('#conti > form > div:nth-child(2) > div:nth-child(2) > div');

         // Verificar si el clic se ha realizado fuera del input y de los elementos asociados
         if (!input.contains(e.target) && !conte.contains(e.target)) {
             conte.classList.add('filtro');
         }
         if (!input2.contains(e.target) && !conte2.contains(e.target)) {
                 conte2.classList.add('filtro');
             }

     });


   const formu = document.querySelector('form');
   formu.addEventListener('submit', e => {
       e.preventDefault();
       let no = document.getElementById('no');
       let em = document.getElementById('em');
       let ape = document.getElementById('ape');
       let pass = document.getElementById('pass');
       let comu = document.getElementById('comu');
       let loca = document.getElementById('loca');
       let url3 = "http://solucionaya.es/update/usu";

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
                        let fileInput = document.getElementById('foto');
                            let file = fileInput.files[0];
                            let data1=0;
                            let renamedFile;
                            if (!fileInput.files || fileInput.files.length === 0) {
                                    data1 = { "id": valorAlmacenado.id, "nombre": no.value,"email": em.value, "password": pass.value, "descripcion": ape.value,"id_Autonoma":comuna ,"id_Localidad":local,"rol":valorAlmacenado.rol};
                                }else{
                                const file = fileInput.files[0];
                                let newFileName = generarNumeroAleatorioDe10Digitos() + file.name;
                                renamedFile = new File([file], newFileName, { type: file.type });
                                 data1 = { "id": valorAlmacenado.id, "nombre": no.value,"foto":newFileName ,"email": em.value, "password": pass.value, "descripcion": ape.value,"id_Autonoma":comuna ,"id_Localidad":local,"rol":valorAlmacenado.rol};
                                }








                        if(comproba(comuna,local,file)){
                        }else{
                       fetch(url3, {
                           method: "PUT",
                           headers: {
                               "Content-Type": "application/json"
                           },
                           body: JSON.stringify(data1)
                       })
                           .then(response => response.json())
                           .then(data => {
                           if (!fileInput.files || fileInput.files.length === 0) {
 Swal.fire({
                                  title: 'Perfil Actualizado',
                                  icon: 'success',
                                  showConfirmButton: false,
                                       timer: 2000 // Muestra el mensaje durante 2 segundos
                                           }).then(() => {
                                                 // Redirige a la URL después de que termine el tiempo
                                                        window.location.href = 'http://solucionaya.es/'; // Reemplaza 'URL_DEL_SITIO' con la URL a la que deseas redirigir
                                   });
                               }else{
                               let url6= 'http://solucionaya.es/upload';
                               const formData = new FormData();
                                                                                                      formData.append('file', renamedFile);

                                                                                                      fetch(url6, {
                                                                                                          method: 'POST',
                                                                                                          body: formData, // Usar el objeto FormData para enviar el archivo
                                                                                                      })
                                                                                                      .then(response => response.text())
                                                                                                      .then(data => {
                                                                                                          console.log(data);


                                                                                                          Swal.fire({
                                                                                                            title: 'Perfil Actualizado',
                                                                                                            icon: 'success',
                                                                                                            showConfirmButton: false,
                                                                                                            timer: 2000 // Muestra el mensaje durante 2 segundos
                                                                                                          }).then(() => {
                                                                                                            // Redirige a la URL después de que termine el tiempo
                                                                                                            window.location.href = 'http://solucionaya.es/'; // Reemplaza 'URL_DEL_SITIO' con la URL a la que deseas redirigir
                                                                                                          });
                                                                                                      })
                               }



                           })
                        }
                   })
           })



   });

   function generarNumeroAleatorioDe10Digitos() {
       const min = 1000000000; // 10^9
       const max = 9999999999; // 10^10 - 1
       const numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
       return numeroAleatorio;
   }
   const foto = document.getElementById('foto');
   const fotover = document.getElementById('fotomostrar')

   foto.addEventListener('change', function () {
       let archivo = this.files[0];
       if (archivo.type.match('image.*')) {
           let tmp = URL.createObjectURL(archivo);
           fotover.setAttribute('src', tmp);
       } else {
           alert('No es un archivo')
       }
   })
   function comproba(comuna,local){
   let p1=document.querySelector('#a1');
   let p2=document.querySelector('#a2');

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





