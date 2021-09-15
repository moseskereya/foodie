import React from 'react';
class Nav extends React.Component {
    render() { 
        return (
            <div>
                <nav>
                    <div className="logo">
                        🍞
                    </div>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                    </ul>
                </nav>
            </div>
        )
    }
}
 
export default Nav;