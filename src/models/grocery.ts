import { Table, Model, Column, DataType } from "sequelize-typescript";

@Table({
  timestamps: false,
  tableName: "groceries"
})
export class GroceryModel extends Model {
    @Column({
        type: DataType.STRING,
        allowNull: false,
        primaryKey: true
    })
    id!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    name!: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    price!: string;

    // no. of units
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
        defaultValue: 0
    })
    inventoryLevel!: number
}
