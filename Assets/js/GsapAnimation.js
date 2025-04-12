
gsap.registerPlugin(ScrollTrigger, TextPlugin);

const animateSlidTable = document.querySelectorAll('.animate')
animateSlidTable.forEach((element) => {
    gsap.fromTo(element,
        {
            y: 50,
            opacity: 0,
        },
        {
            y: 0,
            opacity: 1,
            scrollTrigger:{
                trigger: element,
                start: 'top center'
            }
        }
    )
})


gsap.fromTo('.animateText', 
    {
        text : '',
    },
    {
        text : 'Bienvenue à Brazzaville',
        duration: 2,
        ease: 'none'
    }

  );

  const titleElements = document.querySelectorAll('.animateTitle');

  titleElements.forEach(element => {
      const originalText = element.textContent;

      element.textContent = "";
      gsap.fromTo(element, 
          {
              text: ""
          },
          {
              duration: 3,
              text: originalText,
              ease: 'none',
              scrollTrigger: {
                  trigger: element, 
              }
          }
      );
  });


