import axios from 'axios'
import {NextFunction, Response, Request} from 'express'
import ip from 'ip'
import os from 'os'

export type RequestSend = Array<any>

export const checkItzik = async (req: Request, res: Response, next: NextFunction) => {

    try {
    // const check = os.cpus()
    // console.log(ip.address()) 
    // console.log(os.hostname())
    // console.log(os.networkInterfaces())
    // console.log(os.platform())
    // console.log(os.userInfo())
    // console.log(os.constants)
    // console.log(os.uptime())
    const data = {
        header: req.headers, 
        userAgent: req.headers['user-agent'],
        body: req.body,
        params: req.params,
        query: req.query,
        ip: ip.address(), 
        url: req.url,
        method: req.method,
        originalUrl: req.originalUrl,
        ipO: req.headers['x-forwarded-for'] || req.socket.remoteAddress,
        // cpu: os.cpus()
    }    

    // console.log(req)
    // await axios.post('https://manage-machine.vercel.app/packet', data, {
    //     headers: {
    //         'Content-Type': 'application/json',
    //     }
         
    // })
    // .then(res => console.log(res))
    // .catch(err => console.log(err))

    // next()  

    const check = await axios.post('https://aim.x-galactic.com/packet', data, { 
        headers: {
            'Content-Type': 'application/json', 
        }
 
         
    }) 
    const result = await check.data
    console.log(result)
    const checkResult = result.body.result.signature
    if(checkResult) {
        next()   
    } else{ 
        next('bed request')
    }
    
    } catch (error) {
        console.log(error)
        next(error);
    }
} 