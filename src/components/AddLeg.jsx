import React, { useContext } from 'react'
import { legDetailsContext } from '../App'

export const AddLeg = () => {

    let display = useContext(legDetailsContext)

    return (
        <div onClick={()=>{display.setDisplay('flex')}} className='mainAddLeg'>
            <div className="addLegContainer">
                <h3>Legs</h3>
                <h3 className='legAdder'>+ Add Leg</h3>
            </div>
        </div>
    )
}
