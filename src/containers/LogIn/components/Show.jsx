
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

export default (async function ShowResults(values) {
    await sleep(400); // simulate server latency
    window.open(`${process.env.PUBLIC_URL}/home`, "_self");
    //window.alert(`You submitted:\n\n${JSON.stringify(values, null, 2)}`);
});