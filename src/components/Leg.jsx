import { isDisabled } from '@testing-library/user-event/dist/utils'
import React from 'react'

export const Leg = ({ totalLot,
  position,
  optionTypeVal,
  expiryVal,
  strikeCriteriaVal,
  lowerRangeVal,
  upperRangeVal }) => {
  return (
    <div className='mainLegOptions'>

      <div className="groupLegContainer">
        <h4>Lots:</h4>
        <div className="groupLeg">
          <input type="number" min={1} defaultValue={totalLot} />
        </div>
        <div className="groupLeg">
          <select >
            <option value="Buy">{position}</option>
          </select>
        </div>
        <div className="groupLeg">
          <select >
            <option value="Call">{optionTypeVal}</option>

          </select>
        </div>

        <div className="groupLeg">
          <select >
            <option value="Weekly">{expiryVal}</option>
          </select>
        </div>
        <h4>Strike Criteria</h4>

        <div className="groupLeg">
          <select >
            <option value="Strike Type">{strikeCriteriaVal}</option>
          </select>
        </div>
        <h4>Lower</h4>
        <div className="groupLeg">
          <input type="number" min={1} defaultValue={lowerRangeVal} />
        </div>

        <h4>Upper</h4>
        <div className="groupLeg">
          <input type="number" min={1} defaultValue={upperRangeVal} />
        </div>

      </div>
      <div className="optionalLegGroupContainer">

        <div className="optionalLegGroup">
          <input type="checkbox" value="Simple Momentum" />
          <label htmlFor="vehicle1"> Simple Momentum</label>
          <div className="containerOptionalLegGroup">
            <select name="simpleMomentum" id="">
              <option value="">Points</option>
            </select>
            <input defaultValue={1} type="number" />
          </div>

          <div className="optionalLegGroup">
            <input type="checkbox" value="Target Profit" />
            <label htmlFor="vehicle1"> Target Profit</label>
            <div className="containerOptionalLegGroup">
              <select name="simpleMomentum" id="">
                <option value="">Points</option>
              </select>
              <input defaultValue={1} type="number" />
            </div>
          </div>

          <div className="optionalLegGroup">
            <input type="checkbox" value="Stop Loss" />
            <label htmlFor="vehicle1"> Stop Loss</label>
            <div className="containerOptionalLegGroup">
              <select name="simpleMomentum" id="">
                <option value="">Points</option>
              </select>
              <input defaultValue={1} type="number" />
            </div>
          </div>

          <div className="optionalLegGroup">
            <input type="checkbox" value="Trail SL" />
            <label htmlFor="vehicle1"> Trail SL</label>
            <div className="containerOptionalLegGroup">
              <select name="simpleMomentum" id="">
                <option value="">Points</option>
              </select>
              <input defaultValue={1} type="number" />
            </div>
          </div>

          <div className="optionalLegGroup">
            <input type="checkbox" value="Re-entry on TGT" />
            <label htmlFor="vehicle1"> Re-entry on Tgt</label>
            <div className="containerOptionalLegGroup">
              <select name="simpleMomentum" id="">
                <option value="">Re ASAP</option>
              </select>
              <input defaultValue={1} type="number" />
            </div>
          </div>

          <div className="optionalLegGroup">
            <input type="checkbox" value="Reentry on SL" />
            <label htmlFor="vehicle1"> Re-entry on SL</label>
            <div className="containerOptionalLegGroup">
              <select name="simpleMomentum" id="">
                <option value="">Re ASAP</option>
              </select>
              <input defaultValue={1} type="number" />
            </div>
          </div>
        </div>

      </div>

    </div >
  )
}
