import { configureStore } from "@reduxjs/toolkit";
import people from "./people";


const store = configureStore({
    reducer : {
        people : people
    }
})

export default store