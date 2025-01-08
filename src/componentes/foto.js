import styles from "./foto.module.css";

export default function Foto({ foto }) {
  return (
    <div className={styles.containerFoto}>
      <img src={foto.url} alt={foto.titulo} className={styles.foto} />
      <p>{foto.titulo}</p>
    </div>
  );
}
