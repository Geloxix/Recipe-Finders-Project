import { createContext } from "react";
import { Recipe } from "./data";

export const FavoriteContext = createContext<Recipe | undefined>(undefined);
