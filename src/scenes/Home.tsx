import React from 'react'
import { StylesHomeContainer } from '../appStyles'
import * as someStyles from '../styles/themes';
import { Div1, Input1 } from "../styles/stylesComponents";

export const Home: React.FC = () => {

  return (
    <StylesHomeContainer>
      <div className={someStyles.myThemes}>
        <h2>Home</h2>
        <p>Parrafo</p>
        <h3 className="myh3">texto H3</h3>
      </div>
      <Div1>
        <h1>Hola h1 dentro Div1</h1>
        <Input1 className={someStyles.ThemeSizeInputs} placeholder='Escribe algo..' type="password" />
      </Div1>
    </StylesHomeContainer>
  );
}
