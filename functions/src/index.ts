// // Package imports
// import * as functions from 'firebase-functions';
// import * as nodemailer from 'nodemailer';
// import { DateTime } from 'luxon';

// // Gmail credentials
// const gmailAddress = functions.config().email.address;
// const gmailPassword = functions.config().email.password;

// // Website name
// const WEBSITE_NAME = 'Roshen Nair | Personal Website'

// // Nodemailer transporter for sending mail
// let gmailTransporter = nodemailer.createTransport({
// 	service: 'gmail',
// 	auth: {
// 		user: gmailAddress,
// 		pass: gmailPassword
// 	}
// });

// // Export HTTPS callable cloud function
// exports.submitContactForm = functions.https.onCall(async (data, context) => {
// 	// Get relevant data for email
// 	const { name, email, message } = data;
// 	const currentDatetime: DateTime = DateTime.local().setZone('UTC+8');

// 	// Configure email options
// 	const mailOptions = {
// 		from: `${WEBSITE_NAME} <noreply@firebase.com>`,
// 		to: email,
// 		subject: 'New Contact Form Submission',
// 		text: `
// 			Time: ${currentDatetime.toHTTP()}
// 			Name: ${name}
// 			Email: ${email}
// 			Message: ${message}
// 		`
// 	};

// 	await gmailTransporter.sendMail(mailOptions);
// });
