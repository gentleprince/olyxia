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
                }, 1200);
            });
        }
    }
});




// // to fetch and display json data
// olyxia();

// async function olyxia() {
//     // url
//     const url = 'http://127.0.0.1:5500/olyxia.min.json'
//     // fetch option
//     const headers_option = {
//         headers: {
//             'Access-Control-Allow-Origin': '*',
//         }
//     }
//     const response = await fetch(url, headers_option);
//     const data = await response.json();
//     // length of Json object gotten from api
//     let clients_length = data.olyxia.clients.length;
//     let clients = data.olyxia.clients;
//     let employees = data.olyxia.employees;
//     // to display olyxia clients/testimonial
//     const client = clients.map(clt => {
//         let testimonials = datas => `<div class="card-body bg-light card_width">
//                         <div class="card-head"> 
//                             <img src='${clt['avatar']}' alt="Customers' Avatar" class="d-inline-block align-text-top bg-danger avatar">
//                             <div class="details">
//                                 <div class="card-title">${clt['name']}</div>
//                                 <div class="card-subtitle mb-2 text-muted">${clt['title']}</div>
//                             </div>
//                         </div>
//                         <div class="card-text">${clt['testimony']}</div>
//                     </div>`;
//         testimonial.insertAdjacentHTML('beforeend', testimonials(data));
//     });


//     // olyxia employee/team members
//     btn_change.onclick = () => {
//         // to show
//         if (btn_change.classList.contains('show_team')) {
//             const employee = employees.map(emp => {
//                 let teams = datas => `<div class="box mx-auto my-5 state_change">
//                     <div class="imgbox mt-2">
//                         <img src="${emp.image}" alt="team" class="d-block mx-auto bg-warning">
//                         <div class="details text-center bg-dark text-light mt-2 mx-auto">
//                             <h6>${emp.name}</h6>
//                             <p>${emp.position}</p>
//                         </div>
//                     </div>
//                 </div>`
//                 team.insertAdjacentHTML("beforeend", teams(data));
//             });
//             btn_show_team.innerHTML = 'Close';
//             btn_change.classList.replace('show_team', 'close_team');
//         }
//         // to close 
//         else {
//             const state_change = document.querySelectorAll('.state_change');
//             for (state of state_change) {
//                 team.removeChild(state);
//                 btn_change.innerHTML = 'See All Team';
//                 btn_change.classList.replace('close_team', 'show_team');
//                 team.scrollIntoView({
//                     behavior: "smooth",
//                     block: "center"
//                 });
//             }
//         }
//     }


//     // to scroll testimonial
//     let scroll_value = 0;
//     const maxScroll = () => {
//         scroll_value = scroll_value + 0;
//         testimonial.scrollTo(scroll_value, 0);
//     }
//     /**
//      * @param {number} rightScroll
//      */
//     const rightScroll = width => {
//         // change to scrollBy
//         scroll_value = scroll_value + width;
//         testimonial.scrollTo({
//             left: scroll_value,
//             behavior: 'smooth'
//         });
//     }
//     /**
//      * @param {number} leftScroll
//      */
//     const leftScroll = width => {
//         // change to scrollBy
//         scroll_value = scroll_value - width;
//         testimonial.scrollTo({
//             left: scroll_value,
//             behavior: 'smooth'
//         });
//     }
//     const zeroScroll = () => {
//         scroll_value = scroll_value + 0;
//         testimonial.scrollTo(scroll_value, 0);
//     }

//     // phone view only
//     if (viewportWidth < 768) {
//         const testimonial_width = testimonial.getBoundingClientRect().width;
//         // max_scroll=> take the width of the testimonial, multiply by
//         // the difference of the length of the Json data and the amount to be displayed
//         const max_scroll = testimonial_width * (clients_length - 1);
//         // to the right
//         right_arrow.onclick = () => {
//             if (scroll_value >= max_scroll) {
//                 maxScroll();
//             } else {
//                 rightScroll(testimonial_width);
//             }
//         }
//         // to the left
//         left_arrow.onclick = () => {
//             if (scroll_value > 0) {
//                 leftScroll(testimonial_width);
//             } else {
//                 zeroScroll();
//             }
//         }
//     }
//     // All other viewport- tablet, laptop & desktop
//     else {
//         const card_width = document.querySelector('.card_width').getBoundingClientRect().width;
//         // max_scroll=> take the width of the card, multiply by
//         // the difference of the length of the Json data and the amount to be moved
//         const max_scroll = card_width * (clients_length - 1);
//         // to the right
//         right_arrow.onclick = () => {
//             if (scroll_value >= max_scroll) {
//                 maxScroll();
//             } else {
//                 rightScroll(card_width);
//             }
//         }
//         // to the left
//         left_arrow.onclick = () => {
//             if (scroll_value > 0) {
//                 leftScroll(card_width);
//             } else {
//                 zeroScroll();
//             }
//         }
//     }
// }