// form validation for all popups


export function validate() {
    // signup form
    signup_form.onsubmit = () => {
        if (Signup_email.value == "") {
            Signup_email.focus();
            error_messages[0].innerHTML = "You cannot submit an empty email";
            Signup_email.classList.add('error_color');
            return false;
        } else if (!email_regex.test(Signup_email.value)) {
            Signup_email.focus();
            error_messages[0].innerHTML = "You have entered an invalid email address";
            Signup_email.classList.add('error_color');
            return false;
        } else {
            Signup_email.classList.remove('error_color');
            return true;
        }
    };

    // freetrial form
    Free_Trial_form.onsubmit = () => {
        // fullname
        if (Free_Trial_fullName.value == "") {
            Free_Trial_fullName.focus();
            error_messages[1].innerHTML = "Name field cannot be empty";
            Free_Trial_fullName.classList.add('error_color');
            return false;
        } else if (Free_Trial_fullName.value.length <= 3) {
            Free_Trial_fullName.focus();
            error_messages[1].innerHTML = 'Name field must be more than three character';
            Free_Trial_fullName.classList.add('error_color');
            return false;
        } else if (!fullname_alpha_regex.test(Free_Trial_fullName.value)) {
            Free_Trial_fullName.focus();
            error_messages[1].innerHTML = 'Only alphabetical characters are allowed';
            Free_Trial_fullName.classList.add('error_color');
            return false;
        } else if (Free_Trial_fullName.value.match(fullname_empty_regex)) {
            Free_Trial_fullName.focus();
            error_messages[1].innerHTML = 'Input cannot be empty';
            Free_Trial_fullName.classList.add('error_color');
            return false;
        }
        // email
        else if (Free_Trial_email.value == "") {
            Free_Trial_email.focus();
            error_messages[1].innerHTML = "You cannot submit an empty email";
            Free_Trial_fullName.classList.remove('error_color');
            Free_Trial_email.classList.add('error_color');
            return false;
        } else if (!Free_Trial_email.value.match(email_regex)) {
            Free_Trial_email.focus();
            error_messages[1].innerHTML = "You have entered an invalid email address";
            Free_Trial_fullName.classList.remove('error_color');
            Free_Trial_email.classList.add('error_color');
            return false;
        }
        // checkbox
        else if (checkbox.checked == false) {
            checkbox.focus();
            error_messages[1].innerHTML = "You must accept our terms and conditions if you wish to continue";
            Free_Trial_email.classList.remove('error_color');
            checkbox.classList.add('error_color');
            return false;
        } else {
            checkbox.classList.remove('error_color');
            return true;
        }
    };
}