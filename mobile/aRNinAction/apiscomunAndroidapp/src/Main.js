import React from 'react'
import Home from './Home'
import Toolbar from './Toolbar'
import ViewPager from './ViewPager'

function getScene(scene) {
    switch (scene) {
        case 'Home':
            return Home
        case 'Toolbar':
            return Toolbar
        case 'ViewPager':
            return ViewPager            
        default:
            return Home
    }
}

const Main = (props) => {

    const Scene = getScene(props.scene)
    
    return (
        <Scene openDrawer={props.openDrawer} jump={props.jump} />
    )
}

export default Main