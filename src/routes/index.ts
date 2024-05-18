import express from "express";

import { groceryControllerInstance } from "../controllers/grocery.controller";
import { orderControllerInstance } from "../controllers/order.controller";

export const router = express.Router();

/**
 * used by admin - View existing grocery items
 * used by User - View the list of available grocery items - send inventoryLevel=all/available in query param
 */
router.get("/groceries", groceryControllerInstance.getAllGroceries);

/**
 * Admin - Add new grocery items to the system
 */
router.post("/grocery", groceryControllerInstance.createGrocery);

/**
 * Admin - Remove grocery items from the system
 */
router.delete("/groceries/:id", groceryControllerInstance.deleteGrocery);

/**
 * Admin - Update details (e.g., name, price) of existing grocery items
 */
router.put("/groceries/:id", groceryControllerInstance.updateGrocery);

/**
 * User - Ability to book multiple grocery items in a single order
 */
router.post("/users/:user_id/order", orderControllerInstance.createOrder);
