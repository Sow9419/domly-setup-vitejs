import { Card } from "@/components/ui/card";
import { CreditCard, Phone } from 'lucide-react';
import { PaymentDialog } from './payment-dialog';

interface PaymentMethod {
  type: string;
  label: string;
  expiry: string;
  isActive: boolean;
}

interface PaymentMethodsCardProps {
  paymentMethods: PaymentMethod[];
  onAddPaymentMethod: (method: { type: string; label: string; expiry: string }) => void;
}

export function PaymentMethodsCard({ paymentMethods, onAddPaymentMethod }: PaymentMethodsCardProps) {
  return (
    <Card className="p-6" id="payment">
      <h2 className="text-lg font-semibold mb-4">Méthode de paiement</h2>
      <div className="space-y-4">
        {paymentMethods.map((method, index) => (
          <div key={index} className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 bg-gray-50 rounded-lg">
            <div className="flex items-center gap-3 w-full sm:w-auto">
              {method.type === 'card' ? <CreditCard className="w-6 h-6 shrink-0" /> : <Phone className="w-6 h-6 shrink-0" />}
              <div className="flex-1">
                <div>{method.label}</div>
                {method.expiry && <div className="text-sm text-gray-500">Valide jusqu'au {method.expiry}</div>}
              </div>
            </div>
            <span className="text-green-600 text-sm font-medium mt-2 sm:mt-0">Actif</span>
          </div>
        ))}
        <PaymentDialog onAddPaymentMethod={onAddPaymentMethod} />
      </div>
    </Card>
  );
}