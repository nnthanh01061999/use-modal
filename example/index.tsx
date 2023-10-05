import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { ModalProvider, useModal } from '../.';
import { TModalName } from './types';
import ModalA from './components/ModalA';
import ModalB from './components/ModalB';
import Button from './components/Button';

const App = () => {
  return (
    <ModalProvider>
      <div className="main">
        <Button />
      </div>
      <ModalA content="This is modal A" />
      <ModalB
        content="This is modal B. This will alert when close"
        closeCallback={() => alert('Modal A have been close')}
      />
    </ModalProvider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
