import Footer from 'components/Footer';
import Header from 'components/Header';
import styles from './style.module.scss';

const Home: React.FC = () => (
  <div className={styles.home}>
    <Header />
    <main className={styles.main}></main>
    <Footer />
  </div>
);

export default Home;
