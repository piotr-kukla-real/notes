import { Container } from '@material-ui/core';
import Footer from 'components/Footer';
import Header from 'components/Header';
import NotesList from 'components/NotesList';
import Pagination from 'components/Pagination';
import styles from './style.module.scss';

const Home: React.FC = () => (
  <div className={styles.home}>
    <Header />
    <Container className={styles.main} component="main" maxWidth="xl">
      <Pagination />
      <NotesList />
      <Pagination />
    </Container>
    <Footer />
  </div>
);

export default Home;
