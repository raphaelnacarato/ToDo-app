import 'modules/bootstrap/dist/css/bootstrap.min.css'
import 'modules/font-awesome/css/font-awesome.min.css'
import '../templates/custom.css'

import React from 'react'
import Menu from '../templates/menu'
import Routes from './router'

export default props => (
    <div className="container">
        <Menu />        
        <Routes />
    </div>
)