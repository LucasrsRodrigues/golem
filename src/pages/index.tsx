import { GlobalWrapper } from '../components/GlobalWrapper';
import { ContinueSection } from '../components/home/ContinueSection';
import { HighlightsSection } from '../components/home/HighlightsSection';
import { LastAddSection } from '../components/home/LastAddSection';
import { NewsEpisodeSection } from '../components/home/NewsEpisodeSection';
import styles from '../styles/pages/Home.module.scss';

export default function Home() {
  return (
    <GlobalWrapper>
      <div className={styles.container}>
        <ContinueSection />
        <HighlightsSection />
        <NewsEpisodeSection />
        <LastAddSection />
      </div>
    </GlobalWrapper>
  );
}

