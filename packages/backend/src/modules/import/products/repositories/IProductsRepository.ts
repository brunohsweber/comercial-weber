import { Products } from "@prisma/client";

import { ICreateProductDTO } from "../dtos/ICreateProductDTO";

type Product = Products;

interface IProductsRepository {
  create(data: ICreateProductDTO): Promise<void>;

  findById(id: number): Promise<Product>;

  findByTerm(term: string): Promise<Product[]>;

  findByCategory(category: string): Promise<Product[]>;

  findByCategoryAndId(category: string, id: number): Promise<Product>;

  findByCategoryAndTerm(category: string, term: string): Promise<Product[]>;

  deleteAll(): Promise<void>;
}

export { IProductsRepository };
