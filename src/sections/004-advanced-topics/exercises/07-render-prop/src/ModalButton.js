import React, { useState } from 'react';
import { Button } from './Button';

export function ModalButton({ renderModal, ...rest }) {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <>
      <Button {...rest} onClick={() => setModalOpen(true)} />
      {modalOpen && renderModal(() => setModalOpen(false))}
    </>
  );
}
