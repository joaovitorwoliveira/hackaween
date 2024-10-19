export interface ICompany {
    id: number;
    cnpj: string;
    name: string;
    email: string;
    phone: string;
    type: string;
    address?: string
}

export const companies: ICompany[] = [
    {
      id: 1,
      cnpj: "12.345.678/0001-90",
      name: "Cafeteria Sabor do Dia",
      email: "contato@sabordodia.com.br",
      phone: "(11) 91234-5678",
      type: "Cafeteria",
      address: "Rua da Alegria, 123, São Paulo - SP"
    },
    {
      id: 2,
      cnpj: "98.765.432/0001-01",
      name: "Restaurante Delícias da Terra",
      email: "info@deliciasdaterra.com.br",
      phone: "(21) 99876-5432",
      type: "Restaurante",
      address: "Avenida das Flores, 456, Rio de Janeiro - RJ"
    },
    {
      id: 3,
      cnpj: "11.222.333/0001-55",
      name: "Mercado Verde",
      email: "atendimento@mercadoverde.com.br",
      phone: "(31) 91234-1234",
      type: "Supermercado",
      address: "Praça da Paz, 789, Belo Horizonte - MG"
    },
    {
      id: 4,
      cnpj: "44.555.666/0001-77",
      name: "Lanchonete Rápido e Prático",
      email: "contato@rapidoepratico.com.br",
      phone: "(41) 99876-1234",
      type: "Lanchonete",
      address: "Rua do Trabalho, 321, Curitiba - PR"
    },
    {
      id: 5,
      cnpj: "22.333.444/0001-88",
      name: "Clube da Música",
      email: "info@clubedamusica.com.br",
      phone: "(51) 98765-4321",
      type: "Entretenimento",
      address: "Avenida da Música, 654, Porto Alegre - RS"
    },
    {
      id: 6,
      cnpj: "55.666.777/0001-99",
      name: "Livraria Letras e Cores",
      email: "contato@letrasecores.com.br",
      phone: "(61) 91234-5678",
      type: "Livraria",
      address: "Rua das Letras, 234, Brasília - DF"
    }
  ];
  