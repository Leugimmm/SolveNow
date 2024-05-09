const sube = document.getElementById('sube');

sube.addEventListener('click', () => {
window.location.href = "http://localhost:8888/sube";
});


const sube2 = document.getElementById('index');

sube2.addEventListener('click', () => {
window.location.href = "http://localhost:8888";
});

window.addEventListener("load", function (event) {

    let url = 'http://localhost:8888/api/post';
    let url4 = 'http://localhost:8888/api/loca';
    let url3 = 'http://localhost:8888/api/calle';
    let url2 = 'http://localhost:8888/api/problema';
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
                                            if (data4[x].id == loca) {
                                                local = data4[x].ciudad;

                                            }

                                        }
                                        index(conte[i], pro, ca, local);

                                    }
                                    )
                            }
                            )
                    }
                    )
                }
            })
})

function index(conte,pro,ca,loca){

let padre = document.getElementById('contenedor');

let div1 = document.createElement('div');
let div2 = document.createElement('div');

let img = document.createElement('img');
let p = document.createElement('p');
let p2 = document.createElement('p');

let imgdata="./imagenes/"+conte.foto;
img.setAttribute('src',imgdata);

p.textContent=pro;

p2.textContent=loca+', '+ca;

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

}
