import {Request, Response} from 'express';
import User from '../models/User';

export async function deleteUser(req: Request, res: Response) {
    const id:string = req.params["id"];
    console.log("Get user " + id);
    try {
        const user = await User.findByPk(id);
        // Eliminar el usuario
        const deletedRows = await User.destroy({
            where: { id: id },
        });
        
        if (deletedRows > 0) {
            console.log('Usuario eliminado.');
        } else {
            console.log('No se encontró el usuario o no se eliminó ningún registro.');
        }
        res.status(201).json(user);
    } catch (err) {
        console.log('error')
        console.log(err);
        res.status(500).json({ error: 'Error al obtener usuario' });
    }

}
