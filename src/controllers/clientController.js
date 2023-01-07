import { Router } from 'express';
import ClientService from '../services/clientService.js';
import { authMiddleware } from '../common/jwt.strategy.js';

const router = Router();
const clientService = new ClientService();

router.get('/id/:id', authMiddleware, async (req, res) => {
    try {
        if (req.body.client.role !== 'admin' && req.body.client.role !== 'user') {
            res.status(401).send('Unauthorized');
        }
        const data = await clientService.getClientById(req.params.id);
        res.status(200).send(data);
    } catch (error) {
        res.status(400).send("Error")
    }
})

router.get('/name/:name', authMiddleware, async (req, res) => {
    try {
        if (req.body.client.role !== 'admin' && req.body.client.role !== 'user') {
            res.status(401).send('Unauthorized');
        }
        const data = await clientService.getClientByName(req.params.name);
        res.status(200).send(data);
    } catch (error) {
        res.status(400).send("Error")
    }
})

export default router;