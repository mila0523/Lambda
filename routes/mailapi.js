const express = require('express');
const router = express.Router();
const mailjet = require('node-mailjet').apiConnect('b10dbcad78fca7ddb13ed40d53a7dbd4', '12a9fc5e6b1c276f860e064771053c08')

router.use(express.json());

// Example route
router.post('/sendemail', (req, res) => {
    const { name, email, subject, message } = req.body;

    const request = mailjet
        .post("send", { 'version': 'v3.1' })
        .request({
            "Messages": [
                {
                    "From": {
                        "Email": "milambopha@gmail.com",
                        "Name": "MM"
                    },
                    "To": [
                        {
                            "Email": "milambopha@gmail.com",
                            "Name": "MM"
                        }
                    ],
                    "Subject": "Greetings from Mailjet.",
                    "TextPart": "My first Mailjet email",
                    "HTMLPart": "<h3>Dear passenger 1, welcome to <a href='https://www.mailjet.com/'>Mailjet</a>!</h3><br />May the delivery force be with you!",
                    "CustomID": "AppGettingStartedTest"
                }
            ]
        })
    request
        .then((result) => {
            console.log(result.body)
            res.json({ message: 'Success, mail sent' });
        })
        .catch((err) => {
            console.log(err.statusCode)
            res.json({ message: 'API error' + err });
        })

});


module.exports = router;