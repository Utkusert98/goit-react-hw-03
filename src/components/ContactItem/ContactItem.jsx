import styles from "./ContactItem.module.css";

export default function ContactItem({ contact, onDelete }) {
  return (
    <li className={styles.item}>
      <span>{contact.name}: {contact.number}</span>
      <button onClick={() => onDelete(contact.id)}>Delete</button>
    </li>
  );
}
