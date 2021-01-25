const fetchData = (callback) => {
  const { REACT_APP_API, REACT_APP_KEY } = process.env;

  fetch(`${REACT_APP_API}/?client_id=${REACT_APP_KEY}`)
    .then((res) => res.json())
    .then((data) => callback(data))
    .catch((error) => new Error(error));
};

export { fetchData };
