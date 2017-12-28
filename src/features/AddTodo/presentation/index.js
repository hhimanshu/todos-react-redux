import React from "react";

export const AddForm = ({title, onTitleChange, onClickSave}) => (
    <div>
        <h2>Add To Do</h2>
        <input type='text'
               onChange={onTitleChange}
               value={title}/>

        <input type="submit"
               value="Add ToDo"
               className="btn btn-primary"
               onClick={onClickSave}/>
    </div>
);