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
const error_messages = document.querySelectorAll('.error_message');
const email_regex = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-]+)(\.[a-zA-Z]{2,5}){1,2}$/;
const fullname_empty_regex = /^\s*$/;
const fullname_alpha_regex = /^[a-zA-Z]+$/;
const checkbox = document.querySelector("#consent");

// html elements for json data
const testimonial = document.querySelector('.testimonial');
const team = document.querySelector('.team');
const btn_show_team = document.querySelector('.show_team');
const btn_change = document.querySelector('.btn_change');

const viewportWidth = window.innerWidth || document.documentElement.clientWidth;

// arrow to view more testimonials
const right_arrow = document.querySelector('.fa-arrow-right-long');
const left_arrow = document.querySelector('.fa-arrow-left-long');

// Page animation
// how it works
const animate_box = document.querySelector('.animate_box');
const howItWorks = document.querySelector('#workings');
const bwAnim = document.querySelector('.bw-call');
const max = document.querySelector('.max');
const imax = document.querySelector('.imax');

// homepage animation
const gallery = document.querySelector('.gallery');
const headerTitle = document.querySelector('.title');
const count = document.querySelector('.count')
const reviews = document.querySelector('.reviews');
const experience = document.querySelector('.experience');
const projects = document.querySelector('.projects');

// service animation
const service = document.querySelector('.service');
const service_area = document.querySelector('#service');

// about animation
const about = document.querySelector('.about');
const about_area = document.querySelector('#about');

// team animation
const team_member = document.querySelector('.team_member');
const team_area = document.querySelector('#team');

// testimonial animation
const WhatheySay = document.querySelector('.WhatheySay');

// popup animation
const popup_content = document.querySelectorAll('.popup_content');

// testimonial scroll
let clients_length;
let scroll_value = 0;


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
            popup_content.forEach(popup => {
                popup.classList.add('fadeOut');
                setTimeout(() => {
                    popup.classList.remove('fadeOut');
                    if (signup_popup.style.display === 'flex') {
                        signup_popup.style.display = 'none';
                    } else {
                        trial_popup.style.display = 'none';
                    }
                }, 800);
            });
        }
    }
});