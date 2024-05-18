import { GroceryInventoryLevel, GroceryType } from "../../types/grocery.type";
import { GroceryModel } from "../../models/grocery";
import { v4 as uuidv4 } from 'uuid';
import { Op } from "sequelize";

/**
 * TODO move sequelize functions to DAO classes
 */
export class groceryManager {
	getAllGroceries = async (groceryFilter: any) : Promise<GroceryType[]> => {
		// TODO accept limit from client
		let whereClause;

		if (groceryFilter.inventoryLevel == GroceryInventoryLevel.Available) {
			whereClause = {inventoryLevel: {[Op.gt]: 0}}
		}
		
		return await GroceryModel.findAll({
			where: whereClause,
			limit: 10
		})
	}

	createGrocery = async (grocery: GroceryType) : Promise<GroceryType> => {
		grocery.id = uuidv4();
		
		await GroceryModel.create({...grocery});

		return grocery;
	}

	deleteGrocery = async (id: string): Promise<GroceryType | null> => {
		const grocery = await GroceryModel.findByPk(id);

		if (!grocery) {
			return null;
		}

		await GroceryModel.destroy({
			where: {id: id}
		});

		return {
			id: grocery?.id,
			name: grocery?.name,
			price: grocery?.price,
			inventoryLevel: grocery?.inventoryLevel!
		};
	}

	updateGrocery = async (id: string, paylod: GroceryType): Promise<GroceryType | null> => {
		let grocery = await GroceryModel.findByPk(id);

		if (!grocery) {
			return null;
		}

		await GroceryModel.update(paylod, {
			where: {id: id}
		});

		const updatedGrocery = await GroceryModel.findByPk(id);

		return {
			id: updatedGrocery?.id!,
			name: updatedGrocery?.name!,
			price: updatedGrocery?.price!,
			inventoryLevel: updatedGrocery?.inventoryLevel!
		};
	}
}
