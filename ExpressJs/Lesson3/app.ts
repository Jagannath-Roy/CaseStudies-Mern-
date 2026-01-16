import express, { Request, Response } from "express";

const app = express();
app.use(express.json());

interface Product {
  id: string;
  name: string;
  price: number;
  instock: boolean;
}

let products: Product[] = [
  { id: "1", name: "Bananas", price: 1.5, instock: true },
  { id: "2", name: "Apples", price: 2.0, instock: false }
];

// GET all products
app.get("/products", (req: Request, res: Response) => {
  res.status(200).json(products);
});

// GET product by id
app.get("/products/:id", (req: Request, res: Response) => {
  const product = products.find(p => p.id === req.params.id);
  if (!product) return res.status(404).json({ error: "Product not found" });
  res.json(product);
});

// POST new product
app.post("/products", (req: Request, res: Response) => {
  const { name, price, instock } = req.body;
  if (!name || price === undefined || instock === undefined) {
    return res.status(400).json({ error: "Missing fields" });
  }

  const newProduct: Product = {
    id: (products.length + 1).toString(),
    name,
    price,
    instock
  };

  products.push(newProduct);
  res.status(201).json(newProduct);
});

// PUT update product
app.put("/products/:id", (req: Request, res: Response) => {
  const index = products.findIndex(p => p.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: "Product not found" });

  const { name, price, instock } = req.body;
  if (!name || price === undefined || instock === undefined) {
    return res.status(400).json({ error: "Missing fields" });
  }

  products[index] = { id: req.params.id, name, price, instock };
  res.json(products[index]);
});

// PATCH update price
app.patch("/products/:id/price", (req: Request, res: Response) => {
  const product = products.find(p => p.id === req.params.id);
  if (!product) return res.status(404).json({ error: "Product not found" });

  const { price } = req.body;
  if (typeof price !== "number" || price < 0) {
    return res.status(400).json({ error: "Invalid price" });
  }

  product.price = price;
  res.json(product);
});

// DELETE product
app.delete("/products/:id", (req: Request, res: Response) => {
  const index = products.findIndex(p => p.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: "Product not found" });

  products.splice(index, 1);
  res.sendStatus(204);
});

app.listen(3000, () => {
  console.log("Server running on http://localhost:3000");
});


app.patch("/products/:id/instock",(req:Request,res:Response)=>{
   
    const product = products.find(p=>p.id === req.params.id);
   
   const {instock} = req.body;

    if(!product){
        return res.status(404).json({error:"Product not found"});
    }

     if(typeof instock !== "boolean"){
        return res.status(400).json({error:"Invalid Stock Updation field"});
     }

     product.instock = instock;
     res.status(200).json(product);



});