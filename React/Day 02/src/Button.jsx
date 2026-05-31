import React from 'react'

function Button({ age }) {
    function notify() {
        alert(age)
    }
    return (
        <button onClick={notify}>Click</button>
    )
}

export default Button
