


// Get all products:

import { executeSql } from "../2 - Utils/dal";
import { ProductType } from "../4 - Models/ProductModel";

export const getAllProductsLogic = async (): Promise<ProductType[]> => {

    // create the query
    const sql = `
    SELECT ProductID AS id,
    ProductName AS name,
    UnitPrice AS price,
    UnitsInStock as stock
    FROM products
    `

    // Execute the query
    const products = await executeSql(sql);

    // return the products
    return products;
}