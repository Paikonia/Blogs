import sendMessage from "@/lib/mailer"
import { NextApiRequest, NextApiResponse } from "next"


const handler = (req:NextApiRequest, res:NextApiResponse) => {
    if(req.method === 'POST') {
        const b = req.body
        console.log(b)
        // sendMessage()
        res.status(200).json({message: 'Success'})
    }
}


export default handler
