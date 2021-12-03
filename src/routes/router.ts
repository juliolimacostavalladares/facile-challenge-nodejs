import { Router } from 'express'
import { NameController } from '../controller/NameController'

const router = Router()

router.get('/encripts/:id', NameController.findOne)
router.get('/names', NameController.findAll)
router.post('/name/create', NameController.create)

export { router }