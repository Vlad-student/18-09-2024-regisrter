import UserProfile from '../components/UserProfile/UserProfile';

const HomePage = () => {
  return (
    <div>
      <UserProfile
        user={{ name: 'Olena', age: 30, email: 'anonim@gmail.com' }}
      />
    </div>
  );
};

export default HomePage;
