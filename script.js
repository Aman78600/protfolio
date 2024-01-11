/* Open the sidenav */
function openNav() {

    document.getElementById("mySidenav").style.width = "100%";
    document.getElementById("right_home").style.display = "flex";
    // document.getElementById("menu-icon").style.display = "none";
}

/* Close/hide the sidenav */
function closeNav() {

    document.getElementById("mySidenav").style.width = "0";

    // document.getElementById("menu-icon").style.display = "block";

}

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

function submitForm() {
    // validate form fields
    const FirstName = document.getElementById('FirstName').value;
    const LastName = document.getElementById('LastName').value;
    const canteenNumber = document.getElementById('canteenNumber').value;
    const canteenSubject = document.getElementById('canteenSubject').value;
    const canteenText = document.getElementById('canteenText').value;
    if (FirstName && LastName && canteenNumber && canteenSubject && canteenText) {
        const mailtoLink = `mailto:amanshha960@gmail.com?subject=${canteenSubject} &body=Name: ${FirstName}${LastName} %0D%0ANumber: ${canteenNumber}%0D%0A ${canteenText}`;
        window.location.href = mailtoLink;
        alert('Please fill in all felds.');
    }
}