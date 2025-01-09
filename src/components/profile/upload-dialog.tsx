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
import { Upload } from 'lucide-react'

interface UploadDialogProps {
  onImageUpload: (imageUrl: string) => void
}

export function UploadDialog({ onImageUpload }: UploadDialogProps) {
  const [isUploading, setIsUploading] = useState(false)
  const [isOpen, setIsOpen] = useState(false)

  async function handleSubmit(formData: FormData) {
    setIsUploading(true)
    try {
      const result = await uploadProfileImage(formData)
      if (result.success) {
        onImageUpload(result.imageUrl)
        setIsOpen(false)
      }
    } catch (error) {
      console.error(error)
    } finally {
      setIsUploading(false)
    }
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className="absolute bottom-0 right-0 bg-white rounded-full shadow">
          <Upload className="w-4 h-4" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Modifier la photo de profil</DialogTitle>
        </DialogHeader>
        <form action={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="image">Sélectionner une image</Label>
            <Input id="image" name="image" type="file" accept="image/*" required />
          </div>
          <Button type="submit" disabled={isUploading}>
            {isUploading ? 'Chargement...' : 'Télécharger'}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
}

async function uploadProfileImage(formData: FormData) {
  const file = formData.get('image') as File
  await new Promise(resolve => setTimeout(resolve, 1000))
  return {
    success: true,
    imageUrl: `/placeholder.svg?height=80&width=80&text=${file.name}`
  }
}