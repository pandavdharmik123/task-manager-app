const sgMail = require('@sendgrid/mail')

const sendGridAPIKey = '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'


sgMail.setApiKey(sendGridAPIKey)

const sendWelcomeMail = (email, name) => { 
    sgMail.send({
        to: email,
        from: 'dhamopandav1311@gmail.com',
        subject: 'Thak you for joining us!',
        text: `Welcome to the app, ${name}. Let me know ypu about app.`
    })
}

const sendCancelEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'dhamopandav1311@gmail.com',
        subject: 'Good Bye!',
        text: `Hello, ${name}. You successfully Cancel th account.`
    })
}

module.exports = {
    sendWelcomeMail,
    sendCancelEmail
}