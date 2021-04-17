const express = require ('express');
const dotenv = require("dotenv")
const HttpError = require('./Models/HttpError');
const connectDB = require('./config/db')
const path = require('path')


dotenv.config({path: './config/config.env'})
const cors = require('cors')

// IMPORTING ROUTES HERE
const DestinationRoutes = require('./Routes/DestinationRoutes');
const BookingRoutes = require('./Routes/BookingRoutes');
const TransportRoutes = require('./Routes/TransportRoutes');
const ReviewRoutes = require('./Routes/ReviewRoutes');
const AnswerRoutes = require('./Routes/AnswerRoutes');
const UserRoutes = require('./Routes/UserRoutes');
const QuestionRoutes = require('./Routes/QuestionRoutes');
const TripRoutes = require('./Routes/TripRoutes');
const RouteRoutes = require('./Routes/RouteRoutes');
const HotelRoutes = require('./Routes/HotelRoutes');

const app = express();
app.use(express.json());
app.use(cors());

app.use('/public/images/users',express.static(path.join('public','images','users')))
// app.use(express.static('public'))

// app.use(express.static(__dirname + '/public'));
//Use the routes here
app.use('/api/destinations', DestinationRoutes);
app.use('/api/bookings', BookingRoutes);
app.use('/api/transports', TransportRoutes);
app.use('/api/reviews', ReviewRoutes);
app.use('/api/answers', AnswerRoutes)
app.use('/api/users', UserRoutes)
app.use('/api/questions', QuestionRoutes)
app.use('/api/trips', TripRoutes)
app.use('/api/routes', RouteRoutes)
app.use('/api/hotels', HotelRoutes)


app.get('/api/config/paypal', (req, res) => res.send(process.env.PAYPAL_CLIENT_ID) )



//Error handling on server side
app.use((req, res, next) => {
    const error = new HttpError('Could not find this route.', 404);
    throw error;
  });
  
app.use((error, req, res,next) => {
    if(res.headerSent) {
        return next(error);
    }
    res.status(error.code || 500)
    res.json({message: error.message || 'An unknown error has occurred!'});
});

//DATABASE CONNECTION HERE
connectDB();
const PORT = process.env.PORT || 4000
app.listen(PORT);
