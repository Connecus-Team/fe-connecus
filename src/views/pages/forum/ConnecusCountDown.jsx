export default function ConnecusCountDown({completed, days, hours, minutes, seconds}) {
  if (completed) {
    return <span className="text-secondary">Finished</span>;
  } else {
    return (
      <>
        {days} days and {hours}:{fulfillNumber(minutes)}:{fulfillNumber(seconds)}
      </>
    );
  }
}

/**
 *
 * @param {number} number
 * @param {number} length
 * @returns {string}
 */
function fulfillNumber(number, length = 2) {
  if (number.toString().length < length) {
    const array = new Array(length - number.toString().length).fill('0');
    number = array.join('') + number;
  }
  return number;
}
