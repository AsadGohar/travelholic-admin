const TripPlannerDestinationModel = require('../Models/TripPlannerDestination');
const HotelModel = require('../Models/Hotel');
const mongoose = require("mongoose");
const TransportModel = require('../Models/Transport');
const HttpError = require('../Models/HttpError');

const getTripPlanEstimate = async (req,res,next)=>{
  const {destinations} =req.body
  let nextDest=1,minHotel=0,maxHotel=0,routes=[],fares=[],transports=[],totalFare=0,minEstimate,maxEstimate,newFares=[],minTransport=0,maxTransport=0;
  for (let index = 0; index < destinations.length-1; index++) {

    let transport = await TransportModel.find
    ( 
      {"routes": 
        {
          $elemMatch: { 
            'destination_from':destinations[index],  
            'destination_to':destinations[nextDest]
          } 
        }
      }
    );
    if (transport.length===0){
      let to = await TripPlannerDestinationModel.findById(destinations[index])
      let from = await TripPlannerDestinationModel.findById(destinations[nextDest])
      const error = new HttpError(`could not find route between ${to.name} to ${from.name}`,404);
      return next(error);
    }
    else {
      // console.log(transport)
      transports.push(transport)

      let from = destinations[index]
      let to = destinations[nextDest]
      // let nroutes=[]
      // for (let index = 0; index < transport.length; index++) {
        
        
      //   // console.log(transport[index].routes.length)
      //   for(let i=0;i<transport[index].routes.length;i++)
      //   {
      //     if (transport[index].routes[i].destination_from==from && transport[index].routes[i].destination_to==to )
      //     {
      //       nroutes.push(transport[index].routes[index])
      //     }
      //   }

      // }
      // newFares.push(nroutes)
        
      
      let nroutes=[]
      transport.forEach(tr=>{
        tr.routes.forEach(element => {
          
          if (element.destination_from==from && element.destination_to==to )
          {
            // console.log(element)
            // routes.push(element)
            nroutes.push({'transport id':tr._id,'tranport name':tr.name,'destination_from':element.destination_from,'destination_to':element.destination_to,'fare':element.fare})
          }
        });
      })
      newFares.push(nroutes)
      transport[0].routes.forEach(element => {
        if (element.destination_from==from && element.destination_to==to )
        {
          // console.log(element)
          routes.push(element)
          fares.push(element.fare)
        }
      });
     
      nextDest++
    }
  }

  newFares.forEach(element=>{
    element.sort((a,b)=> a.fare-b.fare)
  })

  newFares.forEach(element=>{

    // console.log('length',element.length)
    // console.log(element[element.length])
    minTransport+=element[0].fare
    // console.log(minTransport)

    maxTransport+=element[element.length-1].fare
  })
  console.log('minTrans',minTransport)
  console.log('maxTrans',maxTransport)
  
  for (let index = 0; index < destinations.length; index++) {
    const aggregate =  [
      { $match : { "destination": new mongoose.Types.ObjectId(destinations[index])} } ,
      {
        
        $group:
        {
          _id: "$destination",
          HotelMin: { $min: "$budget_rent" },
          HotelMax:{ $max: "$luxury_rent" }
        }
      },

      // { $lookup: {from: 'tripplannerdestinations', localField: '_id', foreignField: '_id', as: 'destination'} },
      // { $project: { "_id": 1} },
      
    ]
    const hotel = await HotelModel.aggregate(aggregate).exec()
    minHotel +=  hotel[0].HotelMin
    maxHotel +=  hotel[0].HotelMax
  }
  fares.forEach(fare=> totalFare+=fare)
  minEstimate = minHotel+totalFare
  maxEstimate = maxHotel+totalFare

  let newminEstimate = minHotel+minTransport
  let newmaxEstimate = maxHotel+maxTransport
  res.send({minHotel,maxHotel, minTransport,maxTransport,minEstimate,maxEstimate,newmaxEstimate,newminEstimate,totalFare})
  }
module.exports.getTripPlanEstimate  = getTripPlanEstimate
