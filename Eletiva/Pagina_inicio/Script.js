let lupa = document.querySelector('.lupa_search');
let mae_search = document.querySelector('.mae_search');
let x = document.querySelector('.x_search');

let camisa7 = document.querySelector('.camisa-7')
let camisa8 = document.querySelector('.camisa-8')
let camisa9 = document.querySelector('.camisa-9')

let cardText = document.querySelector('.card-text') 

lupa.addEventListener('click', ()=>{

    if (window.innerWidth<1201){}
   
    else{

        mae_search.classList.add('lupa-ativada')

    }

})

x.addEventListener('click', ()=>{

    mae_search.classList.remove('lupa-ativada')

})



