import React, { FC } from 'react';

import classNames from 'classnames';
import { FaHeart, FaRegHeart } from 'react-icons/fa';

import styles from './Like.module.scss';

interface Props {
  onClick: (value: boolean) => void;
  hasLike: boolean;
}

const Like: FC<Props> = ({ onClick, hasLike }: Props) => {

  return <button
    className={styles.likeButton}
    onClick={() => onClick(!hasLike)}
  >
    {hasLike ?
      <FaHeart className={classNames(styles.like, styles.likeFilled)} />
      : <FaRegHeart className={classNames(styles.like, styles.likeOutlined)} />}
  </button>;
};

export default Like;
