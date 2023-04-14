import React from 'react'
import { StylesHomeContainer } from '../appStyles'
import * as someStyles from '../styles/themes';

export const Home: React.FC = () => {

  return (
    <StylesHomeContainer>
      <div className={someStyles.myThemes}>
        <h2>Home</h2>
        <p>Parrafo</p>
        <h3 className='myh3'>texto H3</h3>
      </div>
    </StylesHomeContainer>
  );
}
