import jwt from "jsonwebtoken";

export default class AuthService {

    getRandomString = () => {
        
        let result = "";
        let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let charactersLength = characters.length;

        for (let i = 0; i < 16; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
        }
        return result;
    };

    getSignedToken = () => {
        const userId = this.getRandomString();
        const userMail = `${userId}@example.com`;
        const token = jwt.sign({
            payload: "Custom Payload",
            userEmail: userMail
        },
        process.env.AUTH0_HS256_KEY,
        {
            issuer: process.env.AUTH_ISSUER_URL,
            subject: userId,
            audience: ["http://localhost/"],
            expiresIn: 60 * 24 * 24
        });
        return token;
    };
}
