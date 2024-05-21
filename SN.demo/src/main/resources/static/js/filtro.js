const filterButton = document.getElementById('filterButton');
const filterOverlay = document.getElementById('filterOverlay');
const confirmButton = document.getElementById('confirmButton');

filterButton.addEventListener('click', () => {
  filterOverlay.style.display = 'block';
});

confirmButton.addEventListener('click', () => {
  filterOverlay.style.display = 'none';
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
    const ul = document.querySelector('#filterOptions > div:nth-child(3) >div > ul');
    const nuevoLi = document.createElement('li');

nuevoLi.textContent = data[i].c_autonoma;

nuevoLi.classList.add('list-group-item');
nuevoLi.classList.add('list-group-item-action');
nuevoLi.classList.add('filtro');

nuevoLi.addEventListener('click',function(){
document.getElementById('validationServer01').value=nuevoLi.textContent;

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

        element.classList.remove('filtro')


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

        element.classList.remove('filtro')


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

        element.classList.remove('filtro')


    })
    document.querySelector('#filterOptions > div:nth-child(5) > div').classList.remove('filtro');
})

let filtro= document.getElementById('confirmButton');

filtro.addEventListener('click',function(){
let comu=document.getElementById('validationServer01');
let loca=document.getElementById('validationServer02');
let calle=document.getElementById('validationServer03');

let pro1=document.getElementsByName('Desastre Natural')[0];
let pro2=document.getElementsByName('Desastre urbano')[0];
let pro3=document.getElementsByName('Problema de infraestructura')[0];
let pro4=document.getElementsByName('Mejora')[0];
let ni1=document.getElementsByName('1')[0];
let ni2=document.getElementsByName('2')[0];
let ni3=document.getElementsByName('3')[0];

let pro = [];
let ni = [];
if(pro1.checked){
 pro.push(pro1.value);
}
if(pro2.checked){
pro.push(pro2.value);
}
if(pro3.checked){
pro.push(pro3.value);
}
if(pro4.checked){
pro.push(pro4.value);
}

if(ni1.checked){
ni.push(ni1.value)
}
if(ni2.checked){
ni.push(ni2.value)
}
if(ni3.checked){
ni.push(ni3.value)
}
  let url = 'http://localhost:8888/api/auto'
    let url2 = 'http://localhost:8888/api/loca'
    let url3 = 'http://localhost:8888/api/calle'

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
                                    n: ni
                                }
                                console.log(body);
                                fetch("http://localhost:8888/explorar/filtro", {
                                        method: 'POST',
                                        body: JSON.stringify(body),
                                        headers: {
                                            'Content-Type': 'application/json'
                                        }
                                    }).then(response => response.json()).then( data => {
                                        console.log(data);
                                    }).catch(error => console.error(error));

                               })
                                    })




                            })




})
