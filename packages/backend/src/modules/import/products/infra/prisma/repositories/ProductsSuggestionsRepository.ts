import { ICreateProductSuggestionDTO } from "@modules/import/products/dtos/ICreateProductSuggestionDTO";
import { IProductsSuggestionsRepository } from "@modules/import/products/repositories/IProductsSuggestionsRepository";
import { prisma } from "@shared/infra/prisma/prismaClient";

import { ProductSuggestion } from "../entities/ProductSuggestion";

class ProductsSuggestionsRepository implements IProductsSuggestionsRepository {
  private repository = prisma.productsSuggestions;

  constructor() {
    this.repository = prisma.productsSuggestions;
  }

  public async findByProductId(
    id_product: number
  ): Promise<ProductSuggestion[]> {
    const result = await this.repository.findMany({
      where: {
        id_product
      }
    });

    return result;
  }

  public async create(data: ICreateProductSuggestionDTO): Promise<void> {
    await this.repository.create({
      data: {
        id: data.id,
        id_product: data.id_product,
        id_product_suggested: data.id_product_suggested,
        comment: data.comment
      }
    });
  }

  public async deleteAll(): Promise<void> {
    await this.repository.deleteMany();
  }
}

export { ProductsSuggestionsRepository };
