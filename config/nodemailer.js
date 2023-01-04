import nodemailer from "nodemailer";

const email = 'examenfinal1999@gmail.com';
const pass = 'hheglvnudyxaffni';

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass: pass,
  },
});

export const mailOptions = {
  from: email,
  to: email,
};