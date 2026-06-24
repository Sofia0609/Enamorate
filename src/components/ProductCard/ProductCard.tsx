import { Link } from 'react-router-dom';
import type { ProductItem } from '../../types';
import { formatPrice } from '../../data/products';
import styles from './ProductCard.module.css';

interface Props {
  product: ProductItem;
}

export const ProductCard = ({ product }: Props) => {
  return (
    <article className={styles.card}>
      {product.badge && (
        <span className={styles.badge}>{product.badge}</span>
      )}
      <div className={styles.imageWrap}>
        <img
          src={product.images[0]}
          alt={product.name}
          className={styles.image}
          loading="lazy"
        />
      </div>
      <div className={styles.body}>
        <h3 className={styles.name}>{product.name}</h3>
        <p className={styles.desc}>{product.description}</p>
        <div className={styles.footer}>
          <p className={styles.price}>{formatPrice(product.price)}</p>
          <Link to={`/producto/${product.id}`} className={styles.btn}>
            Ver detalles
          </Link>
        </div>
      </div>
    </article>
  );
};
