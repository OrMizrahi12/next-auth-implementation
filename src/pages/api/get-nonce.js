import { corsMiddlewareSolver } from '@/logic/cors/corsResolving';
import fetch from 'isomorphic-unfetch';

export default async function getNonce(req, res) {

    await corsMiddlewareSolver(req, res);
    const response = await fetch(`https://dev-authsite.pantheonsite.io/wp-json/wp/v2/users/me`, {
        credentials: 'include',
        headers: {
            'Content-Type': 'application/json',
            'X-WP-Nonce': 'undefined'
        },
    });
    
    const data = await response.json();
    const nonce = data.nonce;

    res.status(200).json({ response });
}