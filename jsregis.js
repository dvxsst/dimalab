const form = document.getElementById('form');
const Nickname = document.getElementById('Nickname');


form.addEventListener('submit', e => {
    e.preventDefault();

    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
}

const validateInputs = () => {
    const NicknameValue = Nickname.value.trim();

    if(NicknameValue === '') {
        setError(Nickname, 'Nickname is required');
    } else {
        setSuccess(Nickname);
    }

}


function checkOut(){
    console.log(localStorage.getItem('Nickname'))
    console.log(localStorage.getItem('email'))
    console.log(localStorage.getItem('date'))
    console.log(localStorage.getItem('state'))

  }
  function onSubmit(event){

    let Nickname = document.getElementById('Nickname').value
    let email = document.getElementById('email').value



    console.log(Nickname)
    console.log(email)
    let dannye = event.target;
    let formdata = new FormData(dannye)
    let form_data_obj = Object.fromEntries(formdata)
    console.log(form_data_obj);

    

    localStorage.setItem('Nickname', form_data_obj.Nickname)
    localStorage.setItem('email', form_data_obj.email)


    event.preventDefault();
  }