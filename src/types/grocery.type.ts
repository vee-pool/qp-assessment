export type GroceryType = {
	id : string,
	name : string,
    price : string,
	inventoryLevel: number // no. of units
}

export enum GroceryInventoryLevel {
	Available = 1, // inventoryLevel > 0
	Sold_Out // inventoryLevel 0
}
