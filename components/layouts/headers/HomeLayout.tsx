import styles from './HomeLayout.module.css';

export interface IHomeLayout {
  sampleTextProp: string;
}

const HomeLayout: React.FC<IHomeLayout> = ({ sampleTextProp }) => {
  return <div className={styles.container}>{sampleTextProp}</div>;
};

export default HomeLayout;
