function sendMail(contactForm) {
    emailjs.send("gmail", "template_sKUZrwY6", {
        "from_email": contactForm.emailaddress.value,
    })
    .then(
        function(response) {
            console.log("SUCCESS", response);
        },
        function(error) {
            console.log("FAILED", error);
        }
    );
    return false;  // To block from loading a new page
}