import styles from './styles.module.scss';

export function AnimeVideoCard() {
  return (
    <div className={styles.animeCardContainer}>
      <div className={styles.thumbnail}>
        <div
          style={{ backgroundImage: `url('/animes/kakegurui.jpg')` }}
          className={styles.thumb}
        />
        <span>4:15</span>
      </div>
      <div className={styles.info}>
        <h3>Kakegurui</h3>
        <div>
          <span>
            episódio 3
                  </span>
          <span>
            3 dias atrás
                  </span>
        </div>
      </div>
    </div>
  )
}