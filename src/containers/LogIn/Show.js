/* eslint-disable no-alert */
import React from 'react';
import {Route} from "react-router-dom";

const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export default (async function ShowResults(values) {
    await sleep(500); // simulate server latency
    ChangeThePage();
    window.open(`${process.env.PUBLIC_URL}/home`, "_self");
    window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
});

function ChangeThePage() {
    return (
        <Route path={'/home'}/>
    );
}