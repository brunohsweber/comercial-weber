import { ICreateProductSpecificationDTO } from "../dtos/ICreateProductSpecificationDTO";
import { ProductSpecification } from "../infra/prisma/entities/ProductSpecification";

interface IProductsSpecificationsRepository {
  create(data: ICreateProductSpecificationDTO): Promise<void>;

  findByProductId(id_product: number): Promise<ProductSpecification[]>;

  deleteAll(): Promise<void>;
}

export { IProductsSpecificationsRepository };
