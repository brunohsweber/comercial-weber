import { ProductsPricesQuantities } from "@prisma/client";

import { ICreateProductPriceQuantityDTO } from "../dtos/ICreateProductPriceQuantityDTO";

type ProductPriceQuantity = ProductsPricesQuantities;

interface IProductsPricesQuantitiesRepository {
  create(data: ICreateProductPriceQuantityDTO): Promise<void>;

  findByProductId(id_product: number): Promise<ProductPriceQuantity[]>;

  deleteAll(): Promise<void>;
}

export { IProductsPricesQuantitiesRepository };
