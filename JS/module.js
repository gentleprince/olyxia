//Importing JS Components

// Bootstrap modification file
import toggler from './components/bs_bootstrap.min.js';
// Form Validations
import * as func from './components/validation.min.js';
// All animations
import * as animations from './components/animation.min.js';
// Api data (json)
import * as data from './components/data.min.js';
// testimonial arrow scroll
import {
    testimonialScroll
} from './components/scroll.min.js';


// for bootstrap hamburger
toggler.event;

// to validate all pop-up forms
func.validate();

// animations
animations.default();

// when page is loaded
// if (window.location.href == 'http://127.0.0.1:5500/404.html') {
//     loaded();
//     async function loaded() {
//         let errorPageOnLoadAnims = await import('./components/animation404.min.js');
//         errorPageOnLoadAnims.default();
//     }
// } else {
window.window.onload = () => animations.onloadanim;
// }

// olyxia json data & testimonial scrolling
data.default(testimonialScroll);