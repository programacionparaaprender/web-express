import {Request, Response} from 'express';
import User from '../models/User';

function mapFrom(el: any): any {        
    let user:any = {
        name:el.name,
        email:el.email
    };
    return user;
}

export async function saveUser(req: Request, res: Response) {
    try {
        const changes:any = req.body;
        console.log('body');
        console.log(JSON.stringify(req.body));
        let usercreate: any;
        usercreate = mapFrom(changes);
        const user = await User.create(usercreate);
        res.status(201).json(user);
    } catch (err) {
        console.log('error')
        console.log(err);
        res.status(500).json({ error: 'Error al obtener usuario' });
    }
}
