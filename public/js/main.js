var copyrightsect = document.getElementById('Copyright');
// Create a new Date object
const currentDate = new Date();
const day = currentDate.getDate();
const month = currentDate.getMonth() + 1;
const year = currentDate.getFullYear();
// Format the date as desired, e.g., "MM/DD/YYYY"
const formattedDate = `${month}-${day}-${year}`;


copyrightsect.innerHTML = `Copyright&copy; ${year} Lambda Africa (PTY) LTD`


// Get the button
let backToTopBtn = document.getElementById("backToTopBtn");
// Show the button when the user scrolls down 20px from the top of the document
window.onscroll = function () {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        backToTopBtn.style.display = "block";
    } else {
        backToTopBtn.style.display = "none";
    }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, and Opera
}

function toggleCollapse() {
    const collapsibleDiv = document.getElementById('collapsibleDiv');
    collapsibleDiv.classList.toggle('show');
}


function sendEmail() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value
    var subject = document.getElementById('subject').value;
    var msg = document.getElementById('message').value

    fetch('/api/mail/sendemail', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email,
            subject: subject,
            message: msg
        })
    })
        .then(response => response.json())
        .then(data => {
            console.log('Success:', data);
            alert('Email sent successfully');
        })
        .catch((error) => {
            console.error('Error:', error);
            alert('Front end Error sending email');
        });
}