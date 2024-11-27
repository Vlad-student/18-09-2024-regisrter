import PropTypes from 'prop-types';
import cx from 'classnames';
import Icon from '@mdi/react';
import { mdiWeatherSunny, mdiWeatherNight } from '@mdi/js';
import CONSTANTS from '../../constants';
import { withTheme, withUserAccount, withUserAuth } from '../HOCs';
import styles from './Header.module.scss';
import Menu from '../Menu/Menu';
import { Link } from 'react-router-dom';

const Header = (props) => {
  const {theme, setTheme, user } = props;
  const changeTheme = () => {
    setTheme(
      theme === CONSTANTS.THEME.LIGHT
        ? CONSTANTS.THEME.DARK
        : CONSTANTS.THEME.LIGHT
    );
  };
  const headerClasses = cx(styles.header, {
    [styles['light']]: theme === CONSTANTS.THEME.LIGHT,
    [styles['dark']]: theme === CONSTANTS.THEME.DARK,
  });
  return (
    <header className={headerClasses}>
      <Menu />
      {user ? <p>Hi user</p> : <Link to ='/register'>Register</Link>}
      <span onClick={changeTheme} className={styles.themeBtn}>
        {theme === CONSTANTS.THEME.LIGHT ? (
          <Icon path={mdiWeatherNight} size={1} />
        ) : (
          <Icon path={mdiWeatherSunny} size={1} />
        )}
      </span>
    </header>
  );
};

Header.propTypes = {
  theme: PropTypes.string,
  setTheme: PropTypes.func,
  user: PropTypes.shape({
    firstName: PropTypes.string,
    lastName: PropTypes.string,
  }),
};

export default withUserAuth(withTheme(Header));