import { createSlice } from "@reduxjs/toolkit";
export const taskListSlices = createSlice({
  name: "todolist",
  initialState: {
    value: [
      { id: Date.now(), name: "Walk around the street", completeTask: false },
    ],
  },
  reducers: {
    createTask: (state, action) => {
      state.value.unshift(action.payload);
    },
    finishTask: (state,action)=>{
       const taskID = action.payload;
       const taskList = state.value.find((items)=>  items.id === taskID.id);
       if(taskList){
          taskList.completeTask = !taskList.completeTask;
       }
    },
    deleteTask: (state,action)=>{
        const removeTask = action.payload
        state.value = state.value.filter((items) => items.id !== removeTask.id);
    }
  },
});

export const { createTask , finishTask, deleteTask} = taskListSlices.actions;
export default taskListSlices.reducer;
