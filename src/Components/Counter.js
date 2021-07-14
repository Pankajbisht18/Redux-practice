import React, { Component } from "react";
import { connect } from 'react-redux';

class Counter extends Component {
    state = {count:500}
    render(){
        return(
            <div className="container text-center">
                <h1>Counter</h1>
                <h3>Value is : {this.props.ctr}</h3>
                <input 
                    type="button"
                    value="Increment"
                    className="btn btn-primary mx-3"
                    onClick={this.props.onIncrementCounter}
                />
                <input 
                    type="button"
                    value="Decrement"
                    className="btn btn-danger mx-3"
                    onClick={this.props.onDecrementCounter}
                />
                <input 
                    type="button"
                    value="Add"
                    className="btn btn-primary mx-3"
                    onClick={this.props.onAddCounter}
                />
                <input 
                    type="button"
                    value="Subtract"
                    className="btn btn-danger mx-3"
                    onClick={this.props.onSubtractCounter}
                />
            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    return {ctr:state.count};
}
const mapDispatchToProps=(dispatch)=>{
    return{
        onIncrementCounter:()=>{dispatch({type:"Increment"})},
        onDecrementCounter:()=>{dispatch({type:"Decrement"})},
        onAddCounter:()=>{dispatch({type:"Add",payload:{value:500}})},
        onSubtractCounter:()=>{dispatch({type:"Subtract",payload:{value:100}})}
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(Counter);