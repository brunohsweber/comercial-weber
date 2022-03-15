// DTO => Data transfer object
interface ICreateProductSuggestionDTO {
  id: number;
  id_product: number;
  id_product_suggested: number;
  comment?: string;
}

export { ICreateProductSuggestionDTO };
