const express = require('express')
const router = express.Router()

let bannerId = 3
let banners = [
  {
    id: 1,
    name: 'banner1',
    isNew: false,
  },
  {
    id: 2,
    name: 'banner2',
    isNew: false,
  },
  {
    id: 3,
    name: 'banner3',
    isNew: true,
  },
]

router.get('/', (req, res) => {
  return res.json(banners)
})

router.get('/:id', (req, res) => {
  return res.json(banners.filter((banner) => banner.id === parseInt(req.params.id, 10)))
})

router.post('/', (req, res) => {
  banners.push({
    id: ++bannerId,
    name: 'banner' + bannerId,
    isNew: true,
  })
  return res.json({ msg: 'created' })
})

router.put('/', (req, res) => {
  banners = banners.map((banner) =>
    banner.id === req.body.id
      ? {
          ...banner,
          ...req.body
        }
      : banner
  )
  return res.json({ msg: 'updated' })
})

router.delete('/:id', (req, res) => {
  banners = banners.filter((banner) => banner.id !== parseInt(req.params.id, 10))
  return res.json({ msg: 'deleted' })
})

module.exports = router
