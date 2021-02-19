const express = require ('express');
const router = express.Router();

const { getHotelInfo ,updateHotelInfo,deleteHotelInfo, createHotelInfo} = require('../Controllers/HotelControllers')

router.post('/', async (req,res)=>{
  const {user,text, reported} = req.body
  const hotel = await createHotelInfo(user,text,reported);
  res.send(hotel)
})

router.get('/', async (req,res)=>{
  const hotels = await getHotelInfo()
  res.send(hotels)
})

router.delete('/:id', async (req,res)=>{
  const hotel = await deleteHotelInfo(req.params.id);
  res.send(hotel)
})



router.put('/:id', async (req,res)=>{
  const {id,text} =req.body
  const updateHotel = await updateHotelInfo(id,text)
  res.send(updateHotel)
})

module.exports = router;