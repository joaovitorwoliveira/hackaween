import { useState } from "react";
import { Button } from "./ui/button";

export default function SelectDeliveryType() {
  const [selectedDelivery, setSelectedDelivery] = useState<string>("");

  const handleDeliveryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedDelivery(event.target.value);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="space-y-4">
        <div className="flex items-center">
          <input
            type="radio"
            id="pickup"
            name="deliveryType"
            value="pickup"
            checked={selectedDelivery === "pickup"}
            onChange={handleDeliveryChange}
            className="mr-2"
          />
          <label htmlFor="pickup" className="text-sm">
            Retirar no local (Grátis)
          </label>
        </div>

        <div className="flex items-center">
          <input
            type="radio"
            id="delivery"
            name="deliveryType"
            value="delivery"
            checked={selectedDelivery === "delivery"}
            onChange={handleDeliveryChange}
            className="mr-2"
          />
          <label htmlFor="delivery" className="text-sm">
            No meu local (R$8.00)
          </label>
        </div>
      </div>

      <div className="mt-8">
        <p className="text-sm">
          Tipo de entrega selecionado:{" "}
          <span className="font-bold">
            {selectedDelivery === "pickup"
              ? "Retirar no local"
              : selectedDelivery === "delivery"
              ? "No meu local"
              : "Nenhum"}
          </span>
        </p>
      </div>

      <Button className="mt-4">Finalizar compra</Button>
    </div>
  );
}
