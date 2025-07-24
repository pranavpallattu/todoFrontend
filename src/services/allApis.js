import { commonApi } from "./commonApi";
import { serverUrl } from "./serverUrl";

// get All tasks / filter / sort

export const addTaskApi=async(reqBody)=>{
    return await commonApi("POST",`${serverUrl}/api/tasks`,reqBody,"")
}

// get All tasks / filter / sort

export const getAllTasksApi=async(query)=>{
    return await commonApi("GET",`${serverUrl}/api/tasks${query ? `?${query}` : ''}`,{},"")
}

// delete task

export const deleteTaskApi=async(id)=>{
    return await commonApi("DELETE",`${serverUrl}/api/tasks/${id}`,{},"")
}

// update task / toggle / title

export const updateTaskApi=async(id,reqBody)=>{
    return await commonApi("PUT",`${serverUrl}/api/tasks/${id}`,reqBody,"")
}