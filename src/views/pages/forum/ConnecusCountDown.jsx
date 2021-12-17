export default function ConnecusCountDown({completed, days, hours, minutes, seconds}) {
  if (completed) {
    return <>Finished</>;
  } else {
    return (
      <>
        {days} days and {hours}:{minutes}:{seconds}
      </>
    );
  }
}
