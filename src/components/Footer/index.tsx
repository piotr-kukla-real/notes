import { Container } from '@material-ui/core';
import FooterLeftColumn from 'components/FooterLeftColumn';
import FooterRightColumn from 'components/FooterRightColumn';
import styles from './style.module.scss';

const Footer: React.FC = () => (
  <Container className={styles.container} maxWidth="xl">
    <footer className={styles.footer}>
      <FooterLeftColumn />
      <FooterRightColumn />
    </footer>
  </Container>
);

export default Footer;
