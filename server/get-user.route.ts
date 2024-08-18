import {Request, Response} from 'express';
import User from '../models/User';

export async function getUser(req: Request, res: Response) {
    const id:string = req.params["id"];
    console.log("Get user " + id);
    try {
        const user = await User.findByPk(id);
        res.status(200).json(user);
    } catch (err) {
        console.log('error')
        console.log(err);
        res.status(500).json({ error: 'Error al obtener usuario' });
    }

}
