window.addEventListener("load", function() {
        const audio = new Audio("assets/audio/barca.mp3");
        audio.volume = 0.2;
        audio.play();
    });

    var p_tags = document.getElementsByClassName("text-two");
    var p_titles = document.getElementsByClassName("text-one");
    var paragraph1 = "Join our community! Transfers, match previews, schedules, interviews and more regarding FC Barcelona, all in one place!";
    p_tags[0].innerHTML = paragraph1;
    p_titles[0].innerHTML = "Bar&ccedil;a, Bar&ccedil;a, Bar&ccedil;a!";

    document.getElementById("signupForm").addEventListener("submit", function (e) {
    e.preventDefault();

    let fname = document.getElementById("fname").value.trim();
    let lname = document.getElementById("lname").value.trim();
    let email = document.getElementById("email").value.trim();
    let pass = document.getElementById("pass").value;
    let gender = document.querySelector('input[name="gender-option"]:checked');
    let birthdate = document.getElementById("birthdate").value;
    let info = document.getElementById("info_p");

    let nameRegex = /^[A-Za-z]{2,}$/;
    let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    let passwordRegex = /^(?=.*[A-Z])(?=.*\d).{6,}$/;

    if (!nameRegex.test(fname)) {
    info.innerHTML = ("Invalid first name.");
    return;
    }

    if (!nameRegex.test(lname)) {
    info.innerHTML = ("Invalid last name.");
    return;
    }

    if (!emailRegex.test(email)) {
    info.innerHTML = ("Invalid email.");
    return;
    }

    if (!passwordRegex.test(pass)) {
    info.innerHTML = ("Password must be 6+ chars, include uppercase and number.");
    return;
    }

    if (!gender) {
    info.innerHTML = ("Please select a gender.");
    return;
    }

    if (!birthdate) {
    info.innerHTML = ("Please select your birthdate.");
    return;
    }

    info.innerHTML = ("Welcome, " + fname + " " + lname + "!");
    info.style.fontStyle = "italic";
});
