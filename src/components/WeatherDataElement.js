export default function WeatherDataElement({ temperature, children }) {
  /*   const props = {
    temperature: 24˚,
    children: [˚C Emoji],
  } */
  // console.log();

  // const children = props.children;

  // const { children } = props;

  return (
    <span>
      {temperature} {children}
    </span>
  );
}
