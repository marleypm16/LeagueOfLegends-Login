const inputs= document.querySelectorAll('.input_')
const button = document.querySelector('.button')



const handleChange = () =>{
  const [username,password] = inputs;

  if (username.value && password.value.length >= 8){
        button.removeAttribute('disabled')
  }

  else{
    button.setAttribute('disabled' , '')
  }

}

const FocusActive = ({target}) =>{
    const span = target.previousElementSibling;
    span.style.visibility = 'visible'
}


const FocusDesative = ({target}) =>{
    const span = target.previousElementSibling;
    span.style.visibility = 'hidden'
}


inputs.forEach((input) => input.addEventListener('focus',FocusActive))

inputs.forEach((input) => input.addEventListener('focusout',FocusDesative))

inputs.forEach((input) => input.addEventListener('input',handleChange))

