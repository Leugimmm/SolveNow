const filterButton = document.getElementById('filterButton');
const filterOverlay = document.getElementById('filterOverlay');
const conte = document.getElementById('contenedor');
const confirmButton = document.getElementById('confirmButton');
let Checked = null;
//The class name can vary
for (let CheckBox of document.getElementsByClassName('only-one')){
	CheckBox.onclick = function(){
  	if(Checked!=null){
      Checked.checked = false;
      Checked = CheckBox;
    }
    Checked = CheckBox;
  }
}

filterButton.addEventListener('click', () => {
  filterOverlay.style.display = 'block';
  conte.style.display = 'none';
});

confirmButton.addEventListener('click', () => {
  filterOverlay.style.display = 'none';
  conte.style.display = 'flex';
});

window.addEventListener("load", function (event) {
    let url = 'http://solucionaya.es/api/auto'
    let url2= 'http://solucionaya.es/api/loca'
    let url3= 'http://solucionaya.es/api/calle'
    let url4= 'http://solucionaya.es/api/problema'
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
    const ul = document.querySelector('#filterOptions > div:nth-child(3) >div > ul');
    const nuevoLi = document.createElement('li');

nuevoLi.textContent = data[i].c_autonoma;

nuevoLi.classList.add('list-group-item');
nuevoLi.classList.add('list-group-item-action');
nuevoLi.classList.add('filtro');

nuevoLi.addEventListener('click',function(){
document.getElementById('validationServer01').value=nuevoLi.textContent;
document.querySelector('#filterOptions > div:nth-child(3) > div').classList.add('filtro');

})

ul.appendChild(nuevoLi);

}
}
function LI2(data){

for(let i=0;i<data.length;i++){
    const ul = document.querySelector('#filterOptions > div:nth-child(4) > div > ul');
    const nuevoLi = document.createElement('li');

nuevoLi.textContent = data[i].ciudad;

nuevoLi.classList.add('list-group-item');
nuevoLi.classList.add('list-group-item-action');
nuevoLi.classList.add('filtro');

nuevoLi.addEventListener('click',function(){
document.getElementById('validationServer02').value=nuevoLi.textContent;
document.querySelector('#filterOptions > div:nth-child(4) > div').classList.add('filtro');

})

ul.appendChild(nuevoLi);

}
}
function LI3(data){

for(let i=0;i<data.length;i++){
    const ul = document.querySelector('#filterOptions > div:nth-child(5) >  div > ul');
    const nuevoLi = document.createElement('li');

nuevoLi.textContent = data[i].calle;

nuevoLi.classList.add('list-group-item');
nuevoLi.classList.add('list-group-item-action');
nuevoLi.classList.add('filtro');

nuevoLi.addEventListener('click',function(){
document.getElementById('validationServer03').value=nuevoLi.textContent;
document.querySelector('#filterOptions > div:nth-child(5) > div').classList.add('filtro');

})

ul.appendChild(nuevoLi);

}
}
function LI4(data){

for(let i=0;i<data.length;i++){
    const ul = document.querySelector('#filterOptions > div:nth-child(7)');
    const nuevoLi = document.createElement('label');
    const nuevoLi2 = document.createElement('input');
    const nuevoLi3 = document.createElement('br');

nuevoLi.textContent= " "+data[i].problema;
nuevoLi2.setAttribute('type','checkbox');
nuevoLi2.setAttribute('name',data[i].problema);
nuevoLi2.setAttribute('value',data[i].id);


ul.appendChild(nuevoLi);
nuevoLi.insertBefore(nuevoLi2,nuevoLi.firstChild);

ul.appendChild(nuevoLi3);

}
}

document.getElementById('validationServer01').addEventListener('keyup', e => {


    document.querySelectorAll('#filterOptions > div:nth-child(3) > div > ul > li').forEach(element => {
        element.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            ? element.classList.remove('filtro')
            : element.classList.add("filtro")

    })


})

document.getElementById('validationServer01').addEventListener('keypress', e => {
    if (e.key === 'Enter') {

        document.querySelectorAll('#filterOptions > div:nth-child(3) > div > ul > li').forEach(element => {
            element.classList.add('filtro')
        })
        document.querySelector('#filterOptions > div:nth-child(3) > div').classList.add('filtro');
    }
}
)

document.getElementById('validationServer01').addEventListener('click', e => {

    document.querySelectorAll('#filterOptions > div:nth-child(3) > div > ul > li').forEach(element => {

         element.textContent.toLowerCase().includes(e.target.value.toLowerCase())
                                     ? element.classList.remove('filtro')
                                     : element.classList.add("filtro")


    })
      document.querySelector('#filterOptions > div:nth-child(3) > div').classList.remove('filtro');


})

document.getElementById('validationServer02').addEventListener('keyup', e => {


    document.querySelectorAll('#filterOptions > div:nth-child(4) > div > ul > li').forEach(element => {
        element.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            ? element.classList.remove('filtro')
            : element.classList.add("filtro")

    })


})

document.getElementById('validationServer02').addEventListener('keypress', e => {
    if (e.key === 'Enter') {

        document.querySelectorAll('#filterOptions > div:nth-child(4) > div > ul > li').forEach(element => {
            element.classList.add('filtro')
        })
        document.querySelector('#filterOptions > div:nth-child(4) > div').classList.add('filtro');
    }
}
)

document.getElementById('validationServer02').addEventListener('click', e => {

    document.querySelectorAll('#filterOptions > div:nth-child(4) > div > ul > li').forEach(element => {

         element.textContent.toLowerCase().includes(e.target.value.toLowerCase())
                                     ? element.classList.remove('filtro')
                                     : element.classList.add("filtro")


    })
      document.querySelector('#filterOptions > div:nth-child(4) > div').classList.remove('filtro');




})
document.getElementById('validationServer03').addEventListener('keyup', e => {


    document.querySelectorAll('#filterOptions > div:nth-child(5) > div > ul > li').forEach(element => {
        element.textContent.toLowerCase().includes(e.target.value.toLowerCase())
            ? element.classList.remove('filtro')
            : element.classList.add("filtro")

    })


})

document.getElementById('validationServer03').addEventListener('keypress', e => {
    if (e.key === 'Enter') {

        document.querySelectorAll('#filterOptions > div:nth-child(5) > div > ul > li').forEach(element => {
            element.classList.add('filtro')
        })
        document.querySelector('#filterOptions > div:nth-child(5) > div').classList.add('filtro');
    }
}
)

document.getElementById('validationServer03').addEventListener('click', e => {

    document.querySelectorAll('#filterOptions > div:nth-child(5) > div > ul > li').forEach(element => {

         element.textContent.toLowerCase().includes(e.target.value.toLowerCase())
                                     ? element.classList.remove('filtro')
                                     : element.classList.add("filtro")


    })
    document.querySelector('#filterOptions > div:nth-child(5) > div').classList.remove('filtro');
})

document.addEventListener('click', e => {
         let input = document.getElementById('validationServer01');
             let input2 = document.getElementById('validationServer02');
             let input3 = document.getElementById('validationServer03');

         const conte = document.querySelector('#filterOptions > div:nth-child(3) > div');
         const conte2 =document.querySelector('#filterOptions > div:nth-child(4) > div');
         const conte3 =document.querySelector('#filterOptions > div:nth-child(5) > div');

         // Verificar si el clic se ha realizado fuera del input y de los elementos asociados
         if (!input.contains(e.target) && !conte.contains(e.target)) {
             conte.classList.add('filtro');
         }
         if (!input2.contains(e.target) && !conte2.contains(e.target)) {
                 conte2.classList.add('filtro');
             }
             if (!input3.contains(e.target) && !conte3.contains(e.target)) {
                              conte3.classList.add('filtro');
                          }

     });
let filtro= document.getElementById('confirmButton');

filtro.addEventListener('click', function () {
fil();

})
function fil(){
    let comu = document.getElementById('validationServer01');
    let loca = document.getElementById('validationServer02');
    let calle = document.getElementById('validationServer03');

    let pro1 = document.getElementsByName('Desastre Natural')[0];
    let pro2 = document.getElementsByName('Desastre urbano')[0];
    let pro3 = document.getElementsByName('Problema de infraestructura')[0];
    let pro4 = document.getElementsByName('Mejora')[0];

    let ni1 = document.getElementsByName('1')[0];
    let ni2 = document.getElementsByName('2')[0];
    let ni3 = document.getElementsByName('3')[0];

    let sol = document.getElementsByName('sol')[0];
        let sol2 = document.getElementsByName('sol2')[0];

        let sol3;

    let pro = [];
    let ni = [];
    if (pro1.checked) {
        pro.push(pro1.value);
    }
    if (pro2.checked) {
        pro.push(pro2.value);
    }
    if (pro3.checked) {
        pro.push(pro3.value);
    }
    if (pro4.checked) {
        pro.push(pro4.value);
    }

    if (ni1.checked) {
        ni.push(ni1.value)
    }
    if (ni2.checked) {
        ni.push(ni2.value)
    }
    if (ni3.checked) {
        ni.push(ni3.value)
    }
      if (sol.checked) {
            sol3=sol.value;
        }
        if (sol2.checked) {
            sol3=sol2.value;
        }
    let url = 'http://solucionaya.es/api/auto'
    let url2 = 'http://solucionaya.es/api/loca'
    let url3 = 'http://solucionaya.es/api/calle'

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

                if (comu.value == data[i].c_autonoma) {
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
                            const body = {
                                comun: comuna,
                                lo: local,
                                ca: cal,
                                p: pro,
                                n: ni,
                                s:sol3
                            }

                            fetch("http://solucionaya.es/explorar/filtro", {
                                method: 'POST',
                                body: JSON.stringify(body),
                                headers: {
                                    'Content-Type': 'application/json'
                                }
                            }).then(response => response.json()).then(data => {
                                let url4 = 'http://solucionaya.es/api/loca';
                                let url5 = 'http://solucionaya.es/api/auto';
                                  url3 = 'http://solucionaya.es/api/calle';
                                  url2 = 'http://solucionaya.es/api/problema';
                                let conte = data;

                                let padre = document.getElementById('contenedor');

                                padre.innerHTML = "";



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
                                                            if (data2[x].id == conte[i].ID_PROBLEMA) {
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
                                                                                            if (data3[x].id == conte[i].ID_CALLE) {
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
                                                                                                    if (data4[x].id == conte[i].ID_LOCALIDAD) {
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
                                                                                                               if (conte[i].ID_AUTONOMA == data5[x].id) {
                                                                                                                 au = data5[x].c_autonoma;
                                                                                                                      }

                                                                                                                         }

                                                                                                                let img=conte[i].FOTO;

                                                                                                             index2(conte[i], pro, ca, local,au,img);

                                                                                                      }
                                                                                                     )



                                                                                            }
                                                                                            )
                                                                                    }
                                                                                    )

                                                        })

                                }

                            })

                        })
                })




        })
}

function index2(conte,pro,ca,loca,au,img2){


let padre = document.getElementById('contenedor');

let div1 = document.createElement('div');
let div2 = document.createElement('div');

let img = document.createElement('img');
let p = document.createElement('p');
let p2 = document.createElement('p');


let imgdata="./imagenes/"+img2;
img.setAttribute('src',imgdata);

p.textContent=pro;

p2.textContent=au+', '+loca+', '+capitalizarCadaPalabra(ca);

padre.appendChild(div1);

if(conte.NIVEL==1){
div1.style.backgroundColor = 'green';
}else if(conte.NIVEL==2){
div1.style.backgroundColor = 'yellow';
}else if(conte.NIVEL==3){
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
