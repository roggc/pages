import React from 'react'
import {RowEnd,Float} from './styled'
import {Link} from 'react-router-dom'

export default
()=>
{
  const el=
  <RowEnd>
    <Float><Link to='/'>home</Link></Float>
    <Float><Link to='/about'>about</Link></Float>
  </RowEnd>
  return el
}
