document.getElementsByClassName('mobile-hamburger')[0].addEventListener('click', function () {
    document.getElementsByClassName('open-menu-holder')[0].classList.toggle('open');
});

document.getElementsByClassName('mobile-close')[0].addEventListener('click', function () {
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
    let allFields2 = false;
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

    let allFieldsErrors = {
        name: true,
        email: true,
        service: true,
        phone: true,
        date: true,
        time: true,
        message: true,
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

    // for (let i=0; i<allFieldsErrors; i++) {
    //     if (allFieldsErrors) {
    //         formMakeAppoint(appointment);
    //     } else {
    //         appointmentMessage.classList.add('border-toggle');
    //         pMsg.innerText = 'Wypełnij wymagane pole';
    //     }
    // }

    if (appointmentName.value.trim() === '') {
        allFieldsErrors.name = false;
        appointmentName.classList.add('border-toggle');
    } else {
        allFieldsErrors.name = true;
        appointmentName.classList.remove('border-toggle');
    }

    if (appointmentEmail.value.trim() === '') {
        allFieldsErrors.email = false;
        appointmentEmail.classList.add('border-toggle');
    } else if (appointmentEmail.value.trim() === '') {
        allFieldsErrors.email = true;
        appointmentEmail.classList.remove('border-toggle');
    }
    // else if (!appointmentEmail.value.includes('@')) {
    // allFields2 = false;
    // appointmentEmail.classList.add('border-toggle');
    // } else if (!appointmentEmail.value.includes('@')) {
    // allFields2 = true;
    // appointmentEmail.classList.remove('border-toggle');
    // }
    if (!appointmentEmail.value.includes('@')) {
        allFieldsErrors.email = false;
        pMsg.innerText = 'Wpisz znak @';
    }

    if (appointmentService.value.trim() === '') {
        allFieldsErrors.service = false;
        appointmentService.classList.add('border-toggle');
    } else {
        allFieldsErrors.service = true;
        appointmentService.classList.remove('border-toggle');
    }

    if (appointmentPhone.value.trim() === '') {
        allFieldsErrors.phone= false;
        appointmentPhone.classList.add('border-toggle');
    } else {
        allFieldsErrors.phone = true;
        appointmentPhone.classList.remove('border-toggle');
    }

    if (appointmentDate.value.trim() === '') {
        allFieldsErrors.date = false;
        appointmentDate.classList.add('border-toggle');
    } else {
        allFieldsErrors.date = true;
        appointmentDate.classList.remove('border-toggle');
    }

    if (appointmentTime.value.trim() === '') {
        allFieldsErrors.time = false;
        appointmentTime.classList.add('border-toggle');
    } else {
        allFieldsErrors.time = true;
        appointmentTime.classList.remove('border-toggle');
    }

    if (appointmentMessage.value.trim() === '') {
        allFieldsErrors.message = false;
        appointmentMessage.classList.add('border-toggle');
    } else {
        allFieldsErrors.message = true;
        appointmentMessage.classList.remove('border-toggle');
    }

    console.log(((/[a-zA-Z]/).test(appointmentPhone.value)));
    if (((/[a-zA-Z]/).test(appointmentPhone.value)) || appointmentPhone.value.length > 9) {
        allFieldsErrors.phone = false;
        console.log(((/[a-zA-Z]/).test(appointmentPhone.value)));
        pMsg.innerText = 'Wypełnij za pomocą cyfr';
        console.log(appointmentPhone.value);
    }

    if (allFieldsErrors.name) {
        formMakeAppoint(appointment);
    } else {
        appointmentName.classList.add('border-toggle');
        pMsg.innerText = 'Wypełnij wymagane pole';
    }

    if (allFieldsErrors.email) {
        formMakeAppoint(appointment);
    } else {
        appointmentEmail.classList.add('border-toggle');
        pMsg.innerText = 'Wypełnij wymagane pole';
    }

    if (allFieldsErrors.phone) {
        formMakeAppoint(appointment);
    } else {
        appointmentPhone.classList.add('border-toggle');
        pMsg.innerText = 'Wypełnij wymagane pole';
    }

    if (allFieldsErrors.date) {
        formMakeAppoint(appointment);
    } else {
        appointmentDate.classList.add('border-toggle');
        pMsg.innerText = 'Wypełnij wymagane pole';
    }

    if (allFieldsErrors.time) {
        formMakeAppoint(appointment);
    } else {
        appointmentTime.classList.add('border-toggle');
        pMsg.innerText = 'Wypełnij wymagane pole';
    }

    if (allFieldsErrors.message) {
        formMakeAppoint(appointment);
    } else {
        appointmentMessage.classList.add('border-toggle');
        pMsg.innerText = 'Wypełnij wymagane pole';
    }
}
    // if (allFields2) {
    //     formMakeAppoint(appointment);
    // } else {
    //     appointmentMessage.classList.add('border-toggle');
    //     pMsg.innerText = 'Wpisz znak @';  
    // }




// }

btnForm.addEventListener('submit', sendAppointment);