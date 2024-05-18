export type GroceryType = {
	id : string,
	name : string,
    price : string,
	inventoryLevel: number // no. of units
}

export enum GroceryInventoryLevel {
	Available = 1,
	Sold_Out
}
