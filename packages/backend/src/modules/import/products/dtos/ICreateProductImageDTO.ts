// DTO => Data transfer object
interface ICreateProductImageDTO {
  id: number;
  id_product: number;
  file_name: string;
  file_path: string;
  sequence: number;
}

export { ICreateProductImageDTO };
