// page animation

// onload
const onloadanim = {
    'gallery': gallery.classList.add('sideln_bounceright'),
    'headerTitle': headerTitle.classList.add('sideln_bounceleft')
}

// when scrolling
export default window.onscroll = () => {
    // to check if its within the viewport
    function isInViewports(element) {
        let elem = element.getBoundingClientRect();
        return (
            elem.top >= 0 && elem.left >= 0 && elem.bottom <= (window.innerHeight || document.documentElement.clientHeight) && elem.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    // for all viewports
    // heading count animation(animejs)
    if (isInViewports(count) == true) {
        let counting = {
            reviews: '0',
            experience: '0',
            projects: '0'
        }

        anime({
            targets: counting,
            reviews: '10k+',
            experience: '08+',
            projects: '300+',
            round: 1,
            easing: 'linear',
            update: function () {
                reviews.innerHTML = counting.reviews;
                experience.innerHTML = counting.experience;
                projects.innerHTML = counting.projects;
            }
        });
    }

    // Service Animation
    if (isInViewports(service_area) == true) {
        service.classList.add('sidelnleft');
    }

    // About Animation
    if (isInViewports(about_area) == true) {
        about.classList.add('sidelnright');
    }

    // how it works animation
    if (isInViewports(howItWorks) == true) {
        max.classList.add('sidelnleft');
    }

    // Team Animation
    if (isInViewports(team_area) == true) {
        team_member.classList.add('sidelnright');
    }
    if (isInViewports(team_member) == true) {
        team.classList.add('sidelnup');
    }

    // Testimonial Animation
    if (isInViewports(WhatheySay) == true) {
        testimonial.classList.add('fadeIn');
    }


    // All viewport except phone
    if (viewportWidth > 768) {
        // how it works animations (vanilla js)
        if (isInViewports(howItWorks) == true) {
            imax.classList.add('sidelnright');
        }
        setTimeout(() => {
            if (isInViewports(animate_box) == true) {
                bwAnim.classList.add('bw-anim');
            }
        }, 1000);
    } else {
        if (isInViewports(max) == true) {
            imax.classList.add('sidelnright');
        }
    }
}


export {
    onloadanim
}