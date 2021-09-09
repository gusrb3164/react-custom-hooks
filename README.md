# custom-hooks-library

react custom hooks library

## Install

```sh
npm install custom-hooks-library
```

---

## useInput

use onChange Input state

```tsx
const Login = () => {
  // return [state, onChangeCallback, setState]
  const [email, onChangeEmail, setEmail] = useInput('');

  return (
    <div>
      <Input type="email" value={email} onChange={onChangeEmail} />
    </div>
  );
};
```

## useBooleanState

Instead of declaring each React.useCallback function to set true and set false the boolean state(ex: modal), you can get the declared useCallback function.

```tsx
const Modal = () => {
  // return [state, onChangeCallback, setState]
  const [open, setOpen] = useState(false);
  // return useCallback function
  const [openModal, closeModal] = useBooleanState(setOpen);

  return <>{open && <div onClick={closeModal}>...</div>}</>;
};
```

## useIntersectingState

If you develop infinite scrolling or lazy loading through React.useRef, you can easliy use intersection observer state. Observe from the time the rendering is completed(useEffect with empty deps).

```tsx
const List = () => {
  const ref = useRef();
  const isIntersecting = useIntersectingState(ref);

  return <div ref={ref}>...</div>;
};
```
