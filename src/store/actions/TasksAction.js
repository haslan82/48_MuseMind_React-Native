import { Alert } from "react-native"
import { ADDTASK, DELETETASK, UPDATETASK } from "../types/tasksTypes"


export const addNewTask=(task)=>{
    return async dispatch =>{
       // console.log(task)
        dispatch({
            type: ADDTASK,
            payload: task,
        })
        // Alert.alert('Task Eklendi')
    }
}
export const deleteTask=taskId=>{
    return async dispatch =>{
       // console.log(task)
        dispatch({
            type:DELETETASK,
            payload: taskId,
        })
        Alert.alert('Task Silindi')
    }
}

export const changeTask=task=>{
    return async dispatch =>{
       // console.log(task)
        dispatch({
            type:UPDATETASK,
            payload: task,
        })
        Alert.alert('Task Güncellendi')
    }
}