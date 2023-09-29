/* ----------------- RECUPERATION DES ELEMENTS DU DOM ----------------*/

let registerForm = document.querySelector('#register-form');
let errorHolder = document.querySelector('.error');


/* ----------------- EVENEMENTS ----------------*/

registerForm.addEventListener('submit', handleSumbit);

/*------------------ FONCTIONS ----------------*/

function handleSumbit(event) {
    event.preventDefault();
    // Gérer la soumission de mon formulaire

    // Il est possible d'utiliser un formdata pour extraire
    // tous les champs du formulaire
    let data = new FormData(event.currentTarget);
    
    // Si j'ai un username
    if(!data.get('username')) {
        showError('Veuillez entrer un nom d\'utilisateur');
        return;
    }

    if(!isEmailValid(data.get('email'))) {
        showError('Veuillez entrer un email valide');
        return;
    };

    if(!isPasswordValid(data.get('password'))) {
        showError('Veuillez entrer un mot de passe valide');
        return;
    }
    
    clearError();
    alert('Merci pour votre inscription à la news letter Barbie');
}

function showError(error) {
    errorHolder.textContent = error;
    errorHolder.classList.remove('hidden');
}

function clearError() {
    errorHolder.classList.add('hidden');
}

function isEmailValid(email) {
  var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  return re.test(email);
}
function isPasswordValid(password) {
    var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    return re.test(password);
}
// console.log(isEmailValid('XXXXXXXXXXXX'));
// console.log(isEmailValid('sion.genders.ext@oclock.io'));
// console.log(isEmailValid('xX_LeBgDu91_Xx@voila.fr'));
// console.log(isEmailValid('+33836656565'));

function isPasswordValid(password) {
    var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
    return re.test(password);
}
