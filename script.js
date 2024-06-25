
// PARTE DE ABRIR A BOX ------- NAO MEXA  

let seta = document.getElementById('img')
  
    function increase() {
        let texto = document.getElementById('letraGrande')
        texto.style.transition = "1s all"
        texto.style.marginBottom = "30%"
        texto.innerHTML= "Escolhas as <span>Opções</span>"
        let principal = document.getElementById('sitepage')
        principal.style.height = "100vh"
        seta.style.top ="100%"
        let cont = document.getElementById('conteinerConfig')
        setTimeout(() => {
            cont.style.opacity = '1' 
        }, 100
        )
        cont.style.display = 'grid'
}
seta.addEventListener("click", increase)







let { width } = window.screen
// PARTE DA PRIMEIRA BOX ----- NAO MEXA

let unitbox = document.getElementById('boxUnitConfig1')

function increasebox(){
    unitbox.style.width = "60%"
    unitbox.style.height = "60%"
    if(width > 1200){
        unitbox.style.width = "60%"
        unitbox.style.height = "60%"
        setTimeout(() => {
            unitbox.style.width = "55%"
            unitbox.style.height = "55%"
            unitbox.style.opacity = "0"
            unitbox.style.boxShadow = "0 0 40px black"
        },
        )
        setTimeout(() => {
            unitbox.style.opacity = "1"
            unitbox.style.width = "200px"
            unitbox.style.height = "200px"
            unitbox.style.boxShadow = "0 0 0px white"
    
        },
        1000)
    }
    else{
        unitbox2.style.width = "60%"
        unitbox2.style.height = "60%"
        setTimeout(() => {
            unitbox2.style.width = "55%"
            unitbox2.style.height = "55%"
            unitbox2.style.opacity = "0"
            unitbox2.style.boxShadow = "0 0 40px black"
        },
        )
        setTimeout(() => {
            unitbox2.style.opacity = "1"
            unitbox2.style.width = "60%"
            unitbox2.style.height = "60%"
            unitbox2.style.boxShadow = "0 0 0px white"
    
        },
        1000)
    }
        let page = document.getElementById('sitepage')
        page.style.animation = "transform2 1s forwards"
        seta.style.top="90%"

    let conteine2 = document.getElementById('conteinerConfig')
    conteine2.style.backgroundColor = "#0e0e0e8a"
    let aside = document.querySelector('aside')
    aside.style.background = "linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(23,24,55,1) 100%)"
    aside.innerHTML = ""
        let body = document.querySelector('#rootPrincip')
        body.style.backgroundColor = "#001f44"
    
}




//PARTE DA SEGUNDA BOX ---- NAO MEXA\


let unitbox2 = document.querySelector('#boxUnitConfig2')
function increasebox2(){
    if(width > 1200){
        unitbox2.style.width = "60%"
        unitbox2.style.height = "60%"
        setTimeout(() => {
            unitbox2.style.width = "55%"
            unitbox2.style.height = "55%"
            unitbox2.style.opacity = "0"
            unitbox2.style.boxShadow = "0 0 40px black"
        },
        )
        setTimeout(() => {
            unitbox2.style.opacity = "1"
            unitbox2.style.width = "200px"
            unitbox2.style.height = "200px"
            unitbox2.style.boxShadow = "0 0 0px white"
    
        },
        1000)
    }
    else{
        unitbox2.style.width = "60%"
        unitbox2.style.height = "60%"
        setTimeout(() => {
            unitbox2.style.width = "55%"
            unitbox2.style.height = "55%"
            unitbox2.style.opacity = "0"
            unitbox2.style.boxShadow = "0 0 40px black"
        },
        )
        setTimeout(() => {
            unitbox2.style.opacity = "1"
            unitbox2.style.width = "60%"
            unitbox2.style.height = "60%"
            unitbox2.style.boxShadow = "0 0 0px white"
    
        },
        1000)
    }
        let page = document.getElementById('sitepage')
        page.style.animation = "transform3 2s forwards ease-in-out"
        seta.style.top="90%"

    let conteine2 = document.getElementById('conteinerConfig')
    conteine2.style.backgroundColor = "#0000008A"
    let aside = document.querySelector('aside')
    aside.style.background = "black"
    aside.innerHTML = ""
    let body = document.querySelector('#rootPrincip')
    body.style.backgroundColor = "black"
    
}



// Prevent --- previnir que uma ação padrão aconteça
let prevent = document.getElementById('prevent')
 let routes = {
     "/cant" : "/pages/cant.html",
     "/introduction" : "/pages/introducao.html",
     404 : "/pages/404.html",
     "/option": "/pages/ramification/option.html",
     "/" : "/pages/normal.html"
 }

let previnir = (event) => {
    prevent.innerText= "-------"
    event = window.event
    event.preventDefault()
    window.history.pushState({}, "", event.target.href)
    manipulator()
    

}
let manipulator = () => {
    const { pathname } = window.location
    const route = routes[pathname] || routes[404]
    fetch(route)
    .then(data => data.text())
    .then(html => {
        document.querySelector('#oquemuda').innerHTML = html
    })
}
manipulator()
window.onpopstate = () => manipulator()
prevent.addEventListener('click', previnir)
prevent.addEventListener("click", increasebox)


// PREVENT DA SEGUNDA PARTE ------ NAO MEXA
let prevent2 = document.getElementById('prevent2')

let previnir2 = (event) => {
    prevent2.innerText= "-------"
    event = window.event
    event.preventDefault()
    window.history.pushState({}, "", event.target.href)
    manipulator()
}
prevent2.addEventListener('click', previnir2)
prevent2.addEventListener("click", increasebox2)
