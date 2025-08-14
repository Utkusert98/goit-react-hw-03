import styles from "./SearchBox.module.css";

export default function SearchBox({ value, onFilterChange }) {
  return (
    <div className={styles.box}>
      <input
        type="text"
        placeholder="Search by name"
        value={value}
        onChange={(e) => onFilterChange(e.target.value)}
      />
    </div>
  );
}
