const removeNullObject = (obj) => Object.entries(obj).reduce(
  // eslint-disable-next-line no-return-assign
  (tempObj, [key, value]) => (
    // eslint-disable-next-line no-param-reassign
    value ? (tempObj[key] = value, tempObj
    ) : tempObj),
  {},
);

export default removeNullObject;
