export const password = () => {
    const inputPassword = document.querySelectorAll('.form__input_password');
    const btnsEyePassword = document.querySelectorAll('.form__password-eye');

    btnsEyePassword.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            btn.classList.toggle('form__password-eye_show');
            inputPassword[index].type = btn.classList.contains('form__password-eye_show')
                ? 'text'
                : 'password'
        })
    })
}

//form__password-eye_show