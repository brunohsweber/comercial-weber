// DTO => Data transfer object
interface ICreateProductDTO {
  id: number;
  description: string;
  information: string | "";
  brand: string | "";
  code_1: string | "";
  code_2: string | "";
  category: string;
  id_integration: number | null;
  code_integration: string | "";
  ncm: string;
  cest: string | "";
  sale_unit: string;
  sale_unit_description: string;
  multiple_of_sale: number;
  physical_stock: number;
  reservations_stock: number;
  available_stock: number;
  localization: string | "";
  is_promotion: boolean | false;
  promotion_price: number | null;
  has_image: boolean | false;
}

export { ICreateProductDTO };
