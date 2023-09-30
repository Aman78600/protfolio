// active home page menu
let menuIcon = document.querySelector(".menu-icon");

menuIcon.addEventListener("click", () => {
    menuIcon.classList.toggle("active");
})


// switch butten
const buttons = document.querySelectorAll(".about-btn button");
const contents = document.querySelectorAll(".content");
buttons.forEach((button, index) => {
    button.addEventListener("click", () => {
        contents.forEach(content => content.style.display = "none");
        contents[index].style.display = 'block';
        buttons.forEach(btn => btn.classList.remove("active"));
        button.classList.add('active')
    });
});


//portfolio fillter
var mixer = mixitup('.portfolio-gallery', {
    selectors: {
        target: '.portfolio-box'
    },
    animation: {
        duration: 300
    }
});

//skill progress bar