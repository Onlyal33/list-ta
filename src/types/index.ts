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

export interface ListControls {
  filter: string,
  sortOrder: SortOrder,
}

export type SortOrder = 'Default order' | 'Title: A to Z' | 'Title: Z to A' | 'Description: A to Z' | 'Description: Z to A';

export interface ButtonProps {
  Svg: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
  label: string;
  onClick: () => void;
}

export interface InputProps {
  label: string,
  id: string,
  placeholder: string,
  Icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>,
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export interface SelectProps {
  label: string;
  id: string;
  options: string[];
  value: string;
  onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  Icon?: React.FunctionComponent<React.SVGProps<SVGSVGElement>>;
}
export interface ModalProps {
  onClose: () => void;
  onSubmit: (values: NewItemToServer, actions: FormikActions) => void;
  headerText: string;
  buttonText: string;
  initialValues: NewItemToServer;
  httpError?: string;
}