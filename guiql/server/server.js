const  express =require( 'express');
const  bodyParser =require( 'body-parser');
const  mongoose =require( 'mongoose');
const  cors = require( 'cors');
const  dotenv =require( 'dotenv');
const  helmet =require( 'helmet');
const  morgan =require( 'morgan');
const authRoutes = require('./routes/authRoutes')
const uriRoutes = require('./routes/uriRoutes')

//CONFIGURATIONS & MIDDLEWARES
dotenv.config();
const app = express();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
app.use(cors());
app.use(express.urlencoded({ extended: true }));
const URI = process.env.MONGO_URI;
const PORT = process.env.API_PORT || process.env.PORT;
mongoose.set("strictQuery", false);


//DBConnection
mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'guiQL'
  })
  .then(()=>{
    app.listen(PORT, ()=>{
        console.log(`Server is on ${PORT}`)
    });
  })
  .catch(err=>{
    console.log('db connection failed. Server not start.');
    console.error(err);
  })

// Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.use("/api/auth", authRoutes)