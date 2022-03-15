import { ICreateProductSimilarGroupDTO } from "../dtos/ICreateProductSimilarGroupDTO";

interface IProductsSimilaresGroupsRepository {
  create(data: ICreateProductSimilarGroupDTO): Promise<void>;

  deleteAll(): Promise<void>;
}

export { IProductsSimilaresGroupsRepository };
