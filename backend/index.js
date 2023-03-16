import express from 'express'
import cors from 'cors'
import accountRoute from './api/routes/account.js'

const app = express()

app.use(cors({origin: '*'}))
app.use(express.json())


app.use('/api/account', accountRoute)

app.listen(4000, () => console.log('Server listening!') )