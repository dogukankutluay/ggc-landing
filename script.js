document.addEventListener('DOMContentLoaded', function () {
  var header = document.querySelector('header');

  var menu = document.querySelector('#menu');
  var menu_button = document.querySelector('#menu-button');

  var button_login = document.querySelector('#button-login');
  var button_sign_up = document.querySelector('#button-sign-up');

  var last_scroll_top = 0;

  var logo_color = null;

  document
    .getElementById('s1-video')
    .classList.add('animate__animated', 'animate__fadeIn');
  document
    .getElementById('s1-left')
    .classList.add('animate__animated', 'animate__fadeInDown');
  document
    .getElementById('s1-coin')
    .classList.add('animate__animated', 'animate__fadeInUp');
  document
    .getElementById('s1-arrow')
    .classList.add('animate__animated', 'animate__fadeInBottomLeft');
  document.addEventListener('scroll', function () {
    var active_scroll_top = this.documentElement.scrollTop;

    if (last_scroll_top < active_scroll_top /*|| active_scroll_top < 100*/) {
      header.classList.remove('bg-black');
      header.classList.remove('dark');
      // document.querySelectorAll('#logo path').forEach(function (path) {
      //     logo_color = path.style.fill;

      //     path.style.fill = '#FEC267';
      // });

      menu_button.classList.add('-translate-y-24');
      button_login.classList.add('-translate-y-24');
      button_sign_up.classList.add('-translate-y-24');
      header.classList.remove('animate__animated', 'animate__fadeInDown');
    } else {
      header.classList.add('bg-black');
      header.classList.add('dark');
      header.classList.add('animate__animated', 'animate__fadeInDown');
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

    //animations
    handleAnimations(active_scroll_top);
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
        end: 'bottom center',
        toggleActions: 'play pause resume reverse',
        scrub: true,
      },
      opacity: 0,
      y: '+1',
      display: 'none',
    });

    gsap.to('#s-1 .scroll', {
      scrollTrigger: {
        trigger: '#s-1',
        // markers: true,
        start: '10% top',
        end: 'bottom center',
        toggleActions: 'play pause resume reverse',
      },
      opacity: 0,
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

    gsap
      .timeline({
        scrollTrigger: {
          trigger: '#s-2',
          // markers: true,
          start: 'top top',
          toggleActions: 'play pause resume reverse',
          scrub: 1,
          pin: 'main',
          pinSpacing: false,
        },
      })
      .to('#point-1 > path', { fill: '#FEC267' })
      .to('#point-2 > path', { fill: '#FEC267' })
      .to('#progress', { height: '+=25%' }, '<')
      .to('#pointer', { top: '+=25%' }, '<')
      .to('#text-1', {
        display: 'none',
        opacity: 0,
        y: '-20',
      })
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
      .to('.point', { background: '#FEC267' }, '<');
    // .to('#s-2', { background: '#020202' }, '<')

    gsap.to('#wheel-1 > div', {
      xPercent: '+100',
      duration: 10,
      ease: 'none',
      repeat: -1,
    });

    gsap.to('#wheel-2 > div', {
      xPercent: '+100',
      duration: 10,
      ease: 'none',
      repeat: -1,
    });
    //   gsap.to('#wheel-3 > img', {
    //     yPercent: '+500',
    //     duration: 5,
    //     ease: 'none',
    //     repeat: -1,
    //   });
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

//handling loading screen
// window.addEventListener('load', function () {
//   // document.getElementById('page').classList.remove('hidden');
//   document.getElementById('loading').classList.add('hidden');
// });

//handling animations

function handleAnimations(active_scroll_top) {
  const offset = active_scroll_top + 170;
  //sections
  const s1 = document.getElementById('s-1').offsetTop;
  const s2 = (document.elemRect = document
    .getElementById('s-2')
    .getBoundingClientRect()).height;
  const s3 = document.getElementById('s-3').getBoundingClientRect().height;
  const s4 = document.getElementById('s-4').offsetTop;
  const s5 = document.getElementById('s-5').offsetTop;
  const s6 = document.getElementById('s-6').offsetTop;
  const s7 = document.getElementById('s-7').offsetTop;
  //gsap texts
  const text1 = document
    .getElementById('text-1')
    .getBoundingClientRect().height;
  const text2 = document
    .getElementById('text-2')
    .getBoundingClientRect().height;
  const text3 = document
    .getElementById('text-3')
    .getBoundingClientRect().height;
  const text4 = document
    .getElementById('text-4')
    .getBoundingClientRect().height;
  //text 1 animations
  if (text1 > 0 && offset > text1) {
    document
      .getElementById('text-1')
      .classList.add('animate__animated', 'animate__fadeInUp');
    document
      .getElementById('text-1-right')
      .classList.add('animate__animated', 'animate__fadeInRight');
  } else {
    document
      .getElementById('text-1-right')
      .classList.remove('animate__animated', 'animate__fadeInRight');
    document
      .getElementById('text-1')
      .classList.add('animate__animated', 'animate__fadeInUp');
  }
  //text-2 animations
  if (text2 > 0) {
    document
      .getElementById('text-2')
      .classList.add('animate__animated', 'animate__fadeInUp');
    document
      .getElementById('text-2-right')
      .classList.add('animate__animated', 'animate__fadeInRight');
  } else {
    document
      .getElementById('text-2')
      .classList.remove('animate__animated', 'animate__fadeInUp');
    document
      .getElementById('text-2-right')
      .classList.remove('animate__animated', 'animate__fadeInRight');
  }
  //text-3 animations
  if (text3 > 0) {
    document
      .getElementById('text-3')
      .classList.add('animate__animated', 'animate__fadeInUp');
    document
      .getElementById('text-3-right')
      .classList.add('animate__animated', 'animate__fadeInRight');
  } else {
    document
      .getElementById('text-3')
      .classList.remove('animate__animated', 'animate__fadeInUp');
    document
      .getElementById('text-3-right')
      .classList.remove('animate__animated', 'animate__fadeInRight');
  }
  //text-4 animations
  if (text4 > 0) {
    document
      .getElementById('text-4')
      .classList.add('animate__animated', 'animate__fadeInUp');
    document
      .getElementById('text-4-right')
      .classList.add('animate__animated', 'animate__fadeInRight');
  } else {
    document
      .getElementById('text-4')
      .classList.remove('animate__animated', 'animate__fadeInUp');
    document
      .getElementById('text-4-right')
      .classList.remove('animate__animated', 'animate__fadeInRight');
  }
  //section animations
  const footer = document.getElementById('footer').offsetTop;
  //section 1
  if (offset >= s1 && offset < s2) {
    let outs = document.getElementsByClassName('s1-out');
    let outRights = document.getElementsByClassName('s1-out-right');
    for (let index = 0; index < outs.length; index++) {
      outs[index].classList.add('animate__animated', 'animate__fadeOut');
    }
    for (let index = 0; index < outRights.length; index++) {
      outRights[index].classList.add(
        'animate__animated',
        'animate__fadeOutRight'
      );
    }
  }
  //section 3
  if (offset + 100 >= s3 && offset < s4) {
    document
      .getElementById('progressbar')
      .classList.add('animate__animated', 'animate__fadeInLeft');
    let elements = document.getElementsByClassName('box');
    for (var i = 0; i < elements.length; i++) {
      elements[i].classList.add('animate__animated', 'animate__fadeInLeft');
    }
    document
      .getElementById('pointer-container')
      .classList.add('animate__animated', 'animate__fadeInDown');
  }
  //section 4
  if (offset >= s4 && offset < s5) {
  }
  //section 6
  if (offset >= s6 && offset < s7) {
    const elements = document.getElementsByClassName('s6-content');
    for (var i = 0; i < elements.length; i++) {
      elements[i].classList.add('animate__animated', 'animate__fadeInUp');
    }
  }
  //footer
  if (offset + 600 > footer) {
    document
      .getElementById('footer-content')
      .classList.add('animate__animated', 'animate__fadeInUp');
    header.classList.add('dark');
  }
}
