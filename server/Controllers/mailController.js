import sendMail from "../middleware/Mail.js";
import  generateOTP  from "../utils/otp.js";

export const sendEmail = async (req, res) => {
  const { to, subject } = req.body; // text is not needed now

  try {
    const otp = generateOTP(); // generate the OTP here
    await sendMail(to, subject, otp); // pass OTP to the mail
    res
      .status(200)
      .json({ success: true, message: "OTP sent successfully!", otp }); // (for now sending OTP back to frontend too for testing, later we will remove sending otp)
  } catch (error) {
    res
      .status(500)
      .json({ success: false, message: "Failed to send email", error });
  }
};
