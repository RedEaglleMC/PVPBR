document.addEventListener('DOMContentLoaded', () => {
  const btnJava = document.getElementById('btn-java');
  const btnBedrock = document.getElementById('btn-bedrock');
  const linkJava = document.getElementById('link-java');
  const linkBedrock = document.getElementById('link-bedrock');

  function esconderLinks() {
    linkJava.style.display = 'none';
    linkBedrock.style.display = 'none';
  }

  btnJava.addEventListener('click', () => {
    esconderLinks();
    linkJava.style.display = 'block';
  });

  btnBedrock.addEventListener('click', () => {
    esconderLinks();
    linkBedrock.style.display = 'block';
  });
});
