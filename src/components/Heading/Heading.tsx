import React, { FC } from 'react';

import classNames from 'classnames';

import styles from './Heading.module.scss';

export interface Props {
  level: number;
  text: string;
}

const Heading: FC<Props> = ({ level, text }) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return <Tag className={classNames(styles.heading, styles.h)}>{text}</Tag>;
};

export default Heading;
