export interface ItemInterface {
  id: number;
  title: string;
  description: string;
}

export interface ModalInterface {
  isOpen: boolean;
  type: 'add' | 'delete' | 'edit' | null;
  item?: ItemInterface | null;
}