import styles from './styles.module.scss';

export function AnimeCard() {
  return (
    <div className={styles.animeCardContainer}>
      <div 
        style={{ backgroundImage: `url('/animes/kakegurui.jpg')` }}
        className={styles.thumbnail}
      >
        <div className={styles.info}>
          <h3>Kakegurui</h3>
          <span>2017 - Legendado</span>            
        </div>
      </div>
    </div>
  )
}