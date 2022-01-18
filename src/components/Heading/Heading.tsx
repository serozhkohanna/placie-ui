import React, { FC } from 'react';

import classNames from 'classnames';

import styles from './Heading.module.scss';

export interface Props {
  level: number;
  text: string;
  className?: string;
}

const Heading: FC<Props> = ({ level, text, className }) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return <Tag className={classNames(styles.heading, styles[`heading-h${level}`], className)}>{text}</Tag>;
};

export default Heading;
