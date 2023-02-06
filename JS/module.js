// JS Components

// Bootstrap modification file
import toggler from './components/bs_bootstrap.js';
// Form Validations
import * as func from './components/validation.js';
// All animations
import {
    onloadanim,
    onpagescroll
} from './components/animation.js';
// Api data (json)
import * as data from './components/data.js';
// testimonial arrow scroll
import {
    testimonialScroll
} from './components/scroll.js';


// for bootstrap hamburger
toggler.event;

// to validate all pop-up forms
func.validate();

// animations
onpagescroll();

window.window.onload = () => {
    onloadanim;
}

// olyxia json data
data.default();

// testimonial scrolling
testimonialScroll();