import React from 'react'
import { useStateValue } from './stateProvider'

function Header() {
    const [{list}, dispatch] = useStateValue();
    return (
        <div>
            {console.log(list)}
        </div>
    )
}

export default Header
