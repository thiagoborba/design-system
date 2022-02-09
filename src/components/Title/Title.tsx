import * as React from 'react';
import cn from 'clsx';
import styles from './title.module.scss';

export interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
  size?: 'xx-small' | 'x-small' | 'small' | 'medium' | 'large' | 'x-large';
  [key: string]: any;
}

export const Title: React.FunctionComponent<Props> = ({
  size,
  className,
  weight,
  ...props
}) => (
  <h1
    className={cn(styles['title'], className, {
      [styles['-xx-small']]: size === 'xx-small',
      [styles['-x-small']]: size === 'x-small',
      [styles['-small']]: size === 'small',
      [styles['-medium']]: size === 'medium',
      [styles['-large']]: size === 'large',
      [styles['-x-large']]: size === 'x-large',
    })}
    {...props}
  >
    { props.children }
  </h1>
);

Title.defaultProps = {
  weight: 'bold',
}

export default Title;
