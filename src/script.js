

document.addEventListener("DOMContentLoaded", function () {
    gsap.registerPlugin(ScrollTrigger);

    gsap.to('.side', {
        scrollTrigger: {
            trigger: '#s-1',
            markers: true,
            start: '10% top',
            end: "bottom center",
            toggleActions: 'play pause resume reverse',
            scrub: true,
        },
        opacity: 0,
        y: '+1'
    });

    gsap.to('#s-1 .scroll', {
        scrollTrigger: {
            trigger: '#s-1',
            markers: true,
            start: '10% top',
            end: "bottom center",
            toggleActions: 'play pause resume reverse',
        },
        opacity: 0
    });

    gsap.to('#logo path', {
        scrollTrigger: {
            trigger: '#s-2',
            markers: true,
            start: 'top top',
            toggleActions: 'play pause resume reverse',
        },
        fill: '#1C1C1C',
    });

    gsap.timeline({
        scrollTrigger: {
            trigger: '#s-2',
            markers: true,
            start: "top top",
            toggleActions: 'play pause resume reverse',
            scrub: 1,
            pin: true
        }
    })
        // .to('#point-1 > path', { fill: '#FEC267' })
        .to('#point-2 > path', { fill: '#FEC267' })
        .to('#progress', { height: '25%' }, '<')
        .to('#pointer', { top: '+=25%' }, '<')
        .to('#text-1', { display: 'none', opacity: 0, y: '-20' })
        .to('#text-2', { display: 'block', opacity: 1, y: '-20' })
        .to('#point-3 > path', { fill: '#FEC267' })
        .to('#progress', { height: '50%' }, '<')
        .to('#pointer', { top: '+=25%' }, '<')
        .to('#text-2', { display: 'none', opacity: 0, y: '-20' })
        .to('#text-3', { display: 'block', opacity: 1, y: '-20' })
        .to('#point-4 > path', { fill: '#FEC267' })
        .to('#progress', { height: '75%' }, '<')
        .to('#pointer', { top: '+=25%' }, '<')
        .to('#text-3', { display: 'none', opacity: 0, y: '-20' })
        .to('#text-4', { display: 'block', opacity: 1, y: '-20' })
        .to('#point-5 > path', { fill: '#FEC267' })
        .to('#progress', { height: '100%' }, '<')
        .to('#pointer', { top: '+=25%' }, '<')
        ;

});