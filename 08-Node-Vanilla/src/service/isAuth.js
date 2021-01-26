let IsAuthenticated = async (auth, route) => {
  if (auth) {
    window.location.replace(route);
  }
};

export default IsAuthenticated;
