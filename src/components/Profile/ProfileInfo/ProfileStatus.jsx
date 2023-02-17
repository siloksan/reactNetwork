import React, {useEffect, useState} from "react";

const ProfileStatus = (props) => {
    //useState - функция возващающая массив
    //мы передайм нашим переменным начальное значение
    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    useEffect(() => {
        setStatus(props.status);
    }, [props.status]
        )
    //при нажатии на текст статуса в editMode передаётся значение true и наш input становится активным
    const activateEditMode = () => {
        setEditMode(true)
    }
    //здесь соответственно editMode присваивается значение false
    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status);
    }

    const onStatusChange = (e) => {
        setStatus(e.currentTarget.value)
    }

    return (
        <div>
            {!editMode &&
                <div>
                    <span onDoubleClick={activateEditMode}>{props.status || '___'}</span>
                </div>
            }
            {editMode &&
                <div>
                    <input onChange={onStatusChange} autoFocus={true} onBlur={deactivateEditMode}
                           value={status}/>
                </div>
            }
        </div>
    )
}

export default ProfileStatus;