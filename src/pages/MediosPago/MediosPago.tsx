import styles from './MediosPago.module.css';

const methods = [
  {
    id: 'nequi',
    name: 'Nequi',
    number: '3116759247',
    color: '#6B2D8B',
    logo: (
      <svg viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 90 }}>
        <rect width="120" height="60" rx="8" fill="white"/>
        <text x="10" y="42" fontFamily="Arial Black" fontWeight="900" fontSize="28" fill="#6B2D8B">NEQUI</text>
      </svg>
    ),
  },
  {
    id: 'daviplata',
    name: 'Daviplata',
    number: '3116759247',
    color: '#E8000D',
    logo: (
      <svg viewBox="0 0 140 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 110 }}>
        <rect width="140" height="60" rx="8" fill="white"/>
        <text x="10" y="40" fontFamily="Arial" fontWeight="700" fontSize="24" fill="#E8000D">DAVIplata</text>
      </svg>
    ),
  },
  {
    id: 'bancolombia',
    name: 'Bancolombia',
    extra: 'Cuenta de ahorros: 825-090353-57',
    extra2: 'Mónica Hernández · C.C. 37082981',
    color: '#FFCB05',
    logo: (
      <svg viewBox="0 0 160 60" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ width: 130 }}>
        <rect width="160" height="60" rx="8" fill="white"/>
        <text x="10" y="40" fontFamily="Arial" fontWeight="700" fontSize="20" fill="#003087">Bancolombia</text>
      </svg>
    ),
  },
];

export const MediosPago = () => {
  return (
    <main className={styles.page}>
      <div className="container">
        <div className={styles.hero}>
          <p className={styles.eyebrow}>¿Cómo pagar?</p>
          <h1 className={styles.title}>Medios de Pago</h1>
          <p className={styles.sub}>
            Manejamos diversos medios de pago para tu comodidad.
            Realiza tu transferencia y envíanos el comprobante por WhatsApp.
          </p>
        </div>

        <div className={styles.grid}>
          {methods.map(m => (
            <div key={m.id} className={styles.card}>
              <div className={styles.logoWrap} style={{ borderColor: m.color + '40' }}>
                {m.logo}
              </div>
              <div className={styles.info}>
                <p className={styles.methodName}>{m.name}</p>
                {m.number && (
                  <p className={styles.number}>{m.number}</p>
                )}
                {m.extra && <p className={styles.extra}>{m.extra}</p>}
                {m.extra2 && <p className={styles.extra}>{m.extra2}</p>}
              </div>
            </div>
          ))}
        </div>

        <div className={styles.note}>
          <span className={styles.noteIcon}></span>
          <div>
            <p className={styles.noteTitle}>¿Cómo funciona el pago?</p>
            <p className={styles.noteText}>
              Realiza tu pedido a través de WhatsApp, confirma la disponibilidad,
              luego haz la transferencia y envía el comprobante. ¡Así de sencillo!
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};
