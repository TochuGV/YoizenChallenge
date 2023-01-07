import express from 'express';
import cors from 'cors';
import passport from 'passport';
import { jwtStrategy } from './src/common/jwt.strategy.js';
import AuthRouter from './src/controllers/authController.js'
import ClientRouter from './src/controllers/clientController.js';
import PolicyRouter from './src/controllers/policyController.js';

const app = express();
const port = 3000

app.use(cors());
app.use(express.json());
passport.use(jwtStrategy);
app.use(passport.initialize());

app.use("/auth", AuthRouter)
app.use("/client", ClientRouter);
app.use("/policy", PolicyRouter);

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})