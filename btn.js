let Slide = document.querySelector('.slider');
let nightView = document.querySelector('.night');
let checkbox = document.querySelector('.switch input');
let dayView = document.querySelector('.day')
let text = document.querySelector('.text');
let Body = document.body;
let nightMode = () => {
    if (checkbox.checked) { 
        Body.classList.add('body-bg');
        text.classList.add('text-night');
        nightView.style.display = "block";
        dayView.style.display = "none";
        Slide.style.backgroundImage = "linear-gradient(to bottom right, #051c36 40%, #3d6ea2)";
        Slide.classList.add('night-mode');
    } else { 
        Body.classList.remove('body-bg');
        text.classList.remove('text-night')
        nightView.style.display = "none";
        dayView.style.display = "block";
        Slide.style.backgroundImage = "linear-gradient(to top left, #6595C7, #B2C3DF , #f1e7aa, #FBF391 )";
        Slide.classList.remove('night-mode');
    }
}


checkbox.addEventListener('change', nightMode);
