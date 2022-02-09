import styles from './paragraph.module.scss';
import cn from 'clsx';
import React from 'react';

export interface Props extends React.HTMLAttributes<HTMLParagraphElement> {
  weight?:'regular' | 'bold';
}

export const Paragraph: React.FunctionComponent<Props> = ({
  weight = 'regular',
  className,
  children,
  ...props
}) => (
  <p
    className={cn(styles['paragraph'], className, {
      [styles[`-${weight}`]]: !!weight,
    })}
    {...props}
  >
    {children}
  </p>
);

export default Paragraph;
