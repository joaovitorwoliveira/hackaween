export interface Item {
  id: number;
  name: string;
  price: number;
  discountPrice: number;
  expiresIn: number;
  condition?: string;
  image: string;
  quantity?: number;
}

export const products: Item[] = [
  {
    id: 1,
    name: "Leite Orgânico",
    price: 3.99,
    discountPrice: 1.99,
    expiresIn: 2,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 2,
    name: "Pão Artesanal",
    price: 3.49,
    discountPrice: 2.49,
    expiresIn: 1,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1509440159596-0249088772ff?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 3,
    name: "Tênis de corrida",
    price: 399.99,
    discountPrice: 100.0,
    expiresIn: 0,
    quantity: 1,
    condition: "Pouco usado",
    image: "/tenis_corrida.png",
  },
  {
    id: 4,
    name: "Queijo Artesanal",
    price: 5.99,
    discountPrice: 4.49,
    expiresIn: 4,
    quantity: 1,
    image: "https://images.unsplash.com/photo-1486297678162-eb2a19b0a32d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&q=80",
  },
  {
    id: 5,
    name: "Frutas Orgânicas",
    price: 4.50,
    discountPrice: 3.00,
    expiresIn: 3,
    quantity: 1,
    image: "/frutas_organicas.png",
  },
  {
    id: 6,
    name: "Vegetais Frescos",
    price: 2.99,
    discountPrice: 1.99,
    expiresIn: 2,
    quantity: 1,
    image: "/vegetais.jpg",
  },
  {
    id: 7,
    name: "Snacks Saudáveis",
    price: 4.99,
    discountPrice: 3.49,
    expiresIn: 5,
    quantity: 1,
    image: "/snacks.jpg",
  },
];

