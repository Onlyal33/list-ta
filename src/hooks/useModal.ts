import { useCallback } from 'react';
import { useAppDispatch } from '../redux/hooks';
import { closeModal, openModal } from '../redux/features/modal';
import { ModalInterface } from '../types';

const useModal = () => {
  const dispatch = useAppDispatch();

  const showModal = useCallback((type: ModalInterface['type'], item?: ModalInterface['item']) => {
    dispatch(openModal({ type, item }));
  }, [dispatch]);

  const hideModal = useCallback(() => {
    dispatch(closeModal());
    document.body.style.overflow = 'auto';
  }, [dispatch]);

  return { showModal, hideModal };
};

export default useModal;
