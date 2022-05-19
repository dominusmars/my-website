// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import stream from 'stream';
import { promisify } from 'util';
import fetch from 'node-fetch';

const pipeline = promisify(stream.pipeline);


export default async function handler(req, res) {

    var resumeReq = await fetch('https://www.coffeedom.xyz/Resume.pdf');
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename=resume.pdf');

    await pipeline(resumeReq.body, res);

}
