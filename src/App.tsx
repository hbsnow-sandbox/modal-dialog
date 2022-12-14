import { useRef } from "react";

import styles from "./app.module.css";

export const App = (): JSX.Element => {
  const ref1 = useRef<HTMLDialogElement>(null);
  const ref2 = useRef<HTMLDialogElement>(null);

  return (
    <div>
      <div className={styles.action}>
        <button onClick={() => ref1.current?.showModal()}>Open Modal 1</button>

        <button
          onClick={() => {
            document.body.classList.add("open");
            ref2.current?.show();
          }}
        >
          Open Modal 2
        </button>
      </div>

      {[...Array(100)].map((_, i) => (
        <p key={i}>{i}</p>
      ))}

      <dialog className={styles.dialog} ref={ref1}>
        <p>Hello, world!</p>

        <button onClick={() => ref1.current?.close()}>Close Modal</button>
      </dialog>

      <dialog className={styles.divDialog} ref={ref2}>
        <p>Hello, world!</p>

        <button
          onClick={() => {
            document.body.classList.remove("open");
            ref2.current?.close();
          }}
        >
          Close Modal
        </button>
      </dialog>
    </div>
  );
};
