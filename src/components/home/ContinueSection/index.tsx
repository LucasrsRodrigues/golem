import { ArrowLeft, ArrowRight } from '../../../utils/icons';
import { AnimeVideoCard } from '../../AnimeVideoCard';
import styles from './styles.module.scss';

export function ContinueSection() {
  return (
    <section className={styles.continueSection}>
      <header>
        <h2>Continue assistindo</h2>
        <div className={styles.controllersButtons}>
          <button type="button">
            <ArrowLeft />
          </button>
          <button type="button">
            <ArrowRight />
          </button>
        </div>
      </header>
      <div className={styles.wrapperAnimeCards}>
        <AnimeVideoCard />
        <AnimeVideoCard />
        <AnimeVideoCard />
        <AnimeVideoCard />
        <AnimeVideoCard />
      </div>
    </section>
  )
}