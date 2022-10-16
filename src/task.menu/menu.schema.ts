import { Document, model, Schema } from "mongoose";
import { z } from 'zod';

const category_enum = [ 
    "Starter", "Main course", "Beverage", "Desert", "combo", 
 ] as const;

export const menuValidator = z.object({
     name: z.string().min(2).max(50).trim(),
     category: z.enum(category_enum).default("Starter").optional(),
     description: z.string().min(10),
     price: z.number().max(5).min(1),
     Quantity: z.string().min(2).max(20),
     isDeleted: z.boolean().default(false).optional(),
     
        });

export type menu = z.infer<typeof menuValidator>;

export interface IMenu extends Document, menu {}

const menuSchema = new Schema<IMenu>({
    name: {
        type: String,
        required: true,
    },
    category: {
        type: category_enum,
        default:"Starter"
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
    isDeleted: {
        type: Boolean, 
        default: false,
    }
}, {
    timestamps: true,
    versionKey: false
});

export const menu = model<IMenu>("menu", menuSchema);