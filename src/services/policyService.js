import ClientService from './clientService.js';
import axiosClient from '../utils/axiosClient.js';

const clientService = new ClientService();

export default class PolicyService {

    getAllPolicies = async () => {
        const response = await axiosClient.get('/v2/580891a4100000e8242b75c5');
        return response.data.policies;
    }
    
    getPoliciesByClientName = async (name) => {
        const client = await clientService.getClientByName(name);
        const policies = await this.getAllPolicies();
        return policies.filter((p) => p.email === client.email);
    }
}
