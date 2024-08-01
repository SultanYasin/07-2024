import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.center}>
      <section>
        <Image
          className={styles.logo}
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
      </section>

      <h1 className={styles.title}>Welcome to Next.js!</h1>
    </div>
  );
}
