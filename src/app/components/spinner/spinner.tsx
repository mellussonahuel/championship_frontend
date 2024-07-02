import styles from './Spinner.module.css';

export function Spinner() {
  return (
    <div id='spinn' className={styles.ldsEllipsis}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}
