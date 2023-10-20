import {useState, useRef} from 'react'
import {Link} from 'react-router-dom'
import Login from '../features/user/Login'

function ExternalPage(){


    return(
        <div className="bg-[#ecfffd]">
                <Login />
        </div>
    )
}

export default ExternalPage