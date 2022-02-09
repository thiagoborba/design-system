import * as React from 'react';
import styles from './title.module.scss';

type As =
| 'h1'
| 'h2'
| 'h3'
| 'h4'
| 'h5'
| 'h6'

export interface Props extends React.HTMLAttributes<HTMLHeadingElement> {
  as?: As,
  [key: string]: any;
}

export const Title: React.FunctionComponent<Props> = ({
  as: Component = 'h1',
  className,
  ...props
}) => {

  return (
    <Component
      className={styles['title']}
      {...props}
    >
      { props.children }
    </Component>
  );
}

Title.defaultProps = {
  as: 'h1'
}

export default Title;
