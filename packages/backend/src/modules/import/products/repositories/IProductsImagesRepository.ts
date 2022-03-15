import { ProductsImages } from "@prisma/client";

import { ICreateProductImageDTO } from "../dtos/ICreateProductImageDTO";

type ProductImages = ProductsImages;

interface IProductsImagesRepository {
  create(data: ICreateProductImageDTO): Promise<void>;

  findByProductId(id_product: number): Promise<ProductImages[]>;

  deleteAll(): Promise<void>;
}

export { IProductsImagesRepository };
