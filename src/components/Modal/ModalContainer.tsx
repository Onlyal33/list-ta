import useModal from '../../hooks/useModal';
import { selectIsModalOpen, selectModal } from '../../redux/features/modal/selectors';
import { useAppSelector } from '../../redux/hooks';
import Add from './Add';
import Delete from './Delete';
import Edit from './Edit';
import ModalPortal from './ModalPortal';

function ModalContainer() {
  const { hideModal } = useModal();
  const isModalOpen = useAppSelector(selectIsModalOpen);
  const { type } = useAppSelector(selectModal);

  if (!isModalOpen || !type) {
    return null;
  }

  const ModalComponent = getModal(type);

  return (
    <ModalPortal>
      <ModalComponent onClose={hideModal}></ModalComponent>
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
