import * as React from 'react';
import '../style.css';
import { TWithModalProps, useModal, withModal } from '../../.';
import { TModalName } from '../types';

type TModalAProps = {
  content: string;
} & TWithModalProps;

function ModalA({ open, content, onClose }: TModalAProps) {
  const { open: openModal } = useModal<TModalName>();
  return (
    <div className={`modal ${open ? '' : 'hide'}`}>
      <div className="modal-content">
        <button onClick={onClose} className="close">
          &times;
        </button>
        <h1>Modal A</h1>
        <p>{content}</p>
        <button onClick={() => openModal('modal-b')}>Open Modal B</button>
      </div>
    </div>
  );
}

export default withModal<TModalAProps, TModalName>(ModalA, 'modal-a');
