import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { Provider } from 'react-redux'
import { configureStore } from '@reduxjs/toolkit'
import Theme from './context/Theme.jsx'
import todoSlice from "./features/task.js";

const store = configureStore({
    reducer: {
        todo:todoSlice
    }
})

ReactDOM.createRoot(document.getElementById('root')).render(
     <Provider store={store}>
         <Theme>
             <App />
         </Theme>
     </Provider>
)
