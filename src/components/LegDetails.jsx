import React, { useContext, useState } from 'react'
import { LegBuilderOptions } from './LegBuilderOptions'
import { legDetailsContext } from '../App'
import { Leg } from './Leg'

export const LegDetails = () => {

    let arr = [<LegDetails />]

    let context = useContext(legDetailsContext)

    return (
        <div style={{ display: context.display }} className='mainLegDetails'>
            <div className="selectSegments">
                <div className="inputContainer">
                    <h4>Select Segments</h4>
                    <div className="inputGroup">
                        <input name='inputGroup' type="radio" value="Futures" />
                        <label className='inputGroup' >Futures</label>
                    </div>

                    <div className="inputGroup">
                        <input name='inputGroup' type="radio" value="Options" />
                        <label className='inputGroup' >Options</label>
                    </div>

                </div>
            </div>
            <LegBuilderOptions Position="Position" TotalLot="Total Lot" expiry="Expiry" lowerRange='Lower range' optionType="Option Type" strikeCriteria="Strike Criteria" upperRange="Upper Range" />

            <div className="buttonGroup">
                <button onClick={() => {
                    context.setLegArr([...context.legArr, <Leg {...context.legObj}/>])
                    console.log(context.legArr)
                }} style={{ background: "#375a9e", color: "white" }}>Add Leg</button>
                <button onClick={()=>{
                    context.setDisplay("none")
                }}>Cancel</button>
            </div>

        </div>
    )
}
