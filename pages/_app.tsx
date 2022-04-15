import "../styles/globals.css";
import type { AppProps } from "next/app";
// import Image from "next/image";
// import styles from "../styles/Home.module.css";

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;

  // return (
  //   <>
  //     <Component {...pageProps} />
  //     <footer className={styles.footer}>
  //       <a
  //         href="https://github.com/Xand3rxx"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Created by{" "}
  //         <span className="rounded">
  //           <Image
  //             src="https://github.com/Xand3rxx.png"
  //             alt="Anthony Joboy"
  //             width={50}
  //             height={50}
  //           />
  //         </span>
  //       </a>
  //     </footer>
  //   </>
  // );
}

export default MyApp;
