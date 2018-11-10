import React, { Component } from 'react';

// import './App.css';
import "../murrent.css";

const box1 = {
    backgroundColor: '#000000'

}
const box2 = {
    backgroundColor: '#cb2025'

}
const box3 = {
    backgroundColor: '#f8b334'

}
const box4 = {
    backgroundColor: '#97bf0d'

}
const box5 = {
    backgroundColor: '#00a096'

}
const box6 = {
    backgroundColor: '#93a6a8'
}
class Squares extends Component {
    render() {
        return (
            <div className="container-fluid">
                <div>
                    <div className="container boxes">
                        <div className="style_prevu_kit" style={box1}><p className="boxText">Coming Soon!!!!!!</p></div>
                        <div className="style_prevu_kit" style={box2}><p className="boxText">Coming Soon!!!!!!</p></div>
                        <div className="style_prevu_kit" style={box3}><p className="boxText">Coming Soon!!!!!!</p></div>
                        <div className="style_prevu_kit" style={box4}><p className="boxText">Coming Soon!!!!!!</p></div>
                        <div className="style_prevu_kit" style={box5}><p className="boxText">Coming Soon!!!!!!</p></div>
                        <div className="style_prevu_kit" style={box6}><p className="boxText">Coming Soon!!!!!!</p></div>
                        <i class="feature-icon fas fa-grin-stars"></i>
                    </div>
                </div>
                <hr />

                <div class="container text-center">


                    <p class="homeQuote">"If we cannot now end our differences, at least we can help make the world safe for diversity."</p>

                    <p class="homeAuthor">John F. Kennedy</p>
                    <hr class="hr3" />
                </div>
            </div>
        );
    }
}

export default Squares;
