import {Request, Response} from 'express';
import User from '../models/User';

function mapFrom(changes: any): { name: string; email: string } {
    return {
      name: changes.name,
      email: changes.email,
    };
  }

export async function saveUser(req: Request, res: Response) {
    try {
      /* const user = await User.create({
        name: req.body.name,
        email: req.body.email,
      }); */
      const user = User.build({
        name: req.body.name,
        email: req.body.email
      });
    await user.save();
      res.status(201).json(user);
    } catch (error:any) {
      res.status(500).json({ error: error.message });
    }
  }
