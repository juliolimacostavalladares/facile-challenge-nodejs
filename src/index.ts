import express from 'express'
import { connect } from './config/connect'
import { router } from './routes/router'
const app = express()

app.use(express.json())

app.use(router)


app.listen(3333, async () => {
    connect.sync().then(() => console.log('DB Running'))
    console.log('Server Running on 3333 port')
})