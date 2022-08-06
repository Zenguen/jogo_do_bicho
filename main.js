const animals = document.querySelectorAll('.animal');
const container = document.getElementById('container');
const body = document.querySelector('body');
const sala = document.getElementById('sala');
const senha = document.getElementById('senha');
const btn = document.getElementById('criar')

const inputsHaveValues = () =>{
    return !!sala.value && !!senha.value
}
container.addEventListener('click', e =>{
    let animal = e.target;
    let animalsSelected = [...animals].filter(e => e.classList.contains('isSelected'))
    if(animal.classList.contains('animal')){
        if(animalsSelected.length === 0){
            animal.classList.toggle('isSelected')
        }else if(animal !== animalsSelected[0]){
            animalsSelected[0].classList.toggle('isSelected');
            animal.classList.toggle('isSelected')
        }else{
            animal.classList.toggle('isSelected')
        }
    }else if(animalsSelected.length > 0){
        animalsSelected[0].classList.toggle('isSelected');
    }
})

body.addEventListener('click', e =>{
    let where = e.target;
    let animalsSelected = [...animals].filter(e => e.classList.contains('isSelected'));
    let isInput = where == sala || where == senha;
    if(!where.classList.contains('animal') && animalsSelected.length > 0 && !isInput){
        animalsSelected[0].classList.toggle('isSelected');
    }
})

sala.addEventListener('focus', e => btn.disabled = !inputsHaveValues())

senha.addEventListener('focus', e => btn.disabled = !inputsHaveValues())

sala.addEventListener('focusout', e => btn.disabled = !inputsHaveValues())

senha.addEventListener('focusout', e => btn.disabled = !inputsHaveValues())

sala.addEventListener('input', e => btn.disabled = !inputsHaveValues())

senha.addEventListener('input', e => btn.disabled = !inputsHaveValues())

