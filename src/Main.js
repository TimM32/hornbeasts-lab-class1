import React from "react";
import HornedBeast from "./HornedBeast";

class Main extends React.Component {
    render () {
        return (
            <main>
                <HornedBeast title="Rhino" horns="one" descripition="From Africa"/>
                <HornedBeast title="Deer" horns="two" descripition="Wild animal that loves cars"/>

            </main>
        );
    }



}

export default Main;