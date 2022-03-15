import { ICreateProductPriceQuantityDTO } from "@modules/import/products/dtos/ICreateProductPriceQuantityDTO";
import { IProductsPricesQuantitiesRepository } from "@modules/import/products/repositories/IProductsPricesQuantitiesRepository";
import { prisma } from "@shared/infra/prisma/prismaClient";

import { ProductPriceQuantity } from "../entities/ProductPriceQuantity";

class ProductsPricesQuantitiesRepository
  // eslint-disable-next-line prettier/prettier
  implements IProductsPricesQuantitiesRepository {
  private repository = prisma.productsPricesQuantities;

  constructor() {
    this.repository = prisma.productsPricesQuantities;
  }

  public async create(data: ICreateProductPriceQuantityDTO): Promise<void> {
    await this.repository.create({
      data: {
        id: data.id,
        id_product: data.id_product,
        quantity_initial: data.quantity_initial,
        quantity_final: data.quantity_final,
        sale_price: data.sale_price,
        percentage_discount: data.percentage_discount
      }
    });
  }

  public async findByProductId(
    id_product: number
  ): Promise<ProductPriceQuantity[]> {
    const result = await this.repository.findMany({
      where: {
        id_product
      }
    });

    return result;
  }

  public async deleteAll(): Promise<void> {
    await this.repository.deleteMany();
  }
}

export { ProductsPricesQuantitiesRepository };
