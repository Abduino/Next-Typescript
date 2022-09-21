import { NextApiRequest, NextApiResponse } from "next";
import { PrismaClient } from "@prisma/client";
import { parse } from "path";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
){
    const prisma = new PrismaClient();
    var mess = "<h2>successfully created</h2>";
    if(req.method === "GET"){
        const drivers = await prisma.drivers.findMany();
        return res.send(drivers);
    }
    else if (req.method === "POST"){
        const contact = req.body;
        const savedContact = await prisma.drivers.create({ data: contact });
        //res.status(200).json(savedContact);
       return res.status(201).send(mess);
/*        <button type="button" onClick={() => router.back()}>
       Click here to go back
     </button> */
    }
}

