import styles from "./BarraDeBusca.module.css";
import { FaMagnifyingGlass } from "react-icons/fa6";

export default function BarraDeBusca({ termoBusca, setTermoBusca }) {
  return (
    <div className={styles.busca}>
      <input
        type="text"
        placeholder="Pesquise por palavras-chave..."
        value={termoBusca}
        onChange={(e) => setTermoBusca(e.target.value)}
      />
      <button>
        <span aria-label="search">
          <FaMagnifyingGlass />
        </span>
      </button>
    </div>
  );
}
