// page animation


const onpagescroll = () => {
    if (viewportWidth > 768) {
        // when scrolling
        window.onscroll = () => {
            // to check if its within the viewport
            function isInViewports(element) {
                let elem = element.getBoundingClientRect();
                return (
                    elem.top >= 0 && elem.left >= 0 && elem.bottom <= (window.innerHeight || document.documentElement.clientHeight) && elem.right <= (window.innerWidth || document.documentElement.clientWidth)
                );
            }

            // how it works animations (vanilla js)
            if (isInViewports(howItWorks) == true) {
                bwAnim.classList.add('bw-anim');
                // } else { 
                //     bwAnim.classList.remove('bw-anim');
            }

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

            // About Animation
            if (isInViewports(service) == true) {
                service.classList.add('service_anim');
            }

            // About Animation
            if (isInViewports(about) == true) {
                about.classList.add('about_anim');
            }
        }
    }
}

// homepage animation
const onloadanim = {
    'gallery': gallery.classList.add('sideln_bounceright'),
    'headerTitle': headerTitle.classList.add('sideln_bounceleft')
}


export {
    onloadanim,
    onpagescroll
}