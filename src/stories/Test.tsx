import React from 'react';
import styles from './Test.module.scss'

interface Props {
  label: string
}

export const Test = (props: Props) => (
  <div className={styles['test']} > {props.label} </div>
);
