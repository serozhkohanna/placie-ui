import React, { FC } from 'react';

import classNames from 'classnames';

import styles from './Heading.module.scss';

export interface Props {
  level: number;
  text: string;
  className?: string;
  hasUnderline?: boolean;
}

const Heading: FC<Props> = ({ level, text, className, hasUnderline }) => {
  const Tag = `h${level}` as keyof JSX.IntrinsicElements;

  return <Tag className={classNames(styles.heading, styles[`heading-h${level}`], {
    [styles.underline]: hasUnderline
  }, className)}>{text}</Tag>;
};

export default Heading;
