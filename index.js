let nameError = document.getElementById("nameError");
let phoneError = document.getElementById("phoneError");
let emailError = document.getElementById("emailError");
let messageError = document.getElementById("messageError");
let submitError = document.getElementById("submitError");
let btnSubmit = document.getElementById("submit");

// <---------------------- Name Validation ------------------------->
    function validateName(){
        let name = document.getElementById("name").value;
        if(name.length == 0){
            nameError.innerHTML = "Name is required";
            return false;
        }
        if(!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)){
            nameError.innerHTML = "Write full name";
            return false;
        }
        nameError.innerHTML = '<i class="bi bi-check-circle-fill text-success"></i>';
        return true;
    }
   
    function validatePhone(){
        let phone = document.getElementById("phone").value;
        if(phone.length == 0){
            phoneError.innerHTML = 'Phone no is required';
            return false;
        }
        if(phone.length !== 10){
             phoneError.innerHTML = "Phone no must conatins 10 digits";
            return false;
        }
        if(!phone.match(/^[0-9]{10}$/)){
            phoneError.innerHTML = "Only digits please";
            return false;
        }
        phoneError.innerHTML = '<i class="bi bi-check-circle-fill text-success"></i>';
        return true;

    }

    function validateEmail(){
        let email = document.getElementById("email").value;

        if(email.length == 0){
            emailError.innerHTML = 'Email is required';
            return false;
        }
        if(!email.match(/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/)){
            emailError.innerHTML = 'Invalid Email';
            return false;
        }
        emailError.innerHTML = '<i class="bi bi-check-circle-fill text-success"></i>';
        return true;
    }

    function validateMsg(){
        let msg = document.getElementById("message").value;
        var required = 30;
        var left = required - msg.length;

        if(left>0){
            messageError.innerHTML = left + ' More character required';
            return false;
        }
        messageError.innerHTML = '<i class="bi bi-check-circle-fill text-success"></i>';
        return true;

    }


    btnSubmit.addEventListener("click", function(e){
        if(!validateName() || !validatePhone() || !validateEmail() || !validateMsg()){
            e.preventDefault();
            submitError.style.display = 'block';
            submitError.innerHTML = 'Please fix error to submit';
            setTimeout(function(){
                submitError.style.display = 'none';
            },3000)
            return false;
        }
    })
