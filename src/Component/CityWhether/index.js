export default function CityWhether(props) {
  console.log(props);
  if (props.data !== undefined) {
    return (
      <div>
        <strong>Minmum temperature:</strong>
        {Object.keys(props.data).length !== 0
          ? props.data.main.temp_min - 273.15
          : null}{" "}
        celsius
        <br />
        <strong>Maximum temperature: </strong>
        {Object.keys(props.data).length !== 0
          ? props.data.main.temp_max - 273.15
          : null}{" "}
        celsius
        <br />
        <strong>wind Speed:</strong>
        {Object.keys(props.data).length !== 0 ? props.data.wind.speed : null}
      </div>
    );
  } else {
    return <div> City name is not find?</div>;
  }
}
