import nodemailer from "nodemailer";

const sendMail = async (to, subject, otp) => {
  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "mannan.puri0052@gmail.com",
        pass: "gqyx kknh kiio gckn",
      },
    });

    const mailOptions = {
      from: "mannan.puri0052@gmail.com",
      to: to,
      subject: subject,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px;">
          <h2 style="color: #4CAF50;">Welcome to Ping</h2>
          <p>Hi there,</p>
          <p>Thank you for registering. Please use the OTP below to complete your registration:</p>
          <h3 style="background: #f2f2f2; padding: 10px 15px; display: inline-block; border-radius: 5px;">
            ${otp}
          </h3>
          <p>This OTP is valid for 10 minutes.</p>
          <p>Best regards,<br>All rights goes to Mannan</p>
        </div>
      `,
    };

    const result = await transporter.sendMail(mailOptions);
    console.log("Email sent:", result.response);
  } catch (error) {
    console.error("Error sending email:", error);
  }
};

export default sendMail;
