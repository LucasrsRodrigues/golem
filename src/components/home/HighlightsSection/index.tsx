import { ArrowLeft, ArrowRight } from '../../../utils/icons';
import { AnimeCard } from '../../AnimeCard';
import styles from './styles.module.scss';

export function HighlightsSection() {
  return (
    <section className={styles.continueSection}>
      <header>
        <h2>Destaques</h2>
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
        <AnimeCard />
        <AnimeCard />
        <AnimeCard />
        <AnimeCard />
        <AnimeCard />
      </div>
    </section>
  )
}