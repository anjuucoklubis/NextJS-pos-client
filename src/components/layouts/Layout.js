import React from 'react';
import { useRouter } from 'next/router'
import { MENU_LIST } from './constants';
import styles from './index.module.css'

const Layout = ({ children }) => {
  const router = useRouter();

  const handleChangePage = (path) => {
    router.push(path)
  }

  return (
    <main className={styles.layout}>
      <aside className={styles.sidebar}>
        <nav className={styles.sidebar__nav}>
          <ul>
            {MENU_LIST.map((menu, index) => {
              return (
                <li 
                  key={index} 
                  className={router.pathname === menu.path ? styles.active : ''} 
                  onClick={() => handleChangePage(menu.path)}
                >
                  {menu.name}
                </li>
              )
            })}
          </ul>
        </nav>
      </aside>
      <section className={styles.content}>{children}</section>
    </main>
  )
}

export default Layout;