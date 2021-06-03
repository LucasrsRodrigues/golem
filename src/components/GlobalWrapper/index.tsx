import { ReactNode } from "react";
import { useMenu } from "../../hook/Menu";
import Header from "../Header";
import Sidebar from "../Sidebar";

type GlobalWrapper = {
  children: ReactNode;
}
import styles from './styles.module.scss';

export function GlobalWrapper({ children }: GlobalWrapper){
  const { isOpenMenu } = useMenu();

  return(
    <>
      <Header />
      <Sidebar />
      <div className={`${styles.appWrapper} ${!isOpenMenu && styles.minify}`}>
        {children}
      </div>
    </>
  )
}