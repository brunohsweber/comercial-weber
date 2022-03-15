import { ProductsCategories } from "@prisma/client";

import { ICreateProductCategoryDTO } from "../dtos/ICreateProductCategoryDTO";

type ProductsCategory = ProductsCategories;

interface IProductsCategoriesRepository {
  create(data: ICreateProductCategoryDTO): Promise<void>;

  list(): Promise<ProductsCategory[]>;

  deleteAll(): Promise<void>;
}

export { IProductsCategoriesRepository };
