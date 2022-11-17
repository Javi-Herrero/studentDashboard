import React from 'react'
import Title from '../smallerComponents/title'
import Tabs from '../smallerComponents/tabs'


const Header = (props) => {
    return (
        <div className={props.className}>
            <Title className={'head'} title={'Students Dashboard'} extras={<Tabs />} />
        </div>
    )
}
export default Header