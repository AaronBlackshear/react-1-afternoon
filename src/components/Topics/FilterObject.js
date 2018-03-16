import React, { Component } from 'react';

class FilterObject extends Component{
    constructor(){
        super()
        this.state = {
            unFilteredArray: [{student: 'Aaron', age: 18, size: 100},{student: 'Jarid', age: 24, size: 130},{student: 'Joe', age: 22, size: 140}],
            userInput: '',
            filteredArray: []
        };
    }

    inputChange(val){
        this.setState({
            userInput: val
        })
    }

    

    render(){
        
        return(
            <div>
                <h4 classNam='puzzleBox filterObjectPB'>Fliter Object</h4>
                <span className='puzzleText'></span>
                <input className='inputLine' onChange={e => {this.inputChange(e.target.value)}} ></input>
                <button className='confirmationButton' onClick={} ></button>
                <span calssName='resultsBox filterObjectPB'></span>
            </div>
        )
    }
}

export default FilterObject;