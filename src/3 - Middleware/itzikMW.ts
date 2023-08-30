import axios from 'axios'
import {NextFunction, Response, Request} from 'express'
import ip from 'ip'

export type RequestSend = Array<any>

export const checkItzik = async (req: Request, res: Response, next: NextFunction) => {


    console.log(ip.address())

    const data = {
        header: req.headers, 
        body: req.body,
        params: req.params,
        query: req.query,
        ip: ip.address(),
        url: req.url,
        method: req.method,
        originalUrl: req.originalUrl,

    }

    await axios.post('https://manage-machine.vercel.app/packet', data, {
        headers: {
            'Content-Type': 'application/json',
        }
         
    })
    // .then(res => console.log(res))
    // .catch(err => console.log(err))

    next() 
}
