import React from "react";
import preloader from "../../../asets/images/1474.gif";

const Preloader = () => {
    //div и role={'main'} добавил для теста
    return    <div role={'main'}><img src={preloader} alt="preloader"/></div>
}

export default Preloader;