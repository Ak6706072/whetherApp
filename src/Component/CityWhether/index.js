export default function CityWhether(props) {
  // console.log(props.data);
  return (
    <div>
      Minmum temperature:
      {Object.keys(props.data).length !== 0 ? props.data.main.temp_min : null}
      Maximum temperature: <br />
      {Object.keys(props.data).length !== 0 ? props.data.main.temp_max : null}
      wind Speed : <br />
      {Object.keys(props.data).length !== 0 ? props.data.wind.speed : null}
    </div>
  );
}
