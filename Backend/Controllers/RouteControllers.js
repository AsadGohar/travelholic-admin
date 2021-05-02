const RouteModel = require('../Models/Route');
const HttpError = require('../Models/HttpError');

//ADDING NEW ROUTES
const createRoute = async(req,res,next)=>{

  const {to,from} = req.body
  let route 
  try {
    route = RouteModel()
    route.destination_to=to;
    route.destination_from=from;
    route.save()
  } 
  catch (err) {
    const error = new HttpError('creating route failed',500);
    return next(error);
  }
  res.send(route)
}
//Does route exists
const doesRouteExist = async(req,res,next)=>{

  const {destination_to,destination_from} = req.body
  let route 
  try {
     route = await RouteModel.find({destination_to:destination_to,destination_from:destination_from}).populate('destination_to destination_from', 'name').exec()
  } 
  catch (err) {
    // console.log(err)
    const error = new HttpError('finding Route failed, please try again',500);
    return next(error);
  }

  if (route.length===0) {
    res.send({exist:false}) 
  }
  else{
    res.send({exist:true})  
  }
  
}

//GET ALL ROUTES
const getRoutes = async(req,res,next)=>{

  let routes 
  try {
     routes = await RouteModel.find().populate('destination_to destination_from', 'name').exec()
  } 
  catch (err) {
    const error = new HttpError('finding Routes failed, please try again',500);
    return next(error);
  }

  if (!routes) {
    const error = new HttpError('could not find any Routes',404);
    return next(error);
  }
  
  res.send(routes)
}

//DELETE ROUTE BY ID
const deleteRouteById =  async (req,res,next) => {
  let id = req.params.id
  let route 
  try {
    route = await RouteModel.findByIdAndDelete(id)
  } 
  catch (err) {
    const error = new HttpError('deleting Route failed, please try again',500);
    return next(error);
  }
  if (!route) {
    const error = new HttpError('could not find an Route for the provided id.',404);
    return next(error);
  }
  res.send(route)
}

//GET ANSWERS ADMIN
const getRoutesAdmin = async (req,res,next) => {
  RouteModel.find().populate('destination_to destination_from', 'title -_id').exec(function(err,data){
  if(err){
    const error = new HttpError('getting Routes failed, please try again',500);
    return next(error);
  }
  else{
    res.send(data)
  }
  })
}


//EXPORTING CONTROLLERS
module.exports.createRoute  = createRoute;
module.exports.getRoutes  = getRoutes;
module.exports.getRoutesAdmin  = getRoutesAdmin;
module.exports.deleteRouteById  =deleteRouteById;
module.exports.doesRouteExist  =doesRouteExist;
