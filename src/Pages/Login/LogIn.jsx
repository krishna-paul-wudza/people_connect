import React from 'react'

const LogIn = () => {
    return (
        <div>
            <form action=''>
                <input type='email' name='email' placeholder='Email' />
                <input type='password' name='pwd' placeholder='Passord' />
                <input type='submit' value='Login' />
            </form>
        </div>
    )
}

export default LogIn