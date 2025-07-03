var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      loop: true,
      autoplay: true,
      speed: 500,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints:{
        0:{
          slidesPerView: 1
        },
        450:{
          slidesPerView: 2
        },
        600:{
          slidesPerView: 3
        },
        800:{
          slidesPerView: 4
        }
      }
    });
 const track = document.getElementById('marqueeTrack');
  const content = document.getElementById('marqueeContent');

  // Clona o conteúdo até preencher mais que o dobro da largura da tela
  while (track.scrollWidth < window.innerWidth * 2) {
    const clone = content.cloneNode(true);
    track.appendChild(clone);
  }

  // Ajusta velocidade proporcional ao tamanho do conteúdo
  const totalWidth = track.scrollWidth;
  const speed = 100; // pixels por segundo
  const duration = totalWidth / speed;

  track.style.animationDuration = `${duration}s`;

  var swiper = new Swiper(".mySwiper1", {
      spaceBetween: 30,
      loop: true,
      autoplay: true,
      speed: 100,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      breakpoints:{
        0:{
          slidesPerView: 1.2
        },
        450:{
          slidesPerView: 2
        },
        600:{
          slidesPerView: 3
        },
        800:{
          slidesPerView: 4
        },
        1300:{
          slidesPerView: 5
        }
      }
    });
    var swiper = new Swiper(".mySwiper2", {
      loop:true,
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      spaceBetween: 30,
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
        },
        450:{
          slidesPerView: 2
        },
        600:{
          slidesPerView: 3,
        }
      }
    });

  document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
      const answer = button.nextElementSibling;

      if (answer.style.display === 'block') {
        answer.style.display = 'none';
      } else {
        answer.style.display = 'block';
      }
    });
  });


  // document.querySelectorAll('.faq-question').forEach(button => {
  //   button.addEventListener('click', () => {
  //     const answer = button.nextElementSibling;

  //     if (answer.style.display === 'block') {
  //       answer.style.display = 'none';
  //     } else {
  //       answer.style.display = 'block';
  //     }
  //   });
  // });

// var swiper = new Swiper(".mySwiper", {
//   watchSlidesProgress: true,
//   slidesPerView: 3,
//   autoplay: true,
//   spaceBetween: 50,
//   loop: true,
//   speed: 500,
//   breakpoints: {
//     0: {
//       slidesPerView: 1,
//     },
//     600:{
//         slidesPerView: 2
//     },
//     900:{
//         slidesPerView: 3
//     }
//   }
// });



// var swiper = new Swiper(".mySwiper1", {
//   watchSlidesProgress: true,
//   slidesPerView: 3,
//   autoplay: true,
//   spaceBetween: 30,
//   loop: true,
//   speed: 500,
//   // ADICIONE ISSO:
//   breakpoints: {
//     0: {
//       slidesPerView: 1,
//     },
//     400: { 
//       slidesPerView: 2,
//     },
//     800:{
//       slidesPerView:3
//     },
//     900: {
//         slidesPerView: 4
//     }
//   }
// });


// //   document.getElementById("year").textContent = new Date().getFullYear();