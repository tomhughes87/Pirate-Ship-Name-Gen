import React from 'react'
import { JsxElement } from 'typescript'
import './FirstWord.css'

export default function FirstWord():JSX.Element {
  return (
    <form>
    {/* <label for="Prefixes">Prefixes</label> */}
    <select id="Prefixes" name="Prefixes">
        <option value=""></option>
        <option value="The">The</option>
        <option value="H.M.S">H.M.S</option>
        <option value="S.M.S">S.M.S</option>
        <option value="H.M.A.S">H.M.A.S</option>
        <option value="H.B.M.S">H.B.M.S</option>
        <option value="R.F.A">R.F.A</option>
        <option value="K.D.M">K.D.M</option>
        <option value="H.N.L.M.S">H.N.L.M.S</option>
        <option value="K.N.M">K.N.M</option>
        <option value="N.M.S">N.M.S</option>
    </select>
    </form>
  )
}
