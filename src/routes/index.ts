import express from "express";

import { groceryControllerInstance } from "../controllers/grocery.controller";
import { orderControllerInstance } from "../controllers/order.controller";

export const router = express.Router();

/**
 * Admin - View existing grocery items
 * User - View the list of available grocery items - send inventoryLevel=1 in query param
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
 * Admin - Manage inventory levels of grocery items
 */
router.put("/groceries/:id", groceryControllerInstance.updateGrocery);

/**
 * User - Ability to book multiple grocery items in a single order
 */
router.post("/users/:user_id/order", orderControllerInstance.createOrder);
