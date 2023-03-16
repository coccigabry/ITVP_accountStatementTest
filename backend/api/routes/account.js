import express from 'express'
import {getAccountStatement, postAccountStatement} from '../controllers/account.js'

const router = express.Router()

router.get('/', getAccountStatement)
router.post('/', postAccountStatement)

export default router