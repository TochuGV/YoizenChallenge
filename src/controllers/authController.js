import { Router } from 'express';
import AuthService from '../services/authService.js';
import ClientService from '../services/clientService.js';

const router = Router();
const authService = new AuthService();
const clientService = new ClientService();

const login = ({
    email: "",
    password: ""
});

router.post('/login', async (req, res) => {

    try {
        const { email, password } = req.body;
        const client = await clientService.getClientByEmail(email)
        if (client.password === password) {
            const token = authService.getSignedToken();
            console.log(token);
            res.status(200).send(`You logged in succesfully\nToken:${token}`);
        } else {
            res.status(400).send("Incorrect password");
        }
    } catch (error) {
        res.status(400).send("Error\nYou need to complete the body with an email and a password");
    }
});

export default router;