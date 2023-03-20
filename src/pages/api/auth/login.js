import { getTokenForLogin } from '@/logic/usersAuth/loginAuth';
import { corsMiddlewareSolver } from '@/logic/cors/corsResolving';

export default async function handler(req, res) {

    await corsMiddlewareSolver(req, res);
    
    const { email, password } = req.body;
    const respons = await getTokenForLogin(email, password);

    if (respons.data.success) {
        res.status(200).json(respons.data);
    }
    else res.status(401).json(false)
}


  