import styles from './style.module.scss';

const NotificationAlert: React.FC<Props> = ({ message, icon, style }) => (
  <div className={styles.wrapper} style={style}>
    <div className={styles.icon}>{icon}</div>
    <span className={styles.message}>{message}</span>
  </div>
);

export interface Props {
  message?: string;
  icon?: React.ReactNode;
  style?: React.CSSProperties;
}

export default NotificationAlert;
