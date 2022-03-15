import { ICreateProductDTO } from "@modules/import/products/dtos/ICreateProductDTO";
import { IProductsRepository } from "@modules/import/products/repositories/IProductsRepository";
import { prisma } from "@shared/infra/prisma/prismaClient";

import { Product } from "../entities/Product";

class ProductsRepository implements IProductsRepository {
  private repository = prisma.products;

  constructor() {
    this.repository = prisma.products;
  }

  public async create(data: ICreateProductDTO): Promise<void> {
    await this.repository.create({
      data: {
        id: data.id,
        description: data.description,
        information: data.information,
        brand: data.brand,
        category: data.category,
        code_1: data.code_1,
        code_2: data.code_2,
        ncm: data.ncm,
        cest: data.cest,
        code_integration: data.code_integration,
        id_integration: data.id_integration,
        localization: data.localization,
        multiple_of_sale: data.multiple_of_sale,
        sale_unit: data.sale_unit,
        sale_unit_description: data.sale_unit_description,
        physical_stock: data.physical_stock,
        reservations_stock: data.reservations_stock,
        available_stock: data.available_stock,
        promotion_price: data.promotion_price,
        has_image: data.has_image,
        is_promotion: data.is_promotion
      }
    });
  }

  public async findByCategory(category: string): Promise<Product[]> {
    const result = await this.repository.findMany({
      where: {
        category
      }
    });

    return result;
  }

  public async findById(id: number): Promise<Product> {
    const result = await this.repository.findFirst({
      where: {
        id
      }
    });

    return result;
  }

  public async findByCategoryAndId(
    category: string,
    id: number
  ): Promise<Product> {
    const result = await this.repository.findFirst({
      where: {
        id,
        category
      }
    });

    return result;
  }

  public async deleteAll(): Promise<void> {
    await this.repository.deleteMany();
  }

  // Métodos a seguir devem ser implantados com o ElasticSearch
  public async findByTerm(term: string): Promise<Product[]> {
    throw new Error("Method not implemented.");
  }
  public async findByCategoryAndTerm(
    category: string,
    term: string
  ): Promise<Product[]> {
    throw new Error("Method not implemented.");
  }
}

export { ProductsRepository };
