interface ModalOptions {
  onClose: () => void;
  onSubmit: () => void;
}

function Edit({onClose, onSubmit}: ModalOptions) {


  return (<div className="">Modal</div>);
}

export default Edit;