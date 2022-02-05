import React from "react";
import './Subscribe.css'


function Subscribe() {
    return <button 
    style={{float: 'right', marginRight: 70, marginTop: -65}}
    className="subbutton">
        SUBSCRIBE
    </button>
}

// export default class Subscribe extends React.Component{
//     constructor(props) {
//         super(props);

//         this.state = {
//             text: "Subscribe",
//         };
    
//     }
//     changeText = () => {
//         this.setState({
//             text: "변경 성공!",
//         });
//     };

//     render() {
//         return (
//             <div>
//             <h1>{this.state.text}</h1>
//             <button 
//             style={buttonstyle}
//             onClick={this.changeText}>
//                 Subscribe
//             </button>
//         </div>
//         )
//     }
    
// }

export default Subscribe;