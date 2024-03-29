import React ,{Component} from 'react'
//Using Class Components
/*class Square extends React.Component {

    render() {

        return (
            <button className="square" onClick={() => this.props.onClick()}>
                {this.props.value}
            </button>
        );
    }
}*/

//Using functional components
const Square=(props)=>{
    return (
        <button className="square" onClick={props.onClick}>
            {props.value}
        </button>
    );
}
export default Square