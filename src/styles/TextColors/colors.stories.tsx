import * as React from 'react';
import styles from './colors.module.scss'
import cn from 'clsx'

export default {
  title: 'Styles',
}

export const TextColors: React.FC<HTMLDivElement> = ({ className }) => {
  return (
    <div className={styles['container']}>
      <div className={cn(styles['colors'], className , {
        [styles['-darkLow']]: true,
      })}
      >
        darkLow
      </div>
      <div className={cn(styles['colors'], className , {
        [styles['-darkMedium']]: true,
      })}
      >
        darkMedium
      </div>
      <div className={cn(styles['colors'], className , {
        [styles['-darkHigh']]: true,
      })}
      >
        darkHigh
      </div>
      <div className={cn(styles['colors'], className , {
        [styles['-lightSolid']]: true,
      })}
      >
        lightSolid
      </div>
      <div className={cn(styles['colors'], className , {
        [styles['-lightHigh']]: true,
      })}
      >
        lightHigh
      </div>
    </div>
  )
}


