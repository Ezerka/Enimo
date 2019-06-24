
const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

const ShowResults = async (props) => {
    await sleep(400);
    window.open(`${process.env.PUBLIC_URL}/home`, "_self");
    window.alert(`You submitted:\n\n${JSON.stringify(props.values, null, 2)}`);

};

export default ShowResults