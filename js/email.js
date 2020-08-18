/* Sign Up to Newsletter Function */
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


/* Sending Emails Function */
function sendMail(contactForm) {
	emailjs.send("gmail", "primark_world", {
			from_name: contactForm.name.value,
			from_email: contactForm.emailaddress.value,
			message_request: contactForm.message.value
		})
		.then(
			function(responce) {
				if (responce.status == 200) {
					location.href = "index.html";
				}
			},
			function(error) {
				console.log("FAILED", error);
			}
		);
	return false;
}
