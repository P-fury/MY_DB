import React from "react";
import ReactDOM from "react-dom";

import { SearchEnginge} from "./components/search_enginge";

const Main = () => {
    return <SearchEnginge />;
};

ReactDOM.render(<Main />, document.getElementById("app"));

