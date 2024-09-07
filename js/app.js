import React from "react";
import ReactDOM from "react-dom";

import { SearchEngine} from "./components/SearchEngine";

const Main = () => {
    return <SearchEngine />;
};

ReactDOM.render(<Main />, document.getElementById("app"));

