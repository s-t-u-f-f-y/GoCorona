
const iconMenu = document.querySelector('.menu__icon');
if(iconMenu){
    const menuBody = document.querySelector('.menu__list')
    iconMenu.addEventListener("click", function(e){
        document.body.classList.toggle('_lock')
        iconMenu.classList.toggle('_active')
        menuBody.classList.toggle('_active')
    });
}


document.addEventListener('mousemove', parallax);

function parallax(e){
    document.querySelectorAll('.decor',).forEach(function (move){

        const speedValue = move.getAttribute('data-value');

        let x = (e.clientX * speedValue / 100);
        let y = (e.clientY * speedValue / 75);

        move.style.transform = 'translateX(' + x + 'px) translateY(' + y + 'px)'

    });
}


const goTopBtn = document.querySelector(".go-top");

window.addEventListener("scroll", scrollEvent);
goTopBtn.addEventListener("click", goTop);

function scrollEvent(e){
    const scrolled = window.pageYOffset;

    const coords = document.documentElement.clientHeight;

    if (scrolled > coords) {
        // кнопка появляется
        goTopBtn.classList.add("_show");
      } else {
        // иначе исчезает
        goTopBtn.classList.remove("_show");
      }
}

function goTop() {
    if (window.pageYOffset > 0) {
      window.scrollBy(0, -25); 
      setTimeout(goTop, 0); 
    }
  }
