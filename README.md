# @thanhnn/use-modal

Small typescript package that help you to easily control modals in your React application.

## Features

| Feature                  | Description                                                                           | Type                                                     |
| ------------------------ | ------------------------------------------------------------------------------------- | -------------------------------------------------------- |
| Open modal               | Open a specific modal by passing its unique name.                                     | `(name: string) => void`                                 |
| Close modal              | Close a specific modal by passing its unique name.                                    | `(name: string, shouldCallback: boolean = true) => void` |
| Close all modals         | Close all open modals.                                                                | `(shouldCallback: boolean = true) => void`               |
| Check if modal is opened | Check if a specific modal is open by passing its unique name.                         | `(name: string) => boolean`                              |
| Determine close callback | Props `closeCallback` which is a method that will be called when the modal is closed. | `(name: string, callback: () => void) => void`           |

## Installation

Install with npm or yarn

```bash
npm install --save @thanhnn/use-modal
```

```bash
yarn add @thanhnn/use-modal
```

## Usage/Examples

### ModalProvider

Wrap your app with the `ModalProvider` component to enable modal handling throughout your application:

```javascript
import { ModalProvider } from '@thanhnn/use-modal';

function App() {
  return <ModalProvider>{/* Your app code */}</ModalProvider>;
}
```

### useModal

Use the `useModal` hook to access modal handling functions and properties:

You can provide type `TModalName` or not.

```javascript
import { useModal } from '@thanhnn/use-modal';
type TModalName = ['modal-a', 'modal-b'];

function MyComponent() {
  const { open, close, closeAll, check } = useModalH<TModalName>();

  return (
    <>
      <button onClick={() => open('modal-a')}>Open</button>
      <button onClick={() => closeModal('modal-b')}>Close</button>
      <button onClick={closeAllModal}>Close All</button>
      <p>Modal is open: {check('modal-a') ? 'Yup' : 'Nope'}</p>
    </>
  );
}

```

### withModal

Use the `withModal` higher-order component to add modal handling capabilities to your own modal components:

You can provide type `TModalName` or not.

```javascript
import { withModal, TWithModalProps} from '@thanhnn/use-modal';

type TModalProps = TWithModalProps & {
    content: string
}
type TModalName = ['modal-a', 'modal-b'];

function Modal({ content= "Content", open, onClose }: TModalProps) {
  return (
    <div>
      <p>{content}</p>
      <p>{open ? 'Open': 'Close'}</p>
      <button onClick={onClose}>Close Modal</button>
    </div>
  );
}

export default withModal<TModalProps, TModalName>(Modal, 'modal-a');
```

Now you can use the `Modal` component like this:

```javascript
import Modal from './Modal';
import { useModal } from '@thanhnn/use-modal';

function Component() {
  const { open } = useModal();

  return (
    <div>
      <button onClick={() => open('modal-a')}>Open Modal</button>
      <Modal closeCallback={() => { alert('Modal is closed)'}}/>
    </div>
  );
}

export default Component;
```

## Conclusion

`@thanhnn/use-modal` is a powerful yet lightweight typescript package for managing modals in your React application.

## License

This package is licensed under the MIT License.
