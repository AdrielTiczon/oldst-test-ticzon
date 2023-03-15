const oneSecond = 1000;
const oneMinute = oneSecond * 60;
const oneHour = oneMinute * 60;
const oneDay = oneHour * 24;
const oneWeek = 7; // didnt need to convert to ms because of converting it to days
const options = { year: 'numeric', month: 'long', day: 'numeric' };

const parseDate = (date) => {
  let parsedDateLabel = '';
  const dateUploaded = new Date(date);
  const dateUploadedInMS = dateUploaded.getTime();
  const today = new Date().getTime();
  const computatedTime = today - dateUploadedInMS;
  const days = Math.floor(computatedTime / oneDay);

  if (days >= oneWeek) {
    parsedDateLabel = dateUploaded.toLocaleDateString('en-US', options);
  } else if (days < oneWeek && days > 0) {
    parsedDateLabel = `${days} day${days > 1 ? 's' : ''} ago`;
  } else {
    parsedDateLabel = 'Less than a day ago';
  }

  return parsedDateLabel;
};

export default parseDate;
