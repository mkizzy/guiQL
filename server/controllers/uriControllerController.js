const Uri = require('../models/uri')

const createURI = async (req, res)=> {
    if (!req?.body?.Uri) return res.status(400).json({'message': 'Your PostgreSQL URI is required'})

    try {
        result = await Uri.create({
            uri: req.body.Uri
        })

        res.status(201).json(result)
    }catch(err){
        console.log(ErrorEvent)
    }
}

module.exports ={
    createURI
}