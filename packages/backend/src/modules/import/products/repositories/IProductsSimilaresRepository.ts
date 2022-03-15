import { ICreateProductSimilarDTO } from "../dtos/ICreateProductSimilarDTO";

interface IProductsSimilaresRepository {
  create(data: ICreateProductSimilarDTO): Promise<void>;

  deleteAll(): Promise<void>;
}

export { IProductsSimilaresRepository };
