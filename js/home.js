const homeHTML = `
    <h1>Ola q ase</h1>
  `;

const printHome = () => {
  const mainContainer = document.getElementById('main');
  console.log(mainContainer);
  mainContainer.innerHTML = homeHTML;
};

export default printHome;
