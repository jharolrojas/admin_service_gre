import jwt from 'jsonwebtoken';
import config from '../../../config/environments';
import { Request, Response, NextFunction } from 'express';

interface DecodedToken {
  userId: string;
  rol_id: number;
  exp: number
}
console.log("entre9");

export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  console.log("entre14");

  if (!token) {
    return res.status(401).json({ message: 'Token no proporcionado' });
  }

  jwt.verify(token, config.SECRET_HIDDEN_KEY!, (err, decoded) => {
    console.log({ decoded });

    if (err) {
      return res.status(403).json({ message: 'Token inválido' });
    }
    const decodedToken = decoded as DecodedToken;


    // Verificar si el token ha expirado
    if (decodedToken.exp && Date.now() >= decodedToken.exp * 1000) {
      return res.status(401).json({ message: 'Token expirado' });
    }
    req.user = { userId: decodedToken.userId, rol_id: decodedToken.rol_id }; // Añade más campos si son necesarios
    next();
  });
};
