import {StatusCodes} from "http-status-codes";
import {Request, Response} from "express";

import {orderManager} from "../services/order/manager";

class orderController {
    createOrder = async (req: Request, res: Response): Promise<Response> => {
        try {
            const createdOrder = await new orderManager().createOrder(req.params.user_id, req.body.grocery_ids);
    
            return res.status(StatusCodes.OK).json(createdOrder);
        } catch (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({});
        }
    }
}

export const orderControllerInstance = new orderController();
