document.addEventListener("DOMContentLoaded", function() {
    // Add event listener to the form
    document.querySelector("form").addEventListener("submit", function(event) {
        event.preventDefault(); // Prevent default form submission

        // Get form data
        var formData = new FormData(this);

        // Send form data via AJAX
        fetch("https://dreamy-licorice-4bab89.netlify.app", {
            method: "POST",
            body: formData
        })
        .then(response => {
            if (response.ok) {
                // If submission is successful, show a success message
                alert("Thank you for contacting us!");
                // You can also redirect the user to a thank you page if needed
                // window.location.href = "thank-you.html";
            } else {
                // If there is an error, show an error message
                alert("Error: Unable to submit form.");
            }
        })
        .catch(error => {
            console.error("Error:", error);
            alert("Error: Unable to submit form.");
        });
    });
});
