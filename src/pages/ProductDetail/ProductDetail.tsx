import { useState } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { products } from '../../data/products';
import { CustomizerPanel } from '../../components/CustomizerPanel/CustomizerPanel';
import styles from './ProductDetail.module.css';

export const ProductDetail = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === id);
  const [activeImg, setActiveImg] = useState(0);

  if (!product) return <Navigate to="/" replace />;

  return (
    <main className={styles.page}>
      <div className="container">
        {/* Back */}
        <Link to="/" className={styles.back}>
          ← Volver al catálogo
        </Link>

        <div className={styles.layout}>
          {/* ─── Left: Image ─── */}
          <div className={styles.imageCol}>
            <div className={styles.mainImageWrap}>
              <img
                src={product.images[activeImg]}
                alt={product.name}
                className={styles.mainImage}
              />
              {product.badge && (
                <span className={styles.badge}>{product.badge}</span>
              )}
            </div>
            {product.images.length > 1 && (
              <div className={styles.thumbs}>
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    className={`${styles.thumb} ${i === activeImg ? styles.thumbActive : ''}`}
                    onClick={() => setActiveImg(i)}
                    aria-label={`Ver imagen ${i + 1}`}
                  >
                    <img src={img} alt="" />
                  </button>
                ))}
              </div>
            )}

            {/* Incluye */}
            <div className={styles.includes}>
              <p className={styles.includesTitle}>¿Qué incluye?</p>
              <ul className={styles.includesList}>
                {product.includes.map((item, i) => (
                  <li key={i} className={styles.includesItem}>
                    <span className={styles.includesHeart} aria-hidden="true">♥</span>
                    {item}
                  </li>
                ))}
              </ul>
              <p className={styles.availNote}>
                * Colores y diseños de globos sujetos a disponibilidad al momento del pedido.
              </p>
            </div>
          </div>

          {/* ─── Right: Info + Customizer ─── */}
          <div className={styles.infoCol}>
            <div className={styles.header}>
              <h1 className={styles.title}>{product.name}</h1>
              <p className={styles.desc}>{product.description}</p>
            </div>

            <CustomizerPanel product={product} />
          </div>
        </div>

        {/* ─── More products ─── */}
        <section className={styles.more}>
          <p className={styles.moreTitle}>También te puede gustar</p>
          <div className={styles.moreGrid}>
            {products
              .filter(p => p.id !== product.id)
              .slice(0, 3)
              .map(p => (
                <Link key={p.id} to={`/producto/${p.id}`} className={styles.moreCard}>
                  <img src={p.images[0]} alt={p.name} className={styles.moreImg} />
                  <div className={styles.moreInfo}>
                    <p className={styles.moreName}>{p.name}</p>
                    <p className={styles.morePrice}>${p.price.toLocaleString('es-CO')}</p>
                  </div>
                </Link>
              ))}
          </div>
        </section>
      </div>
    </main>
  );
};
