
// eslint-disable-next-line import/prefer-default-export
export const removeDuplicates = (array) => [...new Set(array)];

const foldOvertoItems_default = ({ item, overItem }) => ({ ...item, ...overItem });
export const foldOvertoItems = (
  array,
  overItem,
  mergeFunction = foldOvertoItems_default,
// eslint-disable-next-line arrow-body-style
) => {
  return array.map((item, index) => mergeFunction({ item, overItem, index }));
};
