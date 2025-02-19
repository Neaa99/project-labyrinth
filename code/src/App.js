import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import { combineReducers, configureStore } from '@reduxjs/toolkit'
import "nes.css/css/nes.min.css";

import game from './reducers/game'
import StartPage from './components/StartPage'
import MainGame from './components/MainGame'
import Loading from './components/Loading'
import NotFound from 'components/NotFound';
import { ui } from 'reducers/ui';

import {Container, Wrapper} from './components/Style'

const reducer = combineReducers({
  game: game.reducer,
  ui: ui.reducer
})

const store = configureStore({ reducer })


export const App = () => {
  return (
    <Provider store={store}>
      <Container>
        <Wrapper>
        <Loading />
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartPage />}/>
          <Route path="/MainGame" element={<MainGame />}/>
          <Route path="/404" element={<NotFound />}/>
          <Route path="*" element={<Navigate to="/404" replace />}/>
        </Routes>
        </BrowserRouter>
        </Wrapper>
      </Container>
    </Provider>
  )
}
