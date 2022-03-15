// DTO => Data transfer object
interface ICreateProductPriceQuantityDTO {
  id: number;
  id_product: number;
  quantity_initial: number;
  quantity_final: number;
  sale_price: number;
  percentage_discount: number;
}

export { ICreateProductPriceQuantityDTO };
