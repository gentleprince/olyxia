// JS Components

// Bootstrap modification file
import toggler from './components/bs_bootstrap.js';
// Form Validations
import * as fun from './components/validation.js';
import {
    onloadanim,
    onpagescroll
} from './components/animation.js'


// for bootstrap hamburger
toggler.event;

// to validate all pop-up forms
fun.validate();

// animations
onpagescroll();

window.window.onload = () => {
    onloadanim.headerTitle;
    onloadanim.gallery;
}