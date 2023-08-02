// Checks if a value is in a ste
export default function hasValuesFromArray(set, array) {
  return array.every((e) => set.has(e));
}
