import React, { useContext, useEffect, useMemo } from 'react';
import { ModalContext } from './context';
import { useModal } from './hook';
import { TWithModalProps } from './types';

export const withModal = <
  T extends TWithModalProps = TWithModalProps,
  M extends string[] = string[]
>(
  Component: React.ComponentType<T>,
  name: M[number],
  shouldCallbacks: boolean = true,
  destroyOnClose: boolean = false
) => {
  const displayName = Component.displayName || name;

  const ComponentWithModal = (props: Omit<T, 'open' | 'onClose'>) => {
    const { closeCallback } = props;
    const {
      data: { opens },
      setData,
    } = useContext(ModalContext);
    const { close } = useModal();

    const open = useMemo(() => !!opens.includes(name), [opens]);

    const onClose = () => close(name, shouldCallbacks);

    useEffect(() => {
      if (!closeCallback) return;
      setData(prev => ({
        ...prev,
        callbacks: {
          ...prev.callbacks,
          [name]: closeCallback,
        },
      }));
    }, []);

    return !destroyOnClose || open ? (
      <Component {...(props as T)} open={open} onClose={onClose} />
    ) : null;
  };

  ComponentWithModal.displayName = `withModal(${displayName})`;

  return ComponentWithModal;
};
