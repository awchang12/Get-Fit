import React from 'react'

const EditUser = (props) => {
    return( <form className="ui small form" onSubmit={(event) => props.editUser(event) }>
    <div className="fields">
        <div className="field">
            <label>Username</label>
            <input type="text" name="username" placeholder="Username"/>
        </div>
    </div>
    <div className="fields">
        <div className="field">
            <label>Starting Weight</label>
            <input type="number" name="startingWeight" placeholder="Starting Weight"/>
        </div>
        <div className="field">
            <label>Goal Weight</label>
            <input type="number" name="goalWeight" placeholder="Goal Weight"/>
        </div>
    </div>
    <div className="fields">
        <div className="field">
            <label>Height in inches</label>
            <input type="number" name="height" placeholder="Inches"/>
        </div>
        <div className="field">
            <label>Age</label>
            <input type="number" name="age" placeholder="Age"/>
        </div>
    </div>

    <button className="ui button" type="submit">Submit</button>
</form>)
}

export default EditUser