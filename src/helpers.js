const fetchData = (page, callback) => {
  const { REACT_APP_API, REACT_APP_KEY } = process.env;
  console.log('page', page);
  fetch(`${REACT_APP_API}?page=${page}&client_id=${REACT_APP_KEY}`)
    .then((res) => res.json())
    .then((data) => callback(data))
    .catch((error) => new Error(error));
};

export { fetchData };
