// to scroll testimonial

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

const scrollable = () => {
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
}

export {
    scrollable as testimonialScroll
}