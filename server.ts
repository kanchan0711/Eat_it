// import { env } from "./src/env";
// import { App } from "./src/app";
// import { __middleware } from "./src/middleware";
// import { allRoutes } from "./src/routes";

// const dotenv = require('dotenv');
// dotenv.config()

// const PORT: number = env().port; 
// const app = new App(PORT, __middleware, allRoutes);

// try {
//   const {user, pw, name, account} = env().db;
//   const DB_URI = env().db.uri(user,pw,name,account);
//   app.mongoDB(DB_URI);
// } catch(e) {
//   console.log(e);
//   console.log("Failed to create DB Connection string");
// }

// app.listen();
import { env } from "./src/environment/env";
import { App } from "./src/app";
import { __middleware } from "./src/middleware";
import { allRoutes } from "./src/routes";
const dotenv = require('dotenv');
dotenv.config()
 const PORT: number = env().port;
const app = new App(PORT, __middleware, allRoutes);

try {
    
  app.mongoDB(env().db);

} catch (e) {
    console.log(e);
    console.log("Failed to connect Database in String ")
}
// mongoose
//     .connect({})
//     .then(() => {
//         console.log('Database Connected');
//         StartServer();
//     })
//     .catch((error) => {
//         console.log(error);
//     });
// const StartServer = () => {
//   router.use((req, res, next) => {
//       // Log the request
//       console.log(`Incomming - METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`);

//       res.on('finish', () => {
//           //Log into response
//           console.log(`Result - METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}] - STATUS: [${res.statusCode}]`);
//       });

//       next();
//   })}

app.listen();