import React, { useContext, useEffect, useState } from 'react'
import {legDetailsContext} from "../App"

export const LegBuilderOptions = () => {
    let context = useContext(legDetailsContext)

    let {information: info, setInformation: setInfo} = context

    // let {information: info, setInformation: setInfo} = context 



    let [totalLot, setTotalLot] = useState(1), [position, setPosition] = useState("Buy"), [optionTypeVal, setOptionTypeVal] = useState("Call"), [expiryVal, setExpiryVal] = useState("Weekly"), [strikeCriteriaVal, setStrikeCriteriaVal] = useState("Strike Type"), [lowerRangeVal, setLowerRangeVal] = useState(50), [upperRangeVal, setUpperRangeVal] = useState(200)
    let infoArr = [
        totalLot,
        position,
        optionTypeVal,
        expiryVal,
        strikeCriteriaVal,
        lowerRangeVal,
        upperRangeVal]

    useEffect(() => {
        setInfo(infoArr)
    }, [
        totalLot,
        position,
        optionTypeVal,
        expiryVal,
        strikeCriteriaVal,
        lowerRangeVal,
        upperRangeVal
    ])
    return (
        <div className='mainLegBuilderOptions'>
            <div className="groupLegBuilderOptions">
                <h4>Total Lot</h4>
                <input onInput={(e) => { setInfo(infoArr); setTotalLot(Number(e.target.value)) }} type="number" min={1} defaultValue={1} />
            </div>
            <div className="groupLegBuilderOptions">
                <h4>Position</h4>
                <select onInput={(e) => {
                    setPosition(e.target.value)
                }}  >
                    <option value="Buy">Buy</option>
                    <option value="Sell">Sell</option>
                </select>
            </div>
            <div className="groupLegBuilderOptions">
                <h4>Option Type</h4>
                <select onClick={(e) => {
                    setOptionTypeVal(e.target.value)
                }} >
                    <option value="Call">Call</option>
                    <option value="Put">Put</option>
                </select>
            </div>

            <div className="groupLegBuilderOptions">
                <h4>Expiry</h4>
                <select onClick={(e) => {
                    setExpiryVal(e.target.value)
                }} >
                    <option value="Weekly">Weekly</option>
                    <option value="Monthly">Monthly</option>
                </select>
            </div>

            <div className="groupLegBuilderOptions">
                <h4>Strike Criteria</h4>
                <select onClick={(e) => {
                    setStrikeCriteriaVal(e.target.value)
                }} >
                    <option value="Strike Type">Strike Type</option>
                    <option value="Premium Range">Premium Range</option>
                    <option value="Closest Premium">Closest Premium</option>
                    <option value="Straddle Width">Straddle Width</option>
                </select>
            </div>

            <div className="groupLegBuilderOptions">
                <h4>Lower Range</h4>
                <input onClick={(e) => {
                    setLowerRangeVal(e.target.value)
                }} type="number" min={1} defaultValue={50} />
            </div>

            <div className="groupLegBuilderOptions">
                <h4>Upper Range</h4>
                <input onClick={(e) => {
                    setUpperRangeVal(e.target.value)
                }} type="number" min={1} defaultValue={200} />
            </div>
        </div>
    )
}
