// page animation
let updates = 0;
let anim = anime({
    targets: document.querySelector('.experience'),
    delay: 1000,
    easing: 'easeInOutCirc',
    update: function () {
        updates++;
        document.querySelector('.experience').value = `${updates}`;
    }
});
const onpagescroll = () => {
    if (viewportWidth > 768) {
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
                // } else { 
                //     bwAnim.classList.remove('bw-anim');
            }
        }
    }
}


export {
    anim,
    onpagescroll
}