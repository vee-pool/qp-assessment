import {StatusCodes} from "http-status-codes";
import {Request, Response} from "express";

import {groceryManager} from "../services/grocery/manager";

class groceryController {
    getAllGroceries = async (req: Request, res: Response): Promise<Response> => {
        try {
            const groceries = await new groceryManager().getAllGroceries({
                ...req.query
            });

            if (groceries.length === 0) {
                return res.status(StatusCodes.NOT_FOUND).json({});
            }
    
            return res.status(StatusCodes.OK).json(groceries);
        } catch (error) {
            console.log(error);
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({});
        }
    }

    createGrocery = async (req: Request, res: Response): Promise<Response> => {
        try {
            const createdGrocery = await new groceryManager().createGrocery({
                ...req.body
            });
    
            return res.status(StatusCodes.OK).json(createdGrocery);
        } catch (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({});
        }
    }

    deleteGrocery = async (req: Request, res: Response): Promise<Response> => {
        try {
            const deletedGrocery = await new groceryManager().deleteGrocery(req.params.id);

            if (deletedGrocery) {
                return res.status(StatusCodes.OK).json(deletedGrocery);
            } else {
                return res.status(StatusCodes.NOT_FOUND).json({});
            }
        } catch (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({});
        }
    }

    updateGrocery = async (req: Request, res: Response): Promise<Response> => {
        try {
            const updatedGrocery = await new groceryManager().updateGrocery(req.params.id, req.body);

            if (updatedGrocery) {
                return res.status(StatusCodes.OK).json(updatedGrocery);
            } else {
                return res.status(StatusCodes.NOT_FOUND).json({});
            }
        } catch (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({});
        }
    }
}

export const groceryControllerInstance = new groceryController();

