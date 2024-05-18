import { Sequelize } from "sequelize-typescript";

import { OrderDetailsModel } from "../../models/order-details";
import { OrderModel } from "../../models/order";
import { UserModel } from "../../models/user";
import { GroceryModel } from "../../models/grocery";

const connection = new Sequelize({
  dialect: "mysql",
  host: process.env.MYSQL_HOST,
  username: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSOWORD,
  database: "questionPro-assessment",
  models: [
    GroceryModel,
    UserModel,
    OrderModel,
    OrderDetailsModel
  ],
});

export default connection;