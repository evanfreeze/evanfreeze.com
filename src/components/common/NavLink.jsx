import React from 'react'
import { Link } from '@reach/router'

const NavLink = (props) => (
    <Link
        {...props}
        getProps={({ isCurrent }) => {
            return {
                style: {
                    fontWeight: isCurrent ? 'bold' : 'normal',
                    textDecoration: isCurrent ? 'underline' : 'none',
                }
            }
        }}
    />
)

export default NavLink
