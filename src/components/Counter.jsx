import React, { Component } from 'react';

class Counter  extends Component {
    

    formatCount() {
        const {value} = this.props.counter;
        return value === 0 ? "Zero" : value;
    }

    /*handleIncerement = product => {
        //console.log(product)
        this.setState({
            count: this.state.count + 1
        })
    }*/


    

   
    render() { 
        console.log("props",this.props)

        return(
            <div className="row">
            <div className="col-1">
            <span  className={this.getBadgeClasses()}>{this.formatCount()}</span>
            </div>
            <div className="col">
            <button onClick={() => this.props.onIncrement(this.props.counter)} 
            className="btn btn-secondary btn-sm m-2">+</button>

            <button onClick={() => this.props.onDecrement(this.props.counter)} 
            className="btn btn-secondary btn-sm m-2"
            disabled={this.props.counter.value === 0 ? 'disabled' : ''}
            >-</button>

            <button onClick={() => this.props.onDelete(this.props.counter.id)} 
            className="btn btn-danger btn-sm ">Delete</button>
            
            </div>
                
            </div>
        ); 
    }

    getBadgeClasses() {
        let classes = "badge m-2 badge-";
        classes += (this.props.counter.value === 0) ? "warning" : "primary";
        return classes;
    }
}
 
export default Counter;