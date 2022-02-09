import styles from './paragraph.module.scss';
import cn from 'clsx';
import React from 'react';

type Color =
  | 'darkLow'
  | 'darkMedium'
  | 'darkHigh'
  | 'lightSolid'
  | 'lightHigh'

type Weight = 'regular' | 'bold'

export interface Props extends React.HTMLAttributes<HTMLParagraphElement> {
  weight?: Weight;
  color: Color;
}

export const Paragraph: React.FunctionComponent<Props> = ({
  weight = 'regular',
  color,
  className,
  children,
  ...props
}) => (
  <p
    className={cn(styles['paragraph'], className, {
      [styles[`-${weight}`]]: !!weight,
      [styles['-darkLow']]: color === 'darkLow',
      [styles['-darkMedium']]: color === 'darkMedium',
      [styles['-darkHigh']]: color === 'darkHigh',
      [styles['-lightSolid']]: color === 'lightSolid',
      [styles['-lightHigh']]: color === 'lightHigh',
    })}
    {...props}
  >
    {children}
  </p>
);


Paragraph.defaultProps = {
  weight: 'regular',
  color: 'darkHigh'
}

export default Paragraph;
