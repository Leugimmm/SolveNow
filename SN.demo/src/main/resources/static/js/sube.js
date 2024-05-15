const sube2 = document.getElementById('index');

sube2.addEventListener('click', () => {
window.location.href = "http://localhost:8888";
});
window.addEventListener("load", function (event) {
    let url = 'http://localhost:8888/api/auto'
    let url2= 'http://localhost:8888/api/loca'
    let url3= 'http://localhost:8888/api/calle'
    let url4= 'http://localhost:8888/api/problema'
    fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
        .then(data => { LI(data) 
        })

    fetch(url2, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
        .then(data => { LI2(data)
        })
        fetch(url3, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then(response => response.json())
                .then(data => { LI3(data)
                })
                fetch(url4, {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json"
                        }
                    })
                        .then(response => response.json())
                        .then(data => { LI4(data)
                        })
})

function LI(data){

for(let i=0;i<data.length;i++){
    const ul = document.querySelector('body > main > div > form > div:nth-child(1) > div:nth-child(1) .list-group');
    const nuevoLi = document.createElement('li');

nuevoLi.textContent = data[i].c_autonoma;

nuevoLi.classList.add('list-group-item');
nuevoLi.classList.add('list-group-item-action');
nuevoLi.classList.add('filtro');

nuevoLi.addEventListener('click',function(){
document.getElementById('validationServer01').value=nuevoLi.textContent;
console.log(nuevoLi.textContent);
})

ul.appendChild(nuevoLi);

}
}
function LI2(data){

for(let i=0;i<data.length;i++){
    const ul = document.querySelector('body > main > div > form > div:nth-child(1) > div:nth-child(2) .list-group');
    const nuevoLi = document.createElement('li');

nuevoLi.textContent = data[i].ciudad;

nuevoLi.classList.add('list-group-item');
nuevoLi.classList.add('list-group-item-action');
nuevoLi.classList.add('filtro');

nuevoLi.addEventListener('click',function(){
document.getElementById('validationServer02').value=nuevoLi.textContent;
console.log(nuevoLi.textContent);
})

ul.appendChild(nuevoLi);

}
}
function LI3(data){

for(let i=0;i<data.length;i++){
    const ul = document.querySelector('body > main > div > form > div:nth-child(1) > div:nth-child(3) .list-group');
    const nuevoLi = document.createElement('li');

nuevoLi.textContent = data[i].calle;

nuevoLi.classList.add('list-group-item');
nuevoLi.classList.add('list-group-item-action');
nuevoLi.classList.add('filtro');

nuevoLi.addEventListener('click',function(){
document.getElementById('validationServerUsername').value=nuevoLi.textContent;
console.log(nuevoLi.textContent);
})

ul.appendChild(nuevoLi);

}
}
function LI4(data){

for(let i=0;i<data.length;i++){
    const ul = document.querySelector('body > main > div > form > div:nth-child(2) > div.col-md-3.mb-3 .list-group');
    const nuevoLi = document.createElement('li');

nuevoLi.textContent = data[i].problema;

nuevoLi.classList.add('list-group-item');
nuevoLi.classList.add('list-group-item-action');
nuevoLi.classList.add('filtro');

nuevoLi.addEventListener('click',function(){
document.getElementById('validationServer05').value=nuevoLi.textContent;
console.log(nuevoLi.textContent);
})

ul.appendChild(nuevoLi);

}
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

document.getElementById('validationServer01').addEventListener('keyup', e => {
    console.log(e.target.value);

    document.querySelectorAll('body > main > div > form > div:nth-child(1) > div:nth-child(1) .list-group-item').forEach(element => {
        element.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            ? element.classList.remove('filtro')
            : element.classList.add("filtro")

    })


})

document.getElementById('validationServer01').addEventListener('keypress', e => {
    if (e.key === 'Enter') {

        document.querySelectorAll('body > main > div > form > div:nth-child(1) > div:nth-child(1) .list-group-item').forEach(element => {
            element.classList.add('filtro')
        })
        document.querySelector('body > main > div > form > div:nth-child(1) > div:nth-child(1) .conte').classList.add('filtro');
    }
}
)

document.getElementById('validationServer01').addEventListener('click', e => {

    document.querySelectorAll('body > main > div > form > div:nth-child(1) > div:nth-child(1) .list-group-item').forEach(element => {

        element.classList.remove('filtro')


    })
      document.querySelector('body > main > div > form > div:nth-child(1) > div:nth-child(1) .conte').classList.remove('filtro');


})

document.getElementById('validationServer02').addEventListener('keyup', e => {
    console.log(e.target.value);

    document.querySelectorAll('body > main > div > form > div:nth-child(1) > div:nth-child(2) .list-group-item').forEach(element => {
        element.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            ? element.classList.remove('filtro')
            : element.classList.add("filtro")

    })


})

document.getElementById('validationServer02').addEventListener('keypress', e => {
    if (e.key === 'Enter') {

        document.querySelectorAll('body > main > div > form > div:nth-child(1) > div:nth-child(2) .list-group-item').forEach(element => {
            element.classList.add('filtro')
        })
        document.querySelector('body > main > div > form > div:nth-child(1) > div:nth-child(2) .conte').classList.add('filtro');
    }
}
)

document.getElementById('validationServer02').addEventListener('click', e => {

    document.querySelectorAll('body > main > div > form > div:nth-child(1) > div:nth-child(2) .list-group-item').forEach(element => {

        element.classList.remove('filtro')


    })
      document.querySelector('body > main > div > form > div:nth-child(1) > div:nth-child(2) .conte').classList.remove('filtro');




})
document.getElementById('validationServerUsername').addEventListener('keyup', e => {
    console.log(e.target.value);

    document.querySelectorAll('body > main > div > form > div:nth-child(1) > div:nth-child(3) .list-group-item').forEach(element => {
        element.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            ? element.classList.remove('filtro')
            : element.classList.add("filtro")

    })


})

document.getElementById('validationServerUsername').addEventListener('keypress', e => {
    if (e.key === 'Enter') {

        document.querySelectorAll('body > main > div > form > div:nth-child(1) > div:nth-child(3) .list-group-item').forEach(element => {
            element.classList.add('filtro')
        })
        document.querySelector('body > main > div > form > div:nth-child(1) > div:nth-child(3) .conte').classList.add('filtro');
    }
}
)

document.getElementById('validationServerUsername').addEventListener('click', e => {

    document.querySelectorAll('body > main > div > form > div:nth-child(1) > div:nth-child(3) .list-group-item').forEach(element => {

        element.classList.remove('filtro')


    })
    document.querySelector('body > main > div > form >  div:nth-child(1) > div:nth-child(3) .conte').classList.remove('filtro');
})



document.getElementById('validationServer05').addEventListener('keyup', e => {
    console.log(e.target.value);

    document.querySelectorAll('body > main > div > form > div:nth-child(2) > div.col-md-3.mb-3 .list-group-item').forEach(element => {
        element.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            ? element.classList.remove('filtro')
            : element.classList.add("filtro")

    })


})

document.getElementById('validationServer05').addEventListener('keypress', e => {
    if (e.key === 'Enter') {

        document.querySelectorAll('body > main > div > form > div:nth-child(2) > div.col-md-3.mb-3 .list-group-item').forEach(element => {
            element.classList.add('filtro')
        })
        document.querySelector('body > main > div > form > div:nth-child(2) > div.col-md-3.mb-3 .conte').classList.add('filtro');
    }
}
)

document.getElementById('validationServer05').addEventListener('click', e => {

    document.querySelectorAll('body > main > div > form > div:nth-child(2) > div.col-md-3.mb-3 .list-group-item').forEach(element => {

        element.classList.remove('filtro')


    })
      document.querySelector('body > main > div > form > div:nth-child(2) > div.col-md-3.mb-3 .conte').classList.remove('filtro');




})

const formu = document.querySelector('form');
formu.addEventListener('submit', e => {
    e.preventDefault();

    let comun = document.getElementById('validationServer01');

    let loca = document.getElementById('validationServer02');

    let calle = document.getElementById('validationServerUsername');

    let descripcion = document.getElementById('exampleFormControlTextarea1');

    let problema = document.getElementById('validationServer05');

    console.log(descripcion.value);
    let url = 'http://localhost:8888/api/auto'
    let url2 = 'http://localhost:8888/api/loca'
    let url3 = 'http://localhost:8888/api/calle'
    let url4 = 'http://localhost:8888/api/problema'
    let url5 = 'http://localhost:8888/api/sube'
    let url6= 'http://localhost:8888/upload';

    fetch(url, {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(response => response.json())
        .then(data => {
            let comuna;

            for (let i = 0; i < data.length; i++) {

                if (comun.value == data[i].c_autonoma) {
                     comuna = data[i].id;

                }
            }
            fetch(url2, {
                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                }
            })
                .then(response => response.json())
                .then(data => {
                    let local;
                    for (let i = 0; i < data.length; i++) {

                        if (loca.value == data[i].ciudad) {
                            local = data[i].id;

                        }
                    }


                    fetch(url3, {
                        method: "GET",
                        headers: {
                            "Content-Type": "application/json"
                        }
                    })
                        .then(response => response.json())
                        .then(data => {
                            let cal;
                            for (let i = 0; i < data.length; i++) {

                                if (calle.value == data[i].calle) {
                                    cal = data[i].id;

                                }
                            }


                            fetch(url4, {
                                method: "GET",
                                headers: {
                                    "Content-Type": "application/json"
                                }
                            })
                                .then(response => response.json())
                                .then(data => {
                                    let pro;

                                    for (let i = 0; i < data.length; i++) {
                                        if (problema.value == data[i].problema) {
                                             pro = data[i].id;

                                        }
                                    }
                                    console.log(pro);
                                    console.log(cal);
                                    console.log(local);
                                    console.log(comuna);
                                      const fileInput = document.getElementById('foto');
                                     const file = fileInput.files[0];
                                     console.log(file.name);

                                    let  data2 = { "id_Calle": cal, "id_problema": pro,"descripcion":descripcion.value,"foto":file.name};
                                     fetch(url5, {
                                            method: "POST",
                                            headers: {
                                                "Content-Type": "application/json"
                                            },
                                            body:  JSON.stringify(data2)
                                        })
                                            .then(response => response.json() )
                                            .then(data =>{

                                            console.log(data);



                                            // Crear un objeto FormData y agregar el archivo
                                            const formData = new FormData();
                                            formData.append('file', file);

                                            fetch(url6, {
                                                method: 'POST',
                                                body: formData, // Usar el objeto FormData para enviar el archivo
                                            })
                                            .then(response => response.text())
                                            .then(data => {
                                                console.log(data);


                                                Swal.fire({
                                                  title: 'Post enviado',
                                                  icon: 'success',
                                                  showConfirmButton: false,
                                                  timer: 2000 // Muestra el mensaje durante 2 segundos
                                                }).then(() => {
                                                  // Redirige a la URL después de que termine el tiempo
                                                  window.location.href = 'http://localhost:8888'; // Reemplaza 'URL_DEL_SITIO' con la URL a la que deseas redirigir
                                                });
                                            })

                                            }
                                             )

                                })
                        })
                })
        })




})

