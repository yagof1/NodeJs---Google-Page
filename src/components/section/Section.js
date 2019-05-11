import React from 'react'
import './Section.css'
import Image from '../image/Image'

class Section extends React.Component {
    render(){
        return(
            <div className="googleSearchContainer">
                <Image className="googleImage" source="googlelogo_color.png" />
                <div className="googleSearchInput">
                    <div className="googleInput">
                        <input type="text" />
                    </div>
                    <div className="googleInputIcons">
                        <a href="#">
                            <i className="far fa-keyboard"></i>
                        </a>
                        <a href="#">
                            <Image className="googleMicrofone" source="microfone.png" />
                        </a>
                    </div>
                </div>
                <div className="googleSearchButtons">
                    <button>
                        Pesquisa Google
                    </button>
                    <button>
                        Estou com sorte
                    </button>
                </div>
            </div>
        )
    }
}

export default Section