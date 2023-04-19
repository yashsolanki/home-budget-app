// Fetch From LocalStorage
export const fetchData = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

// Delete Item
export const deleteItem = ({ key }) => {
  return localStorage.removeItem(key);
};
