export interface ItemInterface {
  id: number;
  title: string;
  description: string;
}

export type NewItemToServer = Omit<ItemInterface, 'id'>;

export interface ModalInterface {
  isOpen: boolean;
  type: 'add' | 'delete' | 'edit' | null;
  item?: ItemInterface | null;
}

export interface FormikActions {
  setSubmitting: (_: boolean) => void;
}