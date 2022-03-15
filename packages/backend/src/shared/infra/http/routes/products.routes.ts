import { Request, Response, Router } from "express";

const productsRoutes = Router();

productsRoutes.get("/", (request: Request, response: Response) => {
  return response.json({ message: "Home products" });
})

export { productsRoutes };