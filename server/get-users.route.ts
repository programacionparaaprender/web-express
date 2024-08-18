import {Request, Response} from 'express';
import User from '../models/User';

export async function getAllUsers(req: Request, res: Response) {
    try {
        const users = await User.findAll();
        res.status(200).json(users);
    } catch (err) {
        console.log('error')
        console.log(err);
        res.status(500).json({ error: 'Error al obtener usuarios' });
    }
};