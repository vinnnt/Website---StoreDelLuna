$(function() {
    // var submit = document.getElementById('registerBtn')

    function isAlphaNumeric(password) {
        var isLowerCase = false
        var isUpperCase = false
        var isNumeric = false
        
        for(let i = 0; i < password.length; i++) {
            if(password.charCodeAt(i) >= 97 && password.charCodeAt(i) <= 122){
                isLowerCase = true;
            }
            if(password.charCodeAt(i) >= 65 && password.charCodeAt(i) <= 90){
                isUpperCase = true;
            }
            if(password.charCodeAt(i) >= 48 && password.charCodeAt(i) <= 57){
                isNumeric = true;
            }
        }
    
        if(isLowerCase && isUpperCase && isNumeric){
            return true;
        }
        return false;
    }
    
    // validasi username
    $('#usernameCheck').hide();
    var usernameError = true;
    $('#usernameTxt').focusout(function () {
        usernameValidate();
    });

    function usernameValidate() {
        var username = document.getElementById('usernameTxt').value
        if(username.length < 8) {
            $('#usernameCheck').show(); 
            $('#usernameCheck').html('Username must be more than 8 characters long'); 
            usernameError = false;
            return false;
        }
        else {
            $('#usernameCheck').hide();
        }        
    }

    // validasi full name
    $('#fullNameCheck').hide();
    var fullNameError = true;
    $('#fullNameTxt').focusout(function () {
        fullNameValidate();
    });

    function fullNameValidate() {
        var fullName = document.getElementById('fullNameTxt').value
        if(!fullName.includes(" ")) {
            $('#fullNameCheck').show(); 
            $('#fullNameCheck').html('Please input your full name separated with space'); 
            fullNameError = false;
            return false;
        }
        else {
            $('#fullNameCheck').hide();
        }        
    }

    // validasi email
    $('#emailCheck').hide();
    var emailError = true;
    $('#emailTxt').focusout(function () {
        emailValidate();
    });

    function emailValidate() {
        var email = document.getElementById('emailTxt').value
        if(!email.endsWith(".com") && !email.endsWith(".co.id")) {
            $('#emailCheck').show(); 
            $('#emailCheck').html('Please input a valid email format'); 
            emailError = false;
            return false;
        }
        else {
            $('#emailCheck').hide();
        }        
    }

    // validasi gender
    $('#genderCheck').hide();
    var genderError = true;
    function genderValidate() {
        var male = document.getElementById('maleRadio').checked
        var female = document.getElementById('femaleRadio').checked

        if(!male && !female){
            $('#genderCheck').show(); 
            $('#genderCheck').html('Please choose your gender'); 
            genderError = false;
            return false;
        }
        else{
            $('#genderCheck').hide();
        }
    }


    //validasi aggrement box
    $('#agreementCheck').hide();
    var agreementError = true;

    function agreeValidate() {
        var agree = document.getElementById('agreementBox').checked
        if(!agree) {
            $('#agreementCheck').show(); 
            $('#agreementCheck').html('you must accept our terms & condition before continue'); 
            agreementError = false;
            return false;
        }
        else {
            $('#agreementCheck').hide();
        }        
    }

    
    //validasi password
    $('#passwordCheck').hide();
    var passwordError = true;
    $('#passwordTxt').focusout(function () {
        passwordValidate();
    });

    function passwordValidate() {
        var password = document.getElementById('passwordTxt').value
        if(password.length < 4) {
            $('#passwordCheck').show(); 
            $('#passwordCheck').html('Password must be more than 4 characters'); 
            passwordError = false;
            return false;
        }
        else if (!isAlphaNumeric(password)){
            $('#passwordCheck').show(); 
            $('#passwordCheck').html('Password must be Alphanumeric'); 
            passwordError = false;
            return false;
        }
        else {
            $('#passwordCheck').hide();
        }        
    }
    
    
    //validasi confirmation password
    $('#confirmationPasswordCheck').hide();
    var confirmationPasswordError = true;
    $('#confirmationPasswordTxt').focusout(function () {
        confirmPasswordValidate();
    });

    function confirmPasswordValidate() {
        var passValue = document.getElementById('passwordTxt').value
        var confirmationPassword = document.getElementById('confirmationPasswordTxt').value
        if(confirmationPassword != passValue){
            $('#confirmationPasswordCheck').show(); 
            $('#confirmationPasswordCheck').html('Password and confirmation password must be the same'); 
            confirmationPasswordError = false;
            return false;
        }
        else{
            $('#confirmationPasswordCheck').hide();
        }
            
    }

    //validasi age
    $('#ageCheck').hide();
    var ageError = true;
    $('#ageTxt').focusout(function () {
        ageValidate();
    });

    function ageValidate() {
        var age = document.getElementById('ageTxt').value
        if(age < 17) {
            $('#ageCheck').show(); 
            $('#ageCheck').html('Age must be older than 16 years old'); 
            ageError = false;
            return false;
        }else{
            $('#ageCheck').hide();
        }
              
    }

    document.getElementById('registerBtn').addEventListener('click', function (e) { 
        e.preventDefault();
        
        usernameValidate();
        fullNameValidate();
        genderValidate();
        emailValidate();
        passwordValidate();
        confirmPasswordValidate();
        agreeValidate();
        ageValidate();
        if ((usernameError == true) && (fullNameError == true) && (emailError == true) && (genderError == true) &&(passwordError == true) && (confirmationPasswordError == true) && (ageError == true) && (agreementError == true)) { 
            window.location.href = "../html/index.html";
        } 
        else {
            alert("Failed to register");
            return false;
        } 
    }); 
})



    




