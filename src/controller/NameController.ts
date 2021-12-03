import { Request, Response } from "express"
import { NameModel } from "../entity/NameEntiy"
import { sign, verify } from 'jsonwebtoken'

interface IDecode {
    name: string,
    iat: number
}

export const NameController = {
    async findOne(request: Request, response: Response) {
        const { id } = request.params

        const names = await NameModel.findByPk(id)

        if (!names) {
            return response.status(404).json({
                "code": "E_VALIDATION_FAILURE",
                "message": `O id "${id}" não existe`
            })
        }

        const { encripted_name } = <any>names

        const decodedName = verify(encripted_name, 'shhhhh');

        const { name } = <IDecode>decodedName

        return response.json({ name: name })
    },
    async findAll(request: Request, response: Response) {
        const names = await NameModel.findAll({
            attributes: ['id', 'encripted_name']
        })

        console.log(names)
        return response.json(names)
    },
    async create(request: Request, response: Response) {
        const { name } = request.body

        if (!name) {
            return response.json({
                "code": "E_VALIDATION_FAILURE",
                "message": "O campo \"name\" é obrigatório"
            })
        }

        const codedName = sign({ name }, 'shhhhh')

        const createName = await NameModel.create({ encripted_name: codedName })

        return response.json(createName)
    }
}
