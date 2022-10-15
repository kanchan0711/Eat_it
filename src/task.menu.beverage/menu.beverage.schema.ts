import { Document, model, Schema } from "mongoose";
import { z } from 'zod';
export const BeverageValidator = z.object({
     name: z.string().min(2).max(50).trim(),
     description: z.string().min(10),
     price: z.number().max(5).min(1),
     Quantity: z.string().min(1).max(10),
     itemID: z.number().min(2).max(20),
     isDeleted: z.boolean().default(false).optional(),
     
        });

export type Beverage = z.infer<typeof BeverageValidator>;

export interface IBeverage extends Document, Beverage {}

const BeverageSchema = new Schema<IBeverage>({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    Quantity: {
        type: String,
        required: true,
    },
    itemID: {
        type: Number,
        required: true,
    },
    isDeleted: {
        type: Boolean, 
        default: false,
    }
}, {
    timestamps: true,
    versionKey: false
});

export const Beverage = model<IBeverage>("Beverage", BeverageSchema);