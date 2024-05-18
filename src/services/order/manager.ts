import sequelize from "../../utils/sequelize/connection";
import { OrderType } from "../../types/order.type";
import { OrderModel } from "../../models/order";
import { v4 as uuidv4 } from 'uuid';
import { OrderDetailsModel } from "../../models/order-details";

/**
 * TODO move sequelize functions to DAO classes
 */
export class orderManager {
    createOrder = async (userId: string, groceryIds: string[]): Promise<OrderType | null> => {
        try {
          const result = await sequelize.transaction(async t => {
              const createdOrder = await OrderModel.create(
                {
                  id: uuidv4(),
                  userId: userId,
                },
                { transaction: t },
              );

              await OrderDetailsModel.bulkCreate(
                groceryIds.map(groceryId => {
                    return {
                        id: uuidv4(),
                        orderId: createdOrder.id,
                        groceryId: groceryId
                    }
                }),
                { transaction: t },
              );
          
              return createdOrder;
            });
          
            // the transaction has been committed successfully
            return result;
          } catch (error) {
            console.log("exc",error);
            // The transaction has already been rolled back automatically by Sequelize!
            return null;
          }
    }
}
