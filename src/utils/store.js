import {configureStore} from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice  from "./searchSlice";
import videolistSlice from "./VideolistSlice";
const store=configureStore({
    reducer:{
        app:appSlice,
        search:searchSlice,
        videolist:videolistSlice,
    }
});

export default store;