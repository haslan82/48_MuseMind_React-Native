import { Alert } from "react-native"
import { ADDTASK, DELETETASK } from "../types/tasksTypes"

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