import React, { Component } from 'react';

class EvenAndOdd extends Component {

    render() {

        return (
            <div className='puzzleBox evenAndOddPB'>
                <input className='inputLine' />
                <button className='confirmationButton'></button>
                <span className='resultsBox'></span>
                <span className='resultsBox'></span>
            </div>
        )
    }
}

export default EvenAndOdd;