// import express from 'express'

// const route = express.Router()

// //construindo as rotas com base no service

// route.get("/", (req, res) => {
//     res.json(animalServices.getAll())
// })

// route.get("/:id", (req, res) => {
//     const { id } = req.params
//     const animal = animalServices.getById(id)

//     if (!animal) {
//         res.status(404).json({ message: "Animal não encontrado" })
//     }

//     res.json(animal)
// })

// export default route