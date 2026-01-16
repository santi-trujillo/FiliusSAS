let progressBar = null;

const updateProgress = () => {
  const windowHeight =
    document.documentElement.scrollHeight -
    document.documentElement.clientHeight;
  const scrolled = (window.scrollY / windowHeight) * 100;

  if (progressBar) {
    progressBar.style.width = `${scrolled}%`;
  }
};

const init = () => {
  progressBar = document.querySelector(".scroll-progress");
  if (progressBar) {
    window.addEventListener("scroll", updateProgress);
  }
};

export default { init };
