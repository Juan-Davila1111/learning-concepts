import express, {Express, Request, Response} from 'express'

const app: Express = express();

app.use(express.json())

app.post('/reserve', (req: Request, res: Response) => {
    console.log("[Inventory service] Reserve Request: ", req.body);
    res.json({success: true, message: 'Inventario reservado'})
})

const PORT = 3001;
app.listen(PORT, () => {
    console.log("Inventory Service running on port ", PORT)
})