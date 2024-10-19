export interface Item {
  id: number;
  image: string;
  name: string;
  description?: string;
  fullPrice: number;
  discountedPrice: number;
  companyId: number;
  stock: number;
  category?: string;
  condition?: string;
  expiresIn: number;
  quantity?: number;
}

export const products: Item[] = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
    name: "Leite Orgânico",
    description: "Leite fresco e saudável",
    fullPrice: 3.99,
    discountedPrice: 1.99,
    companyId: 1,
    stock: 1,
    category: "Laticínios",
    expiresIn: 2,
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
    name: "Pão Artesanal",
    description: "Pão fresco e crocante",
    fullPrice: 3.49,
    discountedPrice: 2.49,
    companyId: 2,
    stock: 3,
    category: "Padaria",
    expiresIn: 1,
  },
  {
    id: 3,
    image: "/tenis_corrida.png",
    name: "Tênis de corrida",
    description: "Tênis de corrida profissional",
    fullPrice: 399.99,
    discountedPrice: 100.0,
    companyId: 3,
    stock: 1,
    category: "Esportes",
    condition: "Pequenos arranhões",
    expiresIn: 0,
  },
  {
    id: 4,
    image:
      "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
    name: "Queijo Artesanal",
    description: "Queijo fresco e saboroso",
    fullPrice: 5.99,
    discountedPrice: 4.49,
    companyId: 1,
    stock: 2,
    category: "Laticínios",
    expiresIn: 4,
  },
];
