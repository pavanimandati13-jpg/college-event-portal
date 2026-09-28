/* =========================
   MOBILE MENU
========================= */

function toggleMenu() {

    const nav = document.getElementById("navMenu");

    nav.classList.toggle("active");

}


/* =========================
   EVENT SELECTION
========================= */

function selectEvent(eventName) {

    // Find event dropdown
    const eventDropdown = document.getElementById("event");

    // Select the event
    eventDropdown.value = eventName;

    // Scroll to registration form
    document.getElementById("register").scrollIntoView({
        behavior: "smooth"
    });

}


/* =========================
   REGISTRATION FORM
========================= */

const registrationForm =
    document.getElementById("registrationForm");


registrationForm.addEventListener("submit", function(event) {

    // Prevent page refresh
    event.preventDefault();


    // Get values from form
    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const phone =
        document.getElementById("phone").value.trim();

    const department =
        document.getElementById("department").value;

    const selectedEvent =
        document.getElementById("event").value;

    const message =
        document.getElementById("formMessage");


    /* =========================
       VALIDATION
    ========================= */

    if (name === "") {

        showMessage(
            message,
            "Please enter your name.",
            "red"
        );

        return;
    }


    if (email === "") {

        showMessage(
            message,
            "Please enter your email.",
            "red"
        );

        return;
    }


    if (!validateEmail(email)) {

        showMessage(
            message,
            "Please enter a valid email address.",
            "red"
        );

        return;
    }


    if (phone === "") {

        showMessage(
            message,
            "Please enter your phone number.",
            "red"
        );

        return;
    }


    if (phone.length < 10) {

        showMessage(
            message,
            "Phone number must contain at least 10 digits.",
            "red"
        );

        return;
    }


    if (department === "") {

        showMessage(
            message,
            "Please select your department.",
            "red"
        );

        return;
    }


    if (selectedEvent === "") {

        showMessage(
            message,
            "Please select an event.",
            "red"
        );

        return;
    }


    /* =========================
       SUCCESS
    ========================= */

    showMessage(
        message,
        "Registration successful! 🎉",
        "green"
    );


    // Display registration in console
    console.log("Registration Details:");

    console.log("Name:", name);
    console.log("Email:", email);
    console.log("Phone:", phone);
    console.log("Department:", department);
    console.log("Event:", selectedEvent);


    // Reset form
    registrationForm.reset();

});


/* =========================
   EMAIL VALIDATION
========================= */

function validateEmail(email) {

    const emailPattern =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return emailPattern.test(email);

}


/* =========================
   DISPLAY MESSAGE
========================= */

function showMessage(element, text, color) {

    element.textContent = text;

    element.style.color = color;

}


/* =========================
   CONTACT FORM
========================= */

const contactForm =
    document.getElementById("contactForm");


contactForm.addEventListener("submit", function(event) {

    event.preventDefault();


    const name =
        document.getElementById("contactName").value.trim();

    const email =
        document.getElementById("contactEmail").value.trim();

    const userMessage =
        document.getElementById("contactMessage").value.trim();

    const result =
        document.getElementById("contactResult");


    if (name === "") {

        showMessage(
            result,
            "Please enter your name.",
            "#ff6b6b"
        );

        return;
    }


    if (email === "") {

        showMessage(
            result,
            "Please enter your email.",
            "#ff6b6b"
        );

        return;
    }


    if (!validateEmail(email)) {

        showMessage(
            result,
            "Please enter a valid email.",
            "#ff6b6b"
        );

        return;
    }


    if (userMessage === "") {

        showMessage(
            result,
            "Please enter your message.",
            "#ff6b6b"
        );

        return;
    }


    showMessage(
        result,
        "Message sent successfully! ✅",
        "#4ade80"
    );


    contactForm.reset();

});


/* =========================
   NAVIGATION CLOSE ON CLICK
========================= */

const navLinks =
    document.querySelectorAll("#navMenu a");


navLinks.forEach(function(link) {

    link.addEventListener("click", function() {

        document
            .getElementById("navMenu")
            .classList.remove("active");

    });

});
