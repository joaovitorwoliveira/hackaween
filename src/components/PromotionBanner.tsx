import { AlertCircle } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function PromotionBanner() {
  return (
    <Alert variant="default" className="mb-8">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Aproveite as principais ofertas!</AlertTitle>
      <AlertDescription>
        Ganhe 20% de desconto em todos os produtos da loja na sua primeira
        compra.
      </AlertDescription>
    </Alert>
  );
}
