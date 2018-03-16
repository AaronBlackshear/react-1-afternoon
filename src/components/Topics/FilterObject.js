import React, { Component } from 'react';

class FilterObject extends Component {
    constructor() {
        super()
        this.state = {
            unFilteredArray: [{ student: 'Aaron', age: 18 }, { student: 'Jarid', size: 130 }, { student: 'Joe', size: 140 }],
            userInput: '',
            filteredArray: []
        };
        // this.filterOriginalArray = this.filterOriginalArray.bind(this);
    }

    inputChange(val) {
        this.setState({
            userInput: val
        })
    }

    filterOriginalArray(arr) {
        // for (var i = 0; i < arr.length; i++) {
        //     for (let key in arr[i]) {
        //         if (key === this.state.userInput) {
                    
        //             console.log(this.state.filteredArray.push())
        //         }
        //     }
        // }
        // this.setState({
        //     filteredArray : 
        // })

        var newArray = this.state.unFilteredArray.filter((cur) => (cur[this.state.userInput]));

        this.setState({
            filteredArray: newArray
        })

    }

    // newArray(){
    //     this.setState({
    //         filteredArray: objects
    //     })
    // }
    //{newArray()}

    render() {

        return (
            <div className='puzzleBox filterObjectPB'>
                <h4>Filter Object</h4>
                <span className='puzzleText'>{JSON.stringify(this.state.unFilteredArray)}</span>
                <input className='inputLine' onChange={e => { this.inputChange(e.target.value) }} ></input>
                <button className='confirmationButton' onClick={() => this.filterOriginalArray(this.state.unFilteredArray)} >Filter Array</button>
                <span className='resultsBox filterObjectRB'> {JSON.stringify(this.state.filteredArray)} </span>
            </div>
        )
    }
}

export default FilterObject;