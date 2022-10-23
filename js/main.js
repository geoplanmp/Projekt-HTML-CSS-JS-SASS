document.getElementsByClassName('mobile-hamburger')[0].addEventListener('click', function(){
    document.getElementsByClassName('open-menu-holder')[0].classList.toggle('open');
});

document.getElementsByClassName('mobile-close')[0].addEventListener('click', function(){
    document.getElementsByClassName('open-menu-holder')[0].classList.toggle('open');
});

console.log('Sprawdzenie czy pola formularza są wypełnione');

let btnForm = document.getElementsByClassName('btn-form')[0];

const checkField = () => {
    // event.preventDefault();
    // let errors = [];
    // // let appointmentName = document.getElementsByClassName('form-field');
    let appointmentName = document.getElementById('appointment-name');
    let appointmentEmail = document.getElementById('appointment-email');
    let appointmentService = document.getElementById('appointment-service');
    let appointmentPhone = document.getElementById('appointment-phone');
    let appointmentDate = document.getElementById('appointment-date');
    let appointmentTime = document.getElementById('appointment-time');
    let appointmentMessage = document.getElementById('appointment-message');

    let pMsg = document.getElementsByClassName('appointment-message')[0];
    pMsg.innerHTML = '';
    // for(let i = 0; i<appointmentName.length; i++) {
    //     console.log(appointmentName);
    // }
    if (appointmentName.value.trim()==='') {
        pMsg.innerText = 'Wypełnij pole Imię !';
        appointmentName.classList.add('border-toggle');
    }
    
    else {
        appointmentName.classList.remove('border-toggle');
    }

    if (appointmentEmail.value.trim()==='') {
        pMsg.innerText = 'Wypełnij pole e-mail !';
        appointmentEmail.add('border-toggle');
    }

    else {
        appointmentEmail.classList.remove('border-toggle');
    }

    if (!appointmentEmail.value.includes('@')) {
        pMsg.innerText = 'Wpisz znak @';
    }

    if (appointmentService.value.trim()==='') {
        pMsg.innerText = 'Wypełnij pole serwis!';
        appointmentService.classList.add('border-toggle');
    }

    else {
        appointmentService.classList.remove('border-toggle');
    }

    if (appointmentPhone.value.trim()==='') {
        pMsg.innerText = 'Wypełnij pole telefon!';
        appointmentPhone.classList.add('border-toggle');
    }

    else {
        appointmentPhone.classList.remove('border-toggle');
    }

    if (appointmentDate.value.trim()==='') {
        pMsg.innerText = 'Wypełnij pole data!';
        appointmentDate.classList.add('border-toggle');
    }

    else {
        appointmentDate.classList.remove('border-toggle');
    }

    if (appointmentTime.value.trim()==='') {
        pMsg.innerText = 'Wypełnij pole czas !';
        appointmentTime.classList.add('border-toggle');
    }

    else {
        appointmentTime.classList.remove('border-toggle');
    }

    if (appointmentMessage.value.trim()==='') {
        pMsg.innerText = 'Wypełnij puste pole wiadomość!';
        appointmentMessage.classList.add('border-toggle');
    }

    else {
        appointmentMessage.classList.remove('border-toggle');
    }

//    }

    // if (appointmentPhone.value===number) {
    //     pMsg.innerText = 'Wypełnij za pomocą cyfr';
    // }

    console.log('Wysyłanie formularza');

    let user = {
        appointmentName: appointmentName.value.trim(),
        appointmentEmail: appointmentEmail.value.trim(),
        appointmentService: appointmentService.value.trim(),
        appointmentPhone: appointmentPhone.value.trim(),
        appointmentDate: appointmentDate.value.trim(),
        appointmentTime: appointmentTime.value.trim(),
        appointmentMessage: appointmentMessage.value.trim(),
    };

    console.log(user);

    fetch(`https://akademia108.pl/api/ajax/post-appointment.php`, {
        headers: {
            'Content-Type': 'application/json',
        },
        mode: 'cors',
        method: 'POST',
        body: JSON.stringify(user)
    })
        .then(res => res.json())
        .then(resJSON => {
            console.log(resJSON);

            if (!resJSON.errors) {
                btnForm.reset();
                pMsg.innerText = resJSON.messages[0];
            }
        })

        .catch((error) => {
            console.log('Error', error);
        });
}

btnForm.addEventListener('submit', checkField);