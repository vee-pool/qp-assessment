import { Table, Model, Column, DataType, ForeignKey } from "sequelize-typescript";
import { OrderModel } from "./order";
import { GroceryModel } from "./grocery";

@Table({
  timestamps: false,
  tableName: "order_details"
})
export class OrderDetailsModel extends Model {
    @Column({
        type: DataType.STRING,
        allowNull: false,
        primaryKey: true
    })
    id!: string;

    @ForeignKey(() => OrderModel)
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    orderId!: string;

    @ForeignKey(() => GroceryModel)
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    groceryId!: string;
}
