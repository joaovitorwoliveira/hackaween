import { AlertCircle } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function PromotionBanner() {
  return (
    <Alert variant="default" className="mb-8">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Special Offer!</AlertTitle>
      <AlertDescription>
        Get 20% off on all orders over $50 with code SAVE20. Limited time offer!
      </AlertDescription>
    </Alert>
  );
}
