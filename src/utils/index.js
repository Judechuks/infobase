const paginate = (listItems) => {
  const itemsPerPage = 6;
  const numberOfPages = Math.ceil(listItems.length / itemsPerPage);

  const newListItems = Array.from({ length: numberOfPages }, (_, index) => {
    const start = index * itemsPerPage;
    return listItems.slice(start, start + itemsPerPage);
  });

  return newListItems;
};

export default paginate;
