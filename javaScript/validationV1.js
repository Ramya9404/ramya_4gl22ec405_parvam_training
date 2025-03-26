function validateForm(event){
    event.preventDefault();

    const formField = document.querySelectorAll("#registration_form .form-control, #registration_form .form-check-input");
    let isValid = true;

    function createErrorMessage(parentDiv, message){
        const errorMessage = document.createElement('div');
        errorMessage.classList.add('text-danger');
        errorMessage.innerText = message;
        parentDiv.appendChild(errorMessage);

        setTimeout(() => {
            errorMessage.remove();
        }, 5000);
    }

    formField.forEach(field => {
        let parentDiv = field.closest('.mb-3');
        const label = parentDiv.querySelector('label');

        const existingError = parentDiv.querySelector('.text-danger');
        if(existingError){
            existingError.remove();
        }
        
        if(field.id == 'phone_number'){
            const phonePattern = /^[6-9]\d{9}$/;
            if(field.value && !phonePattern.test(field.value.trim())){
                isValid = false;
                createErrorMessage(parentDiv, 'phone number should contain only 10 digits and It should start with (6,7,8 or 9).');
            }
        }

        if(field.id === 'email_id'){
            const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            if(field.value && !emailPattern.test(field.value.trim())){
                isValid = false;
                createErrorMessage(parentDiv, 'please enter a valid email address.');
            }
        }

        if(field.id === 'aadhar_number'){
            const aadharPattern = /^\d{12}$/;
            if(field.value && !aadharPattern.test(field.value.trim())){
                isValid = false;
                createErrorMessage(parentDiv, 'phone number should contain exactly 12 digits.');
            }
        }

        if(field.id === 'pin_code'){
            const pinCodePattern = /^\d{6}$/;
            if(field.value && !pinCodePattern.test(field.value.trim())){
                isValid = false;
                createErrorMessage(parentDiv, 'pin code should contain exactly 6 digits.');
            }
        }

        if(label && label.textContent.toLowerCase().includes('name')){
            const namePattern = /^[a-zA-Z\s.]+$/;
            if(field.value && !namePattern.test(field.value.trim())){
                isValid = false;
                createErrorMessage(parentDiv, `${label.textContent} can only contain alphabets, spaces & full-stop(perid symbol).`);
            }
        }

        if(label && label.textContent.toLowerCase().includes('board')){
            const namePattern = /^[a-zA-Z\s.]+$/;
            if(field.value && !namePattern.test(field.value.trim())){
                isValid = false;
                createErrorMessage(parentDiv, `${label.textContent} can only contain alphabets, spaces & full-stop(perid symbol).`);
            }
        }
        
        if(field.type === 'radio' || field.type === 'checkbox'){
            const radioChecked = document.querySelector(`input[name="${field.name}"]:checked`);
            if(!radioChecked){
                isValid = false;
                createErrorMessage(parentDiv, `${label.textContent} is required.`);
            }
        }else if(!field.value.trim()){
            isValid = false;
            createErrorMessage(parentDiv, `${label.textContent} is required.`);
        }
    });

    if(isValid){
        alert("Form submitted successfully!");
        document.getElementById("registration_form").onsubmit();
        return true;
    }else{
        return false;
    }
}