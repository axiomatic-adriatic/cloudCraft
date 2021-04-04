const createDateTime = (str) => {
  const date = new Date(str);
  const month = date.getUTCMonth() + 1;
  const day = date.getUTCDate();
  const year = date.getUTCFullYear();
  const dateTime = `${month}/${day}/${year}`;
  return dateTime;
};

export default createDateTime;