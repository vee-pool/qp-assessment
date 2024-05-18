import "reflect-metadata";
import * as dotevnv from "dotenv"
dotevnv.config()
import express from "express"
import cors from "cors"
import helmet from "helmet"

import connection from "./src/utils/sequelize/connection";

import { router } from "./src/routes";

if (!process.env.PORT) {
    console.log(`No port value specified...`)
}

const PORT = parseInt(process.env.PORT as string, 10)

const app = express();

app.use(express.json())
app.use(express.urlencoded({extended : true}))
app.use(cors())
app.use(helmet())
app.use('/api/v1', router);

const start = async (): Promise<void> => {
    try {
      await connection.sync({
        force: true // for development
      });
      app.listen(PORT, () => {
        console.log(`Server started on port ${PORT}`);
      });
    } catch (error) {
      console.error(error);
      process.exit(1);
    }
  };
  
  void start();
