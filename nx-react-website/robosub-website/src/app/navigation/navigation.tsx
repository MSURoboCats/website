import styles from './navigation.module.css';
import {Link, Route, Routes} from "react-router-dom";

/* eslint-disable-next-line */
export interface NavigationProps {}

export function Navigation(props: NavigationProps) {
  return (
      <nav>
          <div id={styles['logo']} className={styles['nav-section']}>
              <a href={styles["#"]}>
                  {/*<FontAwesomeIcon icon="fa-sharp fa-light fa-dumpster-fire" style={{color: "#ffffff",}} />*/}
              </a>
          </div>
          <div id={styles['links']} className={styles['nav-section']}>
              <Link to="/">Home</Link>
              <Link to="/page-2">Page 2</Link>
          </div>
          <div id={styles['socials']} className={styles['nav-section']}></div>
      </nav>

  );
}

export default Navigation;
