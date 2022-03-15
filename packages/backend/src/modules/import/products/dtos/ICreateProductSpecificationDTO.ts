// DTO => Data transfer object
interface ICreateProductSpecificationDTO {
  id: number;
  id_product: number;
  specification_description: string;
  specification_value: string;
}

export { ICreateProductSpecificationDTO };
