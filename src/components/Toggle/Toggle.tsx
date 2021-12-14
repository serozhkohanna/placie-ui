import React, { FC } from 'react';
import styles from './Toggle.scss';

interface Props {
  isToggled: boolean;
  onChange: () => void;
}

const Toggle: FC<Props> = ({ isToggled, onChange }) => {
  return <label className={styles.toggleSwitch}>
    <input type="checkbox" checked={isToggled} onChange={onChange} />
    <span className={styles.switch} />
  </label>;
};
export default Toggle;
