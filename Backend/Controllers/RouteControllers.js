const RouteModel = require('../Models/Route');
const HttpError = require('../Models/HttpError');

//ADDING NEW ROUTES
const createRoute = async(req,res,next)=>{

  const {to,from} = req.body
  let route = RouteModel()
  route.destination_to=to;
  route.destination_from=from;
  await route.save()

  try {
  } 
  catch (err) {
    const error = new HttpError(
    'creating route failed',
    500
    );
    return next(error);
  }
  res.send(route)
}

//GET ALL ROUTES
const getRoutes = async(req,res,next)=>{

  let routes 
  try {
     routes = await RouteModel.find()
  } 
  catch (err) {
    const error = new HttpError(
    'finding Questions failed, please try again',
    500
  );
    return next(error);
  }

  if (!routes) {
    const error = new HttpError(
      'could not find Questions',
      404
    );
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
    const error = new HttpError(
    'deleting Answer failed, please try again',
    500
    );
    return next(error);
  }
  if (!route) {
    const error = new HttpError(
    'could not find an Answer for the provided id.',
    404
    );
    return next(error);
  }
  res.send(route)
}

//GET ANSWERS ADMIN
const getRoutesAdmin = async (req,res,next) => {
  RouteModel.find().populate('destination_to destination_from', 'title -_id').exec(function(err,data){
  if(err){
    const error = new HttpError(
      'getting Routes failed, please try again',
      500
      );
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
