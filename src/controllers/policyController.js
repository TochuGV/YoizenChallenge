import { Router } from 'express';
import PolicyService from '../services/policyService.js';
import { authMiddleware } from '../common/jwt.strategy.js';

const router = Router();
const policyService = new PolicyService();

router.get('/:name', authMiddleware, async (req, res) => {
    try {
        if (req.body.client.role !== 'admin') {
            res.status(401).send('Unauthorized');
        }
        const data = await policyService.getPoliciesByClientName(req.params.name);
        res.status(200).send(data);
    } catch (error) {
        res.status(400).send("Error")
    }
})

export default router;