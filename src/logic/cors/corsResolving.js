import cors from 'cors';

const corsMiddleware = cors({
    origin: 'http://localhost:3000/', // Replace with your own domain
    methods: ['GET', 'POST']
});

export async function corsMiddlewareSolver(req, res) {
    await new Promise((resolve, reject) => {
        corsMiddleware(req, res, (err) => {
            if (err) {
                console.log(err);
                return reject(err);
            }
            resolve();
        })
    })
}