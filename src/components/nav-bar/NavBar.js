import React from 'react'
import './NavBar.css'
import Image from '../image/Image'

class NavBar extends React.Component {
    render() {
        return(
            <nav className="navBar">
                <div className="navBar-content">
                    <a href="#" className="navBarAnchor">Gmail</a>
                    <a href="#" className="navBarAnchor">Imagens</a>
                    <a href="#" className="apps-button">
                        <div className="horizontalbar firstHorizontal"></div>
                        <div className="horizontalbar secondHorizontal"></div>
                        <div className="verticalbar firstVertical"></div>
                        <div className="verticalbar secondVertical"></div>
                    </a>
                    <a href="#">
                        <Image className="navBarImage" source="yago.jpg" />
                    </a>
                </div>
            </nav>
        )
    }
}

export default NavBar