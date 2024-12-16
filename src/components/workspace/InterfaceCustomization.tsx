import { Plus } from "lucide-react";

export const InterfaceCustomization = () => (
  <div className="space-y-4">
    <h2 className="text-lg font-semibold">Personnalisez votre interface</h2>
    <div className="flex flex-wrap gap-2">
      <button
        type="button"
        className="w-8 h-8 rounded-full bg-[#9b87f5]"
      />
      <button
        type="button"
        className="w-8 h-8 rounded-full bg-[#7E69AB]"
      />
      <button
        type="button"
        className="w-8 h-8 rounded-full bg-[#8E9196]"
      />
      <button
        type="button"
        className="w-8 h-8 rounded-full border-2 border-dashed border-gray-300 flex items-center justify-center"
      >
        <Plus className="w-4 h-4 text-gray-400" />
      </button>
    </div>
  </div>
);