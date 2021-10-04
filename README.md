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
import { useInput } from 'custom-hooks-library';

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
import { useBooleanState } from 'custom-hooks-library';

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
import { useIntersectingState } from 'custom-hooks-library';

const List = () => {
  const ref = useRef();
  const isIntersecting = useIntersectingState(ref);

  return <div ref={ref}>...</div>;
};
```

## useLocalStorage

You can use localStorage value like react state.

```tsx
import { useLocalStorage } from 'custom-hooks-library';

const Storage = () => {
  const { value, setStorage, removeStorage } = useLocalStorage('token');

  useEffect(() => {
    if (!value) {
      setStorage('sample'); // execute localStorage.setItem('token','sample')
    }
  }, [value]);

  const onClickRemove = () => {
    removeStorage(); // execute localStorage.removeItem('token')
  };

  return <div>{value}</div>;
};
```

## useAuth

It is used on pages that require authentication. After initial rendering, the fetcher function is executed to return the data or error object.

```tsx
import { useAuth } from 'custom-hooks-library';
import fetcher from 'any-async-fetcher';

interface IUserInfo {
  name: string;
}

const Main = () => {
  const { data, error } = useAuth<IUserInfo>(fetcher);

  if (error) {
    // redirect login page
    return null;
  }

  return <h1>hello, {data?.name}</h1>;
};
```
