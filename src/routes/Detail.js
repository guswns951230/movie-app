import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styles from './Detail.module.css';

function Detail() {
  const { id } = useParams();
  const [loading, setLoading] = useState(true);
  const [movie, setMovie] = useState([]);

  const getMovie = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    setMovie(json.data.movie);
    setLoading(false);
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div className={styles.detail__container}>
      {loading
        ? (
          <h1 className={styles.detail__loader}>Loading</h1>
        )
        : (
          <>
            <div className={styles.detail__page__title}>Movie Details</div>
            <div className={styles.detail__movie}>
              <img src={movie.medium_cover_image} alt={movie.title} className={styles.detail__img} />
              <div>
                <h2 className={styles.detail__title}>{movie.title}</h2>
                <h3 className={styles.detail__year}>{movie.year}</h3>
                <ul className={styles.detail__genres}>
                  {movie.genres.map((genre) => (
                    <li key={genre}>{genre}</li>
                  ))}
                </ul>
                <p>{movie.description_full}</p>
              </div>
            </div>
          </>
        )}
    </div>
  );
}

export default Detail;