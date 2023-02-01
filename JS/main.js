// Bootstrap modification file
// import toggler from './bs.js';

//  signup pop-up
const signup_popup = document.querySelector('.signup_popup');

// freetrial pop-up
const trial_popup = document.querySelector('.trial_popup');

// freetrial pop-up
const btn_free_trial = document.querySelector('.btn_free_trial');

// the close button on the popup
const close_button = document.querySelectorAll('.cancel');

// form validation
const signup_form = document.SignupPopupForm;
const Free_Trial_form = document.FTPopupForm;
const Signup_email = document.SignupPopupForm.emails;
const Free_Trial_email = document.FTPopupForm.emails;
const Free_Trial_fullName = document.FTPopupForm.fullname;
const error_message = document.querySelector('.error_message');
const email_regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$/;
const fullname_empty_regex = /^\s*$/;
const fullname_alpha_regex = /^[a-zA-Z]+$/;

// html elements for json data
const testimonial = document.querySelector('.testimonial');
const team = document.querySelector('.team');
const btn_show_team = document.querySelector('.show_team');
const btn_change = document.querySelector('.btn_change');

// arrow to view more testimonials
const right_arrow = document.querySelector('.fa-arrow-right-long');
const left_arrow = document.querySelector('.fa-arrow-left-long');

// to display popups
document.addEventListener('DOMContentLoaded', () => {
    // to ensure all elements are properly loaded before display
    window.onload = () => {
        // to display signup popup
        setTimeout(() => {
            signup_popup.style.display = 'flex';
            Signup_email.focus();
        }, 2000);

        // to trigger free trial form
        btn_free_trial.onclick = () => {
            trial_popup.style.display = 'flex';
            Free_Trial_fullName.focus();
        }
    }

    // to close popup after toggling
    for (button of close_button) {
        button.onclick = () => {
            if (signup_popup.style.display === 'flex')
                signup_popup.style.display = 'none';
            else
                trial_popup.style.display = 'none';
        }
    }

    // to fetch and display json data
    olyxia();

    async function olyxia() {
        // url
        const url = 'http://127.0.0.1:5500/olyxia.json'
        // fetch option
        const headers_option = {
            headers: {
                'Access-Control-Allow-Origin': '*',
            }
        }
        const response = await fetch(url, headers_option);
        const data = await response.json();
        // length of Json object gotten from api
        let employees_length = data.olyxia.employees.length;
        let clients_length = data.olyxia.clients.length;

        // olyxia clients/testimonial
        for (i = 0; i < clients_length; i++) {
            let testimonials = datas => `<div class="card-body bg-light">
                        <div class="card-head"> 
                            <img src='${datas.olyxia.clients[i]['avatar']}' alt="Customers' Avatar" class="d-inline-block align-text-top bg-danger avatar">
                            <div class="details">
                                <div class="card-title">${datas.olyxia.clients[i]['name']}</div>
                                <div class="card-subtitle mb-2 text-muted">${datas.olyxia.clients[i]['title']}</div>
                            </div>
                        </div>
                        <div class="card-text">${datas.olyxia.clients[i]['testimony']}</div>
                    </div>`;
            testimonial.insertAdjacentHTML('beforeend', testimonials(data));
        }

        // const client = clients.map((client) => {
        //     avatar.innerHTML = client.avatar;
        //     card_title.innerHTML = client.name;
        //     card_subtitle.innerHTML = client.title;
        //     card_text.innerHTML = client.testimony;
        // });

        // to scroll testimonial
        let scroll_value = 0;
        const max_scroll = 350 * (clients_length - 3);
        // to the right
        right_arrow.onclick = () => {
            if (scroll_value >= max_scroll) {
                scroll_value = scroll_value + 0;
                testimonial.scrollTo(scroll_value, 0);
            } else {
                scroll_value = scroll_value + 350;
                testimonial.scrollTo({
                    left: scroll_value,
                    behavior: 'smooth'
                });
            }
        }
        // to the left
        left_arrow.onclick = () => {
            if (scroll_value > 0) {
                scroll_value = scroll_value - 350
                testimonial.scrollTo({
                    left: scroll_value,
                    behavior: 'smooth'
                });
            } else {
                scroll_value = scroll_value + 0;
                testimonial.scrollTo(scroll_value, 0);
            }
        }

        // olyxia employee/team members
        btn_change.onclick = () => {
            // to show
            if (btn_change.classList.contains('show_team')) {
                for (i = 0; i < employees_length; i++) {
                    let teams = datas => `<div class="box mx-auto my-5 state_change">
                    <div class="imgbox mt-2">
                        <img src="${datas.olyxia.employees[i]['image']}" alt="team" class="d-block mx-auto bg-warning">
                        <div class="details text-center bg-dark text-light mt-2 mx-auto">
                            <h6>${datas.olyxia.employees[i]['name']}</h6>
                            <p>${datas.olyxia.employees[i]['position']}</p>
                        </div>
                    </div>
                </div>`
                    team.insertAdjacentHTML("beforeend", teams(data));
                }
                btn_show_team.innerHTML = 'Close';
                btn_change.classList.replace('show_team', 'close_team');
            }
            // to close 
            else {
                const state_change = document.querySelectorAll('.state_change');
                for (state of state_change) {
                    team.removeChild(state);
                    btn_change.innerHTML = 'See All Team';
                    btn_change.classList.replace('close_team', 'show_team');
                }
            }
        }
    }
});

// form validation for all popups

// signup form
signup_form.onsubmit = () => {
    if (Signup_email.value == "") {
        Signup_email.focus();
        error_message.innerHTML = "You cannot submit an empty email";
        Signup_email.classList.add('error_color');
        return false;
    } else if (!email_regex.test(Signup_email.value)) {
        Signup_email.focus();
        error_message.innerHTML = "You have entered an invalid email address";
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
        error_message.innerHTML = "Name field cannot be empty";
        Free_Trial_fullName.classList.add('error_color');
        return false;
    } else if (Free_Trial_fullName.value.length <= 3) {
        Free_Trial_fullName.focus();
        error_message.innerHTML = 'Name field must be more than two character';
        Free_Trial_fullName.classList.add('error_color');
        return false;
    } else if (!fullname_alpha_regex.test(fullName.value)) {
        Free_Trial_fullName.focus();
        error_message.innerHTML = `Only alphabetical characters are allowed`;
        Free_Trial_fullName.classList.add('error_color');
        return false;
    } else if (fullName.value.match(fullname_empty_regex)) {
        Free_Trial_fullName.focus();
        error_message.innerHTML = `Input cannot be empty`;
        Free_Trial_fullName.classList.add('error_color');
        return false;
    }
    // email
    else if (Free_Trial_email.value == "") {
        Free_Trial_email.focus();
        error_message.innerHTML = "You cannot submit an empty email";
        Free_Trial_email.classList.add('error_color');
        return false;
    } else if (!Free_Trial_email.value.match(email_regex)) {
        Free_Trial_email.focus();
        error_message.innerHTML = "You have entered an invalid email address";
        Free_Trial_email.classList.add('error_color');
        return false;
        // } else {
        //     Free_Trial_fullName.classList.remove('error_color');
        //     Free_Trial_email.classList.remove('error_color');
        //     return true;
    }
};



// for bs hamburger(bs.js)

// toggle button
const navbar_button_changer = document.querySelector('.navbar-button-changer');

// links checker
const inspector = document.querySelector('.inspector');

// toggle button icon 
const toggle_changer = document.querySelector('.toggle-changer');

// bs phone hamburger
navbar_button_changer.addEventListener('click', () => {
    if (inspector.classList.contains('navbar-open') === true) {
        inspector.classList.replace('navbar-open', 'navbar-close');
        toggle_changer.classList.replace("navbar-toggler-icon", "fa-solid");
        toggle_changer.classList.add('fa-xmark');
    } else {
        inspector.classList.replace('navbar-close', 'navbar-open');
        toggle_changer.classList.replace("fa-solid", "navbar-toggler-icon");
        toggle_changer.classList.remove('fa-xmark');
    }
})

// toggler();