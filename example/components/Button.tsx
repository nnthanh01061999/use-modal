import * as React from 'react';
import { useModal } from '../../.';
import { TModalName } from '../types';

function Button() {
  const { open } = useModal<TModalName>();

  return <button onClick={() => open('modal-a')}>Open Modal A</button>;
}

export default Button;
