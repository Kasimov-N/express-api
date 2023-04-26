const { Router } = require('express')
const { v4 } = require('uuid')
const router = Router()
router.get('/', (req, res) => {
    res.json(DATA)
})
router.get('/:id', (req, res) => {
    const isExist = DATA.some(item => item.id === parseInt(req.params.id))
    if (isExist) {
        data = DATA.filter(item => item.id === parseInt(req.params.id))
        res.json(data)
    } else {
        res.json(`Siz so'ragan ${req.params.id} id lik Data yo'q`)
    }
})
router.post('/', (req, res) => {
    const newData = {
        id: v4(),
        name: req.body.name,
        age: req.body.age
    }
    if (!req.body.name || !req.body.age) {
        return res.status(400).json({ message: "Ma'lumotlar to'liq emas" })
    }
    DATA.push(newData)
    const resp = {
        status: 'OK',
        data: newData
    }
    res.json(resp)
})

router.put('/:id', (req, res) => {
    const putData = DATA.some(item => item.id === parseInt(req.params.id))


    if (putData) {
        const putbody = req.body
        DATA.forEach(item => {
            if (item.id === parseInt(req.params.id)) {
                item.name = putbody.name? putbody.name : item.name
                item.age = putbody.age? putbody.age : item.age
                res.status(200).json({ message: "Update" })
            }
        })
    }
    else{
        res.json({message: "Error"})
    }
})
router.delete('/:id', (req, res) => {
    const id = req.params.id
    DATA = DATA.filter(item => item.id !== id)
    const resp = {
        status: 'DELETE',
    }
    res.json(resp)
})



module.exports = router
