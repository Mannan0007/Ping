import User from "../Models/user_Model.js";
import generateToken from "../config/generateToken.js";
import sendMail from "../middleware/Mail.js";
import generateOTP from '../utils/otp.js'

export const RegisterUser = async (req, res) => {
    try {
        const { name, email, username, password } = req.body;

        if (!name || !email || !username || !password) {
            return res.status(400).json({ message: "Please fill all the fields" });
        }


        const userEmail = await User.findOne({ email });
        if (userEmail) {
            return res.status(400).json({ message: "Email already registered" });
        }

        const userName = await User.findOne({ username });
        if (userName) {
            return res.status(400).json({ message: "Username already exist" });
        }

        const user = await User.create({
            name,
            email,
            username,
            password
        });
       if (user) {
         const otp = generateOTP(); // create 6-digit OTP
         await sendMail(user.email, "Welcome to Ping - Verify your Email", otp);

         return res
           .status(200)
           .json({ message: "User created successfully", user });
       }

        
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Internal Server Error" });

        
    }
}

export const LoginUser = async (req, res) => {
    try {
        const {  email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ message: "Please fill all the fields" });
        }

        const userEmail = await User.findOne({ email });

        if (!userEmail) {
            return res.status(400).json({ message: "Invalid credentials" });
        }

    

        if (userEmail && (await userEmail.matchPassword(password))) {
          res.json({
            _id: userEmail._id,
            email: userEmail.email,
            token: generateToken(userEmail._id),
          });
        }


    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Some error occured" });
    }
}


export const getPeople = async (req, res) => {
    try {
         const currentUserId = req.user._id; // or from the session or token

         // Fetch all users except the current logged-in user
         const users = await User.find(
           { _id: { $ne: currentUserId } },
           "name avatarUrl"
         ); // Fetch only name and avatar

         // Respond with the list of users
         res.status(200).json(users);
    } catch (error) {
         console.error(error);
         res.status(500).json({ message: "Error fetching users" });
    }
}