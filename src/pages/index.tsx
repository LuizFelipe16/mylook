import Head from "next/head";

import styles from '../styles/commom.module.scss';

export default function Hostcode() {
  return (
    <>
      <Head><title>Bem Vindo | MyLook!</title></Head>

      <div className={styles.page}>
        <header className={styles.navigation}>
          <h3>My<strong>Look!</strong></h3>

          <div className={styles.links}>
            <a href="#">Home</a>
            <a href="#">Services</a>
            <a href="#">Contact</a>
          </div>

          <button>Entrar</button>
        </header>

        <div className={styles.content}>
          <h1>Welcome to <span>MyLook!</span> Mount <br /> your beautiful look.</h1>
          <hr />
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non,
            reprehenderit ipsa. Ut nisi possimus quaerat dolor?
            Ex dolores dolor deserunt itaque officiis non minus? Nesciunt amet ex a facilis rem!
          </p>
          <button>About more</button>

          <img src="/element.png" alt="Element" />
        </div>

        <div className={styles.images}>
          <img src="/girl.png" alt="Girl" />
        </div>
      </div>
    </>
  );
}