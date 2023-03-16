import express from 'express'
import fs from "fs"
import multer from 'multer'
import csvToJson  from 'convert-csv-to-json'


const router = express.Router()


// GET REQUEST

router.get('/retrieve', (req, res) => {
    try {
        const jsonData = fs.readFileSync('../backend/api/files/converted/account_statement.json', { encoding: 'utf-8' })
        res.status(200).send(jsonData)
    } catch (err) {
        res.status(500).send(err)
    }
})


// MIDDLEWARE (POST REQUEST)

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        return cb(null, '../backend/api/files/uploads')
    },
    filename: function (req, file, cb) {
        return cb(null, file.originalname) 
    }
})

const upload = multer({ storage })


// POST REQUEST

router.post('/upload', upload.single('file'), (req, res) => {
    const fileInputName = '../backend/api/files/uploads/account_statement.csv'
    const fileOutputName = '../backend/api/files/converted/account_statement.json'
    try {
        csvToJson.generateJsonFileFromCsv(fileInputName,fileOutputName);
        return res.status(200).send('File uploaded successfully!')
    } catch (err) {
        res.status(500).send(err)
    }
})


export default router