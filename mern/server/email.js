import nodemailer from 'nodemailer';

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});

// Send email
function sendVerificationCodeEmail(email) {
    let mailOptions = {
        from: `"Intentionally Blank" <${process.env.EMAIL}>`,
        to: email,
        subject: "Reset password",
        text: "Your verification code is 12345.",   
    };

    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            console.log('error sending email', err);
        } else {
            console.log('email sent successfully');
        }
    });
}

export default sendVerificationCodeEmail;