const  express = require( 'express');
const  bodyParser =require( 'body-parser');
const  mongoose =require( 'mongoose');
const  cors = require( 'cors');
const  dotenv =require( 'dotenv');
const  helmet =require( 'helmet');
const  morgan =require( 'morgan');
const authRoutes = require('./routes/authRoutes')
const uriRoutes = require('./routes/uriRoutes')
const { SecretManagerServiceClient } = require('@google-cloud/secret-manager');
const verfiyJWT = require('./middleware/verifyJWT')
const cookieParser = require('cookie-parser')
const verifyRefreshToken = require('./middleware/verifyRefresh')

//CONFIGURATIONS & MIDDLEWARES
dotenv.config();
const app = express();
const secretClient = new SecretManagerServiceClient();
app.use(express.json());
app.use(helmet());
app.use(helmet.crossOriginResourcePolicy({policy: "cross-origin"}));
app.use(morgan("common"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : false}));
app.use(cors());
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }));
mongoose.set("strictQuery", false);

// Retrieve the MongoDB URI from Google Secret Manager
// const getSecret = async (secretsName) => {
//   const name = `projects/441105779841/secrets/${secretsName}/versions/1`
//   const [version] = await secretClient.accessSecretVersion({ name })
//   const payload = version.payload.data.toString();
//   return payload;
// }
// // Connect to MongoDB using the retrieved URI
// async function connectToMongo() {
//   const secretsName = 'guiQLmongo';
//   const URI = await getSecret(secretsName);
//   return mongoose.connect(URI, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//     dbName: 'guiQL',
//   });
// }
const URI = process.env.MONGO_URI;
const PORT = process.env.API_PORT || 3000;

// Connect to MongoDB and start the server
// connectToMongo()
//   .then(() => {
//     app.listen(PORT, () => {
//       console.log(`Server is on ${PORT}`);
//     });
//   })
//   .catch((err) => {
//     console.log('db connection failed. Server not start.');
//     console.error(err);
//   });
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
    console.log('db connection failed. Server failed to start.');
    console.log(err)
  })

// Global error handler
app.use((err, req, res, next) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error occurred' },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  return res.status(errorObj.status).json(errorObj.message);
});

//unprotected routes
app.use("/api/auth", authRoutes)
app.use("/refresh", require("./routes/refreshRoute"))
app.use("/logout", require('./routes/logoutRoute') )
app.get("/checkExistingUser", verifyRefreshToken, (req,res)=>{
  res.json("user is valid and logged in")
})

//protected routes
app.use(verfiyJWT)
app.use('/uri', uriRoutes)

// module.exports = app.listen(PORT)