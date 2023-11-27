import { createPortal } from 'react-dom';
import { ReactNode, useLayoutEffect } from 'react';
import useModal from '../../hooks/useModal';

function ModalPortal({ children }: { children: ReactNode}) {
  const { hideModal } = useModal();

  const modalContainer = document.getElementById('modal-container');
  const backdropContainer = document.getElementById('backdrop-container');

  useLayoutEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  });

  return (
    <>
      {backdropContainer &&
        createPortal(
          <div
            className="fixed z-40 left-0 top-0 h-full w-full bg-black bg-opacity-50"
            onClick={hideModal}
          ></div>,
          backdropContainer,
        )}
      {modalContainer &&
        createPortal(
          <div className='fixed z-50 modal bg-white rounded-lg'>
            {children}
          </div>,
          modalContainer,
        )}
    </>
  );
}

export default ModalPortal;
