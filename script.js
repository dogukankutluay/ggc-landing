document.addEventListener('DOMContentLoaded', function () {
    var header = document.querySelector('header');

    var menu = document.querySelector('#menu');
    var menu_button = document.querySelector('#menu-button');

    var button_login = document.querySelector('#button-login');
    var button_sign_up = document.querySelector('#button-sign-up');

    var last_scroll_top = 0;

    var logo_color = null;

    document.addEventListener('scroll', function () {
        var active_scroll_top = this.documentElement.scrollTop;

        if (last_scroll_top < active_scroll_top || active_scroll_top < 100) {
            header.classList.remove('bg-black');
            header.classList.remove('dark');

            // document.querySelectorAll('#logo path').forEach(function (path) {
            //     logo_color = path.style.fill;

            //     path.style.fill = '#FEC267';
            // });


            menu_button.classList.add('-translate-y-24');
            button_login.classList.add('-translate-y-24');
            button_sign_up.classList.add('-translate-y-24');
        } else {
            header.classList.add('bg-black');
            header.classList.add('dark');

            // document.querySelectorAll('#logo path').forEach(function (path) {
            //     if (logo_color) {
            //         path.style.fill = logo_color;

            //         return;
            //     }

            //     path.style.fill = null;
            // });


            menu_button.classList.remove('-translate-y-24');
            button_login.classList.remove('-translate-y-24');
            button_sign_up.classList.remove('-translate-y-24');
        }

        last_scroll_top = active_scroll_top;
    });

    menu_button.addEventListener('click', function (event) {
        console.log(event);

        menu.classList.toggle('hidden');
        menu_button.classList.toggle('rotate-180');
    });

    if (window.innerWidth >= 1280) {
        gsap.registerPlugin(ScrollTrigger);

        gsap.to('#right-square', {
            scrollTrigger: {
                trigger: '#s-1',
                // markers: true,
                start: '10% top',
                end: "bottom center",
                toggleActions: 'play pause resume reverse',
                scrub: true,
            },
            opacity: 0,
            y: '+1',
            display: 'none'
        });

        gsap.to('#s-1 .scroll', {
            scrollTrigger: {
                trigger: '#s-1',
                // markers: true,
                start: '10% top',
                end: "bottom center",
                toggleActions: 'play pause resume reverse',
            },
            opacity: 0
        });

        gsap.to('#logo path', {
            scrollTrigger: {
                trigger: '#s-2',
                // markers: true,
                start: 'top top',
                toggleActions: 'play pause resume reverse',
            },
            fill: '#1C1C1C',
        });

        gsap.timeline({
            scrollTrigger: {
                trigger: '#s-2',
                // markers: true,
                start: "top top",
                toggleActions: 'play pause resume reverse',
                scrub: 1,
                pin: 'main',
                pinSpacing: false
            }
        })
            // .to('#point-1 > path', { fill: '#FEC267' })
            .to('#point-2 > path', { fill: '#FEC267' })
            .to('#progress', { height: '+=25%' }, '<')
            .to('#pointer', { top: '+=25%' }, '<')
            .to('#text-1', { display: 'none', opacity: 0, y: '-20' })
            .to('#text-2', { display: 'flex', opacity: 1, y: '-20' })
            .to('#point-3 > path', { fill: '#FEC267' })
            .to('#progress', { height: '+=25%' }, '<')
            .to('#pointer', { top: '+=25%' }, '<')
            .to('#text-2', { display: 'none', opacity: 0, y: '-20' })
            .to('#text-3', { display: 'flex', opacity: 1, y: '-20' })
            .to('#point-4 > path', { fill: '#FEC267' })
            .to('#progress', { height: '+=25%' }, '<')
            .to('#pointer', { top: '+=25%' }, '<')
            .to('#text-3', { display: 'none', opacity: 0, y: '-20' })
            .to('#text-4', { display: 'flex', opacity: 1, y: '-20' })
            .to('#point-5 > path', { fill: '#FEC267' })
            .to('#progress', { height: '+=25%' }, '<')
            .to('#pointer', { top: '+=25%' }, '<')
            .to('#s-3', { yPercent: '-100' }, '<')
            .to('.point', { background: '#FEC267' }, '<')
            // .to('#s-2', { background: '#020202' }, '<')
            ;

        // gsap.to('#wheel-1 > div', {
        //     // repeat: -1,
        //     xPercent: '+100',
        //     duration: 5,
        //     // modifiers: {
        //     //     xPercent: gsap.utils.unitize(function (xPercent) {
        //     //         console.log(xPercent);
        //     //         return xPercent % 100;
        //     //     })
        //     // },
        //     ease: 'none'
        // });
    }

    var faq_buttons = document.querySelectorAll('#faq button');

    faq_buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            faq_buttons.forEach(function (button) {
                button.querySelector('.yellow-line').classList.add('after:hidden');
            });

            this.querySelector('.yellow-line').classList.remove('after:hidden');
        });
    });
});