import useModal from '../../hooks/useModal';
import Add from './Add';
import Delete from './Delete';
import Edit from './Edit';
import ModalPortal from './ModalPortal';

function ModalContainer() {
  const { hideModal, isModalOpen } = useModal();

  if (!isModalOpen) {
    console.log('container', isModalOpen)
    return null;
  }

  const type: keyof typeof modals = 'delete';
  const ModalComponent = getModal(type);

  return (
    <ModalPortal>
      <ModalComponent onClose={hideModal} onSubmit={hideModal}></ModalComponent>
    </ModalPortal>
  );
}

const modals = {
  add: Add,
  edit: Edit,
  delete: Delete,
};

const getModal = (modalName: keyof typeof modals) => modals[modalName];

export default ModalContainer;
