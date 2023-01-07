import axiosClient from '../utils/axiosClient.js';

export default class ClientService {

    getAllClients = async () => {
        const response = await axiosClient.get('/v3/d8488912-f032-43ad-b296-c3eda2b9675d');
        return response.data.clients;
    }
    
    getClientById = async (id) => {
        const clients = await this.getAllClients();
        const client = clients.find((c) => c.id === id);
        if (!client) {
            throw new Error('Client Not Found');
        } 
        return client;
    }

    getClientByName = async (name) => {
        const clients = await this.getAllClients();
        const client = clients.find((c) => c.name === name);
        if (!client) {
            throw new Error('Client Not Found');
        } 
        return client;
    }

    getClientByEmail = async (email) => {
        const clients = await this.getAllClients();
        const client = clients.find((c) => c.email === email);
        if (!client) {
            throw new Error('Client Not Found');
        } 
        return client;
    }
}
