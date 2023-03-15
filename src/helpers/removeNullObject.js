const removeNullObject = (obj) => Object.entries(obj).reduce(
  (tempObj, [key, value]) => (
    value ? (tempObj[key] = value, tempObj
    ) : tempObj),
  {},
);

export default removeNullObject;
