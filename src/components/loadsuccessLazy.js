import React from "react";
import loadable from "@loadable/component";
import Loading from "./loading";

const LoadableComponent = loadable(() => import("./loadsuccess.js"), {
    fallback: <Loading/>
});

export default class LoadLazy extends React.Component {
    render() {
        return (
            <LoadableComponent/>
        )
    }
}

