export interface CustomizableItem {
  id: string;
  category: 'proteina' | 'bebida' | 'adicional';
  label: string;
  extraCost: number; // 0 = incluido, >0 = costo adicional
  default?: boolean;
}

export interface ProductItem {
  id: string;
  name: string;
  price: number;
  description: string;
  includes: string[];
  images: string[];
  customizable: {
    proteinas: CustomizableItem[];
    bebidas: CustomizableItem[];
    bebidasMultiSelect?: boolean;      
    bebidasDefaultIds?: string[]; 
    bebidasMaxSelect?: number; 
  };
  badge?: string;
}

export interface Additional {
  id: string;
  name: string;
  price: number;
  note?: string;
}

export interface Customization {
  proteina: CustomizableItem | null;
  bebida: CustomizableItem | null;
  adicionales: Additional[];
  mensaje: string;
}


