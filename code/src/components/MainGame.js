import React from 'react'
import { useSelector, useDispatch} from "react-redux";
import { fetchGameSteps } from '../reducers/game';
import Loading from './Loading';

import { useNavigate } from 'react-router-dom';
import { MainGameStyle, DirectionSection, WinSection, DirectionButton } from "./Style"

const MainGame = () => {
    const gameObject = useSelector((store) => store.game.gameObject)
    const username = useSelector((store) => store.game.username)
    const loading = useSelector((state) => state.game.loading)
    const navigate = useNavigate()

    const dispatch = useDispatch()

    const onRestartClick = () => {
        navigate('/')
    }


    return (
       
        
        
       

         
        <MainGameStyle>
            {loading && <Loading />}   
            
            {/* Something in this area is disturbing the loading to show, instead it shows empty squares */}
            
            <div class="nes-container with-title is-centered">
            <p className="title" tabIndex='0'>User: {username} </p>
            <p tabIndex='0'>{gameObject.description}</p>
            </div>
            
            <DirectionSection className="nes-container with-title is-centered">
            {gameObject.actions.length > 0 && (
                <div>
                 {gameObject.actions.map((action) => {
                    return(

                        <div key={action.direction}>
                        <p tabIndex='0'>{action.description}</p>
                      
                        <DirectionButton
                            type="button" 
                            className="nes-btn is-primary"
                            tabIndex='0'
                            onClick={() => {
                                dispatch(fetchGameSteps({ direction: action.direction }))
                            }}
                        >

                            <span>
                                Go {''}
                                {action.direction +
                                (action.direction === 'North'
                                    ? ' ⬆'
                                    : action.direction === 'South'
                                    ? ' ⬇'
                                    : action.direction === 'West'
                                    ? ' ⬅'
                                    : action.direction === 'East'
                                    ? ' ➡'
                                    : '')}
                            </span>
                        </DirectionButton>
                    </div>
                    )
                    
                    })}
                </div>
            )}
            
       
            {gameObject.coordinates === "1,3" && (
                <WinSection>
                    <h3>You won!</h3>
                    <button 
                        type="button" 
                        class="nes-btn is-success"
                        tabIndex='0'
                        onClick={onRestartClick}>
                        Restart{' '}
                    </button>
                </WinSection>
            )}
             </DirectionSection>
            
        </MainGameStyle>
    
    )
}

export default MainGame