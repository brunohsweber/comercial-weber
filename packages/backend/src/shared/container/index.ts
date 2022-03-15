import { container } from "tsyringe";

import { ProductsCategoriesRepository } from "@modules/import/products/infra/prisma/repositories/ProductsCategoriesRepository";
import { ProductsRepository } from "@modules/import/products/infra/prisma/repositories/ProductsRepository";
import { ProductsSimilaresGroupsRepository } from "@modules/import/products/infra/prisma/repositories/ProductsSimilaresGroupsRepository";
import { ProductsSimilaresRepository } from "@modules/import/products/infra/prisma/repositories/ProductsSimilaresRepository";
import { ProductsSpecificationsRepository } from "@modules/import/products/infra/prisma/repositories/ProductsSpecificationsRepository";
import { IProductsCategoriesRepository } from "@modules/import/products/repositories/IProductsCategoriesRepository";
import { IProductsImagesRepository } from "@modules/import/products/repositories/IProductsImagesRepository";
import { IProductsPricesQuantitiesRepository } from "@modules/import/products/repositories/IProductsPricesQuantitiesRepository";
import { IProductsRepository } from "@modules/import/products/repositories/IProductsRepository";
import { IProductsSimilaresGroupsRepository } from "@modules/import/products/repositories/IProductsSimilaresGroupsRepository";
import { IProductsSimilaresRepository } from "@modules/import/products/repositories/IProductsSimilaresRepository";
import { IProductsSpecificationsRepository } from "@modules/import/products/repositories/IProductsSpecificationsRepository";
import { IProductsSuggestionsRepository } from "@modules/import/products/repositories/IProductsSuggestionsRepository";
import { ProductsPricesQuantitiesRepository } from "@modules/import/products/infra/prisma/repositories/ProductsPricesQuantitiesRepository";
import { ProductsSuggestionsRepository } from "@modules/import/products/infra/prisma/repositories/ProductsSuggestionsRepository";
import { ProductsImagesRepository } from "@modules/import/products/infra/prisma/repositories/ProductsImagesRepository";
import { HandleFiles } from "@shared/utils/HandleFiles";
import { SaveJsonFile } from "@modules/import/products/utils/SaveJsonFile";

container.registerSingleton<IProductsRepository>(
  "ProductsRepository",
  ProductsRepository
);

container.registerSingleton<IProductsCategoriesRepository>(
  "ProductsCategoriesRepository",
  ProductsCategoriesRepository
);

container.registerSingleton<IProductsImagesRepository>(
  "ProductsImagesRepository",
  ProductsImagesRepository
);

container.registerSingleton<IProductsPricesQuantitiesRepository>(
  "ProductsPricesQuantitiesRepository",
  ProductsPricesQuantitiesRepository
);

container.registerSingleton<IProductsSimilaresGroupsRepository>(
  "ProductsSimilaresGroupsRepository",
  ProductsSimilaresGroupsRepository
);

container.registerSingleton<IProductsSimilaresRepository>(
  "ProductsSimilaresRepository",
  ProductsSimilaresRepository
);

container.registerSingleton<IProductsSpecificationsRepository>(
  "ProductsSpecificationsRepository",
  ProductsSpecificationsRepository
);

container.registerSingleton<IProductsSuggestionsRepository>(
  "ProductsSuggestionsRepository",
  ProductsSuggestionsRepository
);

container.registerSingleton<HandleFiles>(
  "HandleFiles",
  HandleFiles
)

container.registerSingleton<SaveJsonFile>(
  "SaveJsonFile",
  SaveJsonFile
)