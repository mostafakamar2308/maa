import nodemailer from "nodemailer";

const email = process.env.email;
const pass = process.env.pass;

export const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: email,
    pass,
  },
});
export const mailoptions = {
  from: email,
  to: email,
};
