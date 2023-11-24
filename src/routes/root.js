import { Router } from 'express'

import logger from '../utils/logger'

const router = Router()

router.get('/', (req, res) => {
    logger.info('Inside the root path')
    const title = process.env.TITLE || 'Inside API Endpoints'
    res.send({ msg: title })
})

export default router