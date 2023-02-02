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
        let clients_length = data.olyxia.clients.length;
        let clients = data.olyxia.clients;
        let employees = data.olyxia.employees;
        // to display olyxia clients/testimonial
        const client = clients.map(clt => {
            let testimonials = datas => `<div class="card-body bg-light card_width">
                        <div class="card-head"> 
                            <img src='${clt['avatar']}' alt="Customers' Avatar" class="d-inline-block align-text-top bg-danger avatar">
                            <div class="details">
                                <div class="card-title">${clt['name']}</div>
                                <div class="card-subtitle mb-2 text-muted">${clt['title']}</div>
                            </div>
                        </div>
                        <div class="card-text">${clt['testimony']}</div>
                    </div>`;
            testimonial.insertAdjacentHTML('beforeend', testimonials(data));
        });

        // to scroll testimonial
        const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
        let scroll_value = 0;
        const maxScroll = () => {
            scroll_value = scroll_value + 0;
            testimonial.scrollTo(scroll_value, 0);
        }
        /**
         * @param {number} rightScroll
         */
        const rightScroll = width => {
            // change to scrollBy
            scroll_value = scroll_value + width;
            testimonial.scrollTo({
                left: scroll_value,
                behavior: 'smooth'
            });
        }
        /**
         * @param {number} leftScroll
         */
        const leftScroll = width => {
            // change to scrollBy
            scroll_value = scroll_value - width;
            testimonial.scrollTo({
                left: scroll_value,
                behavior: 'smooth'
            });
        }
        const zeroScroll = () => {
            scroll_value = scroll_value + 0;
            testimonial.scrollTo(scroll_value, 0);
        }

        // phone view only
        if (viewportWidth < 768) {
            const testimonial_width = testimonial.getBoundingClientRect().width;
            // max_scroll=> take the width of the testimonial, multiply by
            // the difference of the length of the Json data and the amount to be displayed
            const max_scroll = testimonial_width * (clients_length - 1);
            // to the right
            right_arrow.onclick = () => {
                if (scroll_value >= max_scroll) {
                    maxScroll();
                } else {
                    rightScroll(testimonial_width);
                }
            }
            // to the left
            left_arrow.onclick = () => {
                if (scroll_value > 0) {
                    leftScroll(testimonial_width);
                } else {
                    zeroScroll();
                }
            }
        }
        // All other viewport- tablet, laptop & desktop
        else {
            const card_width = document.querySelector('.card_width').getBoundingClientRect().width;
            // max_scroll=> take the width of the card, multiply by
            // the difference of the length of the Json data and the amount to be moved
            const max_scroll = card_width * (clients_length - 1);
            // to the right
            right_arrow.onclick = () => {
                if (scroll_value >= max_scroll) {
                    maxScroll();
                } else {
                    rightScroll(card_width);
                }
            }
            // to the left
            left_arrow.onclick = () => {
                if (scroll_value > 0) {
                    leftScroll(card_width);
                } else {
                    zeroScroll();
                }
            }
        }


        // olyxia employee/team members
        btn_change.onclick = () => {
            // to show
            if (btn_change.classList.contains('show_team')) {
                const employee = employees.map(emp => {
                    let teams = datas => `<div class="box mx-auto my-5 state_change">
                    <div class="imgbox mt-2">
                        <img src="${emp.image}" alt="team" class="d-block mx-auto bg-warning">
                        <div class="details text-center bg-dark text-light mt-2 mx-auto">
                            <h6>${emp.name}</h6>
                            <p>${emp.position}</p>
                        </div>
                    </div>
                </div>`
                    team.insertAdjacentHTML("beforeend", teams(data));
                });
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
                    team.scrollIntoView({
                        behavior: "smooth",
                        block: "center"
                    });
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
    } else {
        Free_Trial_fullName.classList.remove('error_color');
        Free_Trial_email.classList.remove('error_color');
        return true;
    }
};

// Page animation
const howItWorks = document.querySelector('#workings');
const bwAnim = document.querySelector('.bw-call');

// how it works
window.onscroll = () => {
    function isInViewports(element) {
        let elem = element.getBoundingClientRect();
        return (
            elem.top >= 0 && elem.left >= 0 && elem.bottom <= (window.innerHeight || document.documentElement.clientHeight) && elem.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    if (isInViewports(howItWorks) == true) {
        bwAnim.classList.add('bw-anim');
    } else {
        bwAnim.classList.remove('bw-anim');
    }
}

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