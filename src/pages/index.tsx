import { AnimeCard } from '../components/AnimeCard';
import { GlobalWrapper } from '../components/GlobalWrapper';
import styles from '../styles/pages/Home.module.scss';
import { ArrowLeft, ArrowRight } from '../utils/icons';

export default function Home() {
  return (
    <GlobalWrapper>
      <div className={styles.container}>
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
            <AnimeCard />
            <AnimeCard />
            <AnimeCard />
            <AnimeCard />
            <AnimeCard />
          </div>
        </section>
        <section className={styles.continueSection}>
          <header>
            <h2>Novos episódios</h2>
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
        <section className={styles.continueSection}>
          <header>
            <h2>Últimos adicionados</h2>
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
      </div>
    </GlobalWrapper>
  );
}

