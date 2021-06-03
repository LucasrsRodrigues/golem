import styles from './styles.module.scss';

import { Home, Trending } from '../../utils/icons';
import { useMenu } from '../../hook/Menu';

export default function Sidebar() {
  const { isOpenMenu } = useMenu();
  return (
    <aside className={`${styles.container} ${!isOpenMenu && styles.closed}`}>
      <nav>
        <ul>
          <li className={styles.active}>
            <Home />
            <span>Home</span>
          </li>
          <li>
            <Trending />
            <span>Trending</span>
          </li> 
          <li>
            <Trending />
            <span>Subscription</span>
          </li>
        </ul>
        <ul>          
          <li>
            <Trending />
            <span>Library</span>
          </li>
          <li>
            <Trending />
            <span>History</span>
          </li>
          <li>
            <Trending />
            <span>Watch later</span>
          </li>
          <li>
            <Trending />
            <span>Favourites</span>
          </li>
          <li>
            <Trending />
            <span>Liked videos</span>
          </li>
          <li>
            <Trending />
            <span>Music</span>
          </li>
          <li>
            <Trending />
            <span>Games</span>
          </li>
        </ul>
        <ul>
          <li><strong>Subscriptions</strong></li>
          <li>
            <img src="/animes/boku-no-hero.png" alt="Boku no hero" />
            <span>Boku no hero</span>
          </li>
          <li>
            <img src="/animes/boku-no-hero.png" alt="Boku no hero" />
            <span>Boku no hero</span>
          </li>
          <li>
            <img src="/animes/boku-no-hero.png" alt="Boku no hero" />
            <span>Boku no hero</span>
          </li>
        </ul>
      </nav>
    </aside>
  )
}