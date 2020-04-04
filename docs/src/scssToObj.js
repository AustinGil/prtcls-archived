export default function (scssStr) {
  const arr = scssStr.split(", ");
  const obj = {};

  for (let i = 0; i < arr.length; i += 2) {
    const key = arr[i];
    const val = arr[i + 1];
    obj[key] = val;
  }
  return obj;
}
