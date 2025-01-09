'use client'

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { CreditCard, Phone } from 'lucide-react'

interface PaymentDialogProps {
  onAddPaymentMethod: (method: { type: string, label: string, expiry?: string }) => void
}

export function PaymentDialog({ onAddPaymentMethod }: PaymentDialogProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [paymentType, setPaymentType] = useState('card')
  const [isOpen, setIsOpen] = useState(false)

  async function handleSubmit(formData: FormData) {
    setIsSubmitting(true)
    try {
      const result = await addPaymentMethod(formData)
      if (result.success) {
        const newMethod = {
          type: formData.get('type') as string,
          label: formData.get('type') === 'card' ? 'Carte Bancaire' : 'Orange Money',
          expiry: formData.get('type') === 'card' ? formData.get('expiry') as string : undefined
        }
        onAddPaymentMethod(newMethod)
        setIsOpen(false)
      }
    } catch (error) {
      console.error(error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="secondary" className="w-full">
          Ajouter un mode paiement
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Ajouter un mode de paiement</DialogTitle>
        </DialogHeader>
        <form action={handleSubmit} className="space-y-4">
          <RadioGroup
            defaultValue="card"
            name="type"
            className="grid grid-cols-2 gap-4"
            onValueChange={setPaymentType}
          >
            <div>
              <RadioGroupItem value="card" id="card" className="peer sr-only" />
              <Label
                htmlFor="card"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                <CreditCard className="mb-3 h-6 w-6" />
                Carte Bancaire
              </Label>
            </div>
            <div>
              <RadioGroupItem value="orange" id="orange" className="peer sr-only" />
              <Label
                htmlFor="orange"
                className="flex flex-col items-center justify-between rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground peer-data-[state=checked]:border-primary [&:has([data-state=checked])]:border-primary"
              >
                <Phone className="mb-3 h-6 w-6" />
                Orange Money
              </Label>
            </div>
          </RadioGroup>

          {paymentType === 'card' ? (
            <>
              <div className="space-y-2">
                <Label htmlFor="number">Numéro de carte</Label>
                <Input id="number" name="number" placeholder="4242 4242 4242 4242" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="expiry">Date d'expiration</Label>
                <Input id="expiry" name="expiry" placeholder="MM/AA" required />
              </div>
              <div className="space-y-2">
                <Label htmlFor="cvc">CVC</Label>
                <Input id="cvc" name="cvc" placeholder="123" required />
              </div>
            </>
          ) : (
            <div className="space-y-2">
              <Label htmlFor="phone">Numéro Orange Money</Label>
              <Input id="phone" name="number" placeholder="+221 XX XXX XX XX" required />
            </div>
          )}

          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? 'Traitement...' : 'Ajouter'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

async function addPaymentMethod(formData: FormData) {
  const type = formData.get('type')
  const number = formData.get('number')
  const expiry = formData.get('expiry')
  
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  return {
    success: true,
    message: `Méthode de paiement ${type} ajoutée avec succès`
  }
}