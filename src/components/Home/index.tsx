import { Container } from '@material-ui/core';
import Footer from 'components/Footer';
import Header from 'components/Header';
import NotesList from 'components/NotesList';
import styles from './style.module.scss';

const Home: React.FC = () => (
  <div className={styles.home}>
    <Header />
    <Container className={styles.main} component="main" maxWidth="xl">
      <NotesList />
    </Container>
    <Footer />
  </div>
);

export default Home;
