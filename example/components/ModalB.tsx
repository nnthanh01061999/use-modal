import * as React from 'react';
import { TWithModalProps, useModal, withModal } from '../../.';
import '../style.css';
import { TModalName } from '../types';

type TModalBProps = {
  content: string;
} & TWithModalProps;

function ModalB({ open, content, onClose }: TModalBProps) {
  const { closeAll } = useModal<TModalName>();
  return (
    <div className={`modal ${open ? '' : 'hide'}`}>
      <div className="modal-content">
        <button onClick={onClose} className="close">
          &times;
        </button>
        <h1>Modal B</h1>
        <p>{content}</p>
        <div className="modal-footer">
          <button onClick={() => closeAll(false)}>
            Close all without callback
          </button>
          <button onClick={() => closeAll()}>Close all with callback</button>
        </div>
      </div>
    </div>
  );
}

export default withModal<TModalBProps, TModalName>(ModalB, 'modal-b');
