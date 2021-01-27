let Error404 = {
    render: async () => {
      let view = `<h1>Página não encontrada</h1>`;
  
      return view;
    },
    after_render: async () => {},
  };
  
  export default Error404;
  