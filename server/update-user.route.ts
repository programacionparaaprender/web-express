import {Request, Response} from 'express';
import User from '../models/User';

function mapFrom(el: any): any {        
    let user:any = {
        name:el.name,
        email:el.email
    };
    return user;
}


export async function updateUser(req: Request, res: Response) {
    const id:string = req.params["id"], changes = req.body;
    let updatedData: any = mapFrom(changes);
    try {
        // Actualizar el usuario
        const [updatedRows] = await User.update(updatedData, {
        where: { id: id },
        });

        if(updatedRows==1){
            const user = await User.findByPk(id);
            res.status(201).json(user);
        }
    } catch (err) {
        console.log('error')
        console.log(err);
        res.status(500).json({ error: 'Error al obtener usuario' });
    }
}
