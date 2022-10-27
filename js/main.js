document.getElementsByClassName('mobile-hamburger')[0].addEventListener('click', function(){
    document.getElementsByClassName('open-menu-holder')[0].classList.toggle('open');
});

document.getElementsByClassName('mobile-close')[0].addEventListener('click', function(){
    document.getElementsByClassName('open-menu-holder')[0].classList.toggle('open');
});

console.log('Sprawdzenie czy pola formularza są wypełnione');



const formMakeAppoint = (appointment) => {
    
    let pMsg = document.getElementsByClassName('appointment-message')[0];
    console.log('Wysyłanie formularza');
 

    fetch(`https://akademia108.pl/api/ajax/post-appointment.php`, {
        headers: {
            'Content-Type': 'application/json',
        },
        mode: 'cors',
        method: 'POST',
        body: JSON.stringify(appointment)
    })
    .then(res => res.json())
    .then(resJSON => {
            console.log(resJSON);

        if (!resJSON.errors) {
            btnForm.reset();
            pMsg.innerText = `Dziękujemy ${resJSON.appointment.name}. Zostałeś zapisany!`;
        }
    })

    .catch((error) => {
        console.log('Error', error);
    });
}

let btnForm = document.getElementById('appointment-form');
const sendAppointment = (event) => {
    event.preventDefault();

    let allFields = false;
    // let formFields = document.getElementsByClassName('form-field');
    let appointmentName = document.getElementById('appointment-name');
    let appointmentEmail = document.getElementById('appointment-email');
    let appointmentService = document.getElementById('appointment-service');
    let appointmentPhone = document.getElementById('appointment-phone');
    let appointmentDate = document.getElementById('appointment-date');
    let appointmentTime = document.getElementById('appointment-time');
    let appointmentMessage = document.getElementById('appointment-message');
    let number1 = 10;
    let pMsg = document.getElementsByClassName('appointment-message')[0];
    pMsg.innerHTML = '';

    let appointment = {
        name: appointmentName.value.trim(),
        email: appointmentEmail.value.trim(),
        service: appointmentService.value.trim(),
        phone: appointmentPhone.value.trim(),
        date: appointmentDate.value.trim(),
        time: appointmentTime.value.trim(),
        message: appointmentMessage.value.trim(),
    };

    // for(let i = 0; i<formFields.length; i++) {
    //     if (formFields[i].value === '') {
    //         allFields = false;
    //         formFields[i].classList.add('border-toggle');
    //     } else {
    //         allFields = true;
    //         formFields[i].classList.remove('border-toggle');
    //     }
    // }

    if (appointmentName.value.trim()==='') {
        allFields = false;
        appointmentName.classList.add('border-toggle');
    } else {
        allFields = true;
        appointmentName.classList.remove('border-toggle');  
    }

    if (appointmentEmail.value.trim()==='') {
        allFields = false;
        appointmentEmail.classList.add('border-toggle');
    } else {
        allFields = true;
        appointmentEmail.classList.remove('border-toggle');
    }

    // if (!appointmentEmail.value.includes('@')) {
    //     pMsg.innerText = 'Wpisz znak @';
    // }

    if (appointmentService.value.trim()==='') {
        allFields = false;
        appointmentService.classList.add('border-toggle');
    } else {
        allFields = true;
        appointmentService.classList.remove('border-toggle');
    }

    if (appointmentPhone.value.trim()==='') {
        allFields = false;
        appointmentPhone.classList.add('border-toggle');
    } else {
        allFields = true;
        appointmentPhone.classList.remove('border-toggle');
    }

    if (appointmentDate.value.trim()==='') {
        allFields = false;
        appointmentDate.classList.add('border-toggle');
    } else {
        allFields = true;
        appointmentDate.classList.remove('border-toggle');
    }

    if (appointmentTime.value.trim()==='') {
        allFields = false;
        appointmentTime.classList.add('border-toggle');
    } else {
        allFields = true;
        appointmentTime.classList.remove('border-toggle');
    }

    if (appointmentMessage.value.trim()==='') {
        allFields = false;
        appointmentMessage.classList.add('border-toggle');
    } else {
        allFields = true;
        appointmentMessage.classList.remove('border-toggle');
    }

    // if (!appointmentPhone.value==number1) {
    //         allFields = false;
    //         pMsg.innerText = 'Wypełnij za pomocą cyfr';
    // }

    if (allFields) {
        formMakeAppoint(appointment);
    } else {
        appointmentMessage.classList.add('border-toggle');
        pMsg.innerText = 'Wypełnij wymagane pole';
    }
}

btnForm.addEventListener('submit', sendAppointment);