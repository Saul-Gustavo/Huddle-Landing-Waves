const submitBtn = document.querySelector('.footer-submit')

submitBtn.addEventListener('click', (e) => {
    e.preventDefault();
    const mensaje = document.querySelector('.mensaje');
    const emailInput = document.querySelector('.input-email');
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (emailInput.value === "" || !emailRegex.test(emailInput.value)) {
        mensaje.style.display = 'block';
        emailInput.style.border = "1.5px solid red";
    } else {
        mensaje.style.display = "none";
        emailInput.style.border = "1px solid transparent";
    }
})