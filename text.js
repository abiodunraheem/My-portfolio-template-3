// mobile menu
const openHamburger = document.getElementById('bars');
const openMenu = document.getElementById('mobileMenu');
const closeBtn = document.getElementById('closeBtn');
const link = document.querySelectorAll('.link');
function openMobileMenu() {
    openMenu.style.display = 'block';
}
function closeMobileMenu(){
    openMenu.style.display = 'none';
}
openHamburger.addEventListener('click', openMobileMenu);
closeBtn.addEventListener('click', closeMobileMenu);
link.forEach((link) => {
    link.addEventListener('click', closeMobileMenu);
});

// form validation
const form = document.getElementById('form');
const error = document.getElementById('error');
const email = document.getElementById('email');
function formValidate() {
    if (email.value !== email.value.toLowerCase()) {
        error.innerHTML = `Your email is not in lower case, please cosider using ${email.value.toLowerCase} instead`
        return false
    }
    return true
}

form.addEventListener('submit', (submitForm) => {
    if (!formValidate()) {
        submitForm.preventDefault();
    }
});
// function formValidate() { 
//     if (email.value !== email.value.toLowerCase()) {
//       error.innerHTML = `Your email is not in lowercase. Consider using ${email.value.toLowerCase()} instead`;
//       return false;
//     }
//     return true;
//   }
  
//   form.addEventListener('submit', (submitForm) => {
//     if (!formValidate()) {
//       submitForm.preventDefault();
//     }
//   });
  