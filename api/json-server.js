import { createServer } from 'http';
import jsonServer from 'json-server';

const server = jsonServer.create();
const router = jsonServer.router('./db.json');
const middlewares = jsonServer.defaults();

server.use(middlewares);
server.use(router);

export default async function handler(req, res) {
    const requestListener = server.callback();
    const proxy = createServer(requestListener);

    // Listen to the API request
    await new Promise(resolve => {
        proxy.once('request', req, res);
        resolve();
    });
}
