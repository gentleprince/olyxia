// to scroll testimonial
/**
 * @param {number} rightScroll
 */
const rightScroll = width => {
    testimonial.scrollBy({
        left: width,
        behavior: 'smooth'
    });
}
/**
 * @param {number} leftScroll
 */
const leftScroll = width => {
    testimonial.scrollBy({
        left: -(width),
        behavior: 'smooth'
    });
}


const scrollable = () => {
    // could use left on getBoundingClientRect()
    const card_width = document.querySelector('.card_width').getBoundingClientRect().width;

    // to the right
    right_arrow.onclick = () => {
        rightScroll(card_width);
    }
    // to the left
    left_arrow.onclick = () => {
        leftScroll(card_width);
    }
}

export {
    scrollable as testimonialScroll
}