import { GitHub } from '@material-ui/icons';
import styles from './style.module.scss';

const FooterRightColumn: React.FC = () => (
  <section className={styles.rightColumn}>
    <nav>
      <ul className={styles.linksList}>
        <li>
          <a
            className={styles.link}
            href="https://github.com/piotr-kukla-real/notes"
          >
            <GitHub />
          </a>
        </li>
      </ul>
    </nav>
  </section>
);

export default FooterRightColumn;
