import { Table, Model, Column, DataType, ForeignKey } from "sequelize-typescript";
import { UserModel } from "./user";

@Table({
  timestamps: false,
  tableName: "orders"
})
export class OrderModel extends Model {
    @Column({
        type: DataType.STRING,
        allowNull: false,
        primaryKey: true
    })
    id!: string;

    @ForeignKey(() => UserModel)
    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    userId!: string;
}

