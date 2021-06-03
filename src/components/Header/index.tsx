import styles from './styles.module.scss';
import { Grid, Menu, Notification, Search } from '../../utils/icons';
import { useMenu } from '../../hook/Menu';

export default function Header() {
  const { changeVisibilty } = useMenu();

  return (
    <header className={styles.container}>
      <div className={styles.primary}>
        <button type="button" onClick={changeVisibilty}>
          <Menu />
        </button>
        <div className={styles.logo}>
          <img src="/icon.png" alt="Golem" />
          Golem
        </div>
        <div className={styles.input}>
          <label>
            <input type="text" placeholder="Search" />
            <Search />
          </label>
        </div>
      </div>
      <div className={styles.secondary}>
        <div className={styles.option}>
          <button>
            <Grid />
          </button>
          <button>
            <Notification />
          </button>
        </div>
        <img src="https://github.com/lucasrsrodrigues.png" alt="" />
      </div>
    </header>
  )
}