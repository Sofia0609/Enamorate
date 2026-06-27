import { useState, useMemo } from 'react';
import { ProductCard } from '../../components/ProductCard/ProductCard';
import { products } from '../../data/products';
import styles from './Home.module.css';
import LogoFull from '../../assets/Logo_Full.svg';

export const Home = () => {
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    if (!q) return products;
    return products.filter(
      p =>
        p.name.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.includes.some(i => i.toLowerCase().includes(q))
    );
  }, [search]);

  return (
    <main>
      {/* ─── Hero ─── */}
      <section className={styles.hero}>
        <div className={`container ${styles.heroInner}`}>
          <div className={styles.heroText}>
            <p className={styles.heroEyebrow}>Envío gratis a todo Cali</p>
            <h1 className={styles.heroTitle}>
              Convierte cada fecha especial en un momento{' '}
              <em>inolvidable</em>
            </h1>
            <p className={styles.heroSub}>
              Desayunos sorpresa personalizados, listos para llegar donde más importa.
            </p>
            <a href="#catalogo" className={styles.heroCta}>
              Ver desayunos ↓
            </a>
          </div>
          <div className={styles.heroVisual} aria-hidden="true">
            <div className={styles.heroHeart}>
              <img src={LogoFull} alt="Enamorate Logo" className={styles.heroImg}/>
            </div>
          </div>
        </div>
      </section>

      {/* ─── Catálogo ─── */}
      <section id="catalogo" className={`section ${styles.catalogSection}`}>
        <div className="container">
          <div className={styles.catalogHeader}>
            <div>
              <h2 className={styles.sectionTitle}>Elige el tuyo</h2>
            </div>

            {/* Buscador */}
            <div className={styles.searchWrap}>
              <span className={styles.searchIcon} aria-hidden="true"></span>
              <input
                type="search"
                className={styles.searchInput}
                placeholder="Buscar desayuno o ingrediente..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                aria-label="Buscar en el catálogo"
              />
            </div>
          </div>

          {filtered.length > 0 ? (
            <div className={styles.grid}>
              {filtered.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ) : (
            <div className={styles.empty}>
              <p className={styles.emptyIcon}></p>
              <p className={styles.emptyText}>No encontramos nada con "<strong>{search}</strong>"</p>
              <button className={styles.emptyReset} onClick={() => setSearch('')}>
                Ver todos los desayunos
              </button>
            </div>
          )}
        </div>
      </section>

      {/* ─── Adicionales teaser ─── */}
      <section className={`section ${styles.adicionalesTeaser}`}>
        <div className="container">
          <div className={styles.teaserCard}>
            <div className={styles.teaserText}>
              <p className={styles.teaserEyebrow}>¿Quieres algo más?</p>
              <h2 className={styles.teaserTitle}>Agrega extras a tu pedido</h2>
              <p className={styles.teaserSub}>
                Flores, vinos, chocolates Ferrero, peluches y más. Personaliza
                cualquier desayuno al hacer tu pedido.
              </p>
            </div>
            <div className={styles.teaserExtras}>
              {['Rosas', 'Ferrero', 'Vino', 'Peluche', 'Globos'].map(e => (
                <span key={e} className={styles.teaserTag}>{e}</span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};
