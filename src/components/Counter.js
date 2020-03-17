import React, { useState } from 'react'
import { connect } from 'react-redux'

import * as actions from '../store/actions/creators' 

const Counter = ({currentCount, addOne, addTen, subtractOne, subtractTen, customAdd, customSubtract}) => {

    const [add, setAdd] = useState(0)
    const [subtract, setSubtract] = useState(0)

    const setVal = e => {
        const val = e.target.value
        switch (e.target.name) {
            case "add":
                return setAdd(val)
            case "subtract":
                return setSubtract(val)
            default:
                return
        }
    }
    
    const handleAdd = e => {
        e.preventDefault()
        customAdd(e.target.add.value)
    }

    const handleSubtract = e => {
        e.preventDefault()
        customSubtract(e.target.subtract.value)
    }

    return (
        <React.Fragment>
            <div className="counter">
                <button onClick={addOne}>+1</button>
                <button onClick={addTen}>+10</button>
                <button onClick={subtractOne}>-1</button>
                <button onClick={subtractTen}>-10</button>
                <form className="input" onSubmit={handleAdd}>
                    <h4>...or ADD your own value</h4>
                    <input type="number" onChange={setVal} name="add" value={add}/>
                    <input type="submit" value="ADDT"/>
                </form>
                <form className="input" onSubmit={handleSubtract}>
                    <h4>...or SUBTRACT your own value</h4>
                    <input type="number" onChange={setVal} name="subtract" value={subtract}/>
                    <input type="submit" value="SUBTRACT"/>
                </form>
            </div>
            <div className="count">
                {currentCount}
            </div>
        </React.Fragment>
    )
}

const mapStateToProps = state => {
    return {
        currentCount: state.counter.count
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addOne: () => dispatch(actions.addOne()),
        addTen: () => dispatch(actions.addTen()),
        subtractOne: () => dispatch(actions.subtractOne()),
        subtractTen: () => dispatch(actions.subtractTen()),
        customAdd: val => dispatch(actions.customAdd(val)),
        customSubtract: val => dispatch(actions.customSubtract(val))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter)