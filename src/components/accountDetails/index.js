import React from 'react'
import UserDeshbord from './UserDeshbord'
import UserDetails from './UserDetails'

const AccountDetailsComp = ({ session }) => {

    console.log(session)
    return (
        <div>
            <UserDetails session={session} />
            <UserDeshbord />
        </div>
    )
}

export default AccountDetailsComp