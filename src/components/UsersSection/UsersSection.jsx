import UserProfile from '../UserProfile/UserProfile';
import users from './data';
import styles from './UsersSection.module.scss';

const UsersSection = () => {
  const showUser = (user) => <UserProfile key={user.id} user={user} />;
  return (
    <>
      <h2>Users</h2>
      <section className={styles.container}>{users.map(showUser)}</section>
    </>
  );
};

export default UsersSection;
