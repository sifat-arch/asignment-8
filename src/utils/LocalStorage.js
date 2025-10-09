export const getItem = () => {
  const getItems = localStorage.getItem("installedData");

  if (getItems) {
    return JSON.parse(getItems);
  } else {
    return [];
  }
};

export const setItem = (product) => {
  const data = getItem();

  const isDuplicate = data.some((item) => item.id === product.id);

  if (isDuplicate) {
    return;
  }

  const updatedItems = [...data, product];
  localStorage.setItem("installedData", JSON.stringify(updatedItems));
};
