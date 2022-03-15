import { ICreateProductSuggestionDTO } from "../dtos/ICreateProductSuggestionDTO";
import { ProductSuggestion } from "../infra/prisma/entities/ProductSuggestion";

interface IProductsSuggestionsRepository {
  create(data: ICreateProductSuggestionDTO): Promise<void>;

  findByProductId(id_product: number): Promise<ProductSuggestion[]>;

  deleteAll(): Promise<void>;
}

export { IProductsSuggestionsRepository };
