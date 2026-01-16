class TechCarousel {
  constructor() {
    this.track = document.getElementById("carouselTrack");
    this.prevBtn = document.getElementById("carouselPrev");
    this.nextBtn = document.getElementById("carouselNext");
    this.items = this.track?.querySelectorAll(".tech-item");

    if (!this.track || !this.items) return;

    this.currentIndex = 0;
    this.itemsToScroll = 1;
    this.totalItems = this.items.length / 2;

    this.init();
  }

  init() {
    if (this.prevBtn) {
      this.prevBtn.addEventListener("click", () => this.scrollPrev());
    }

    if (this.nextBtn) {
      this.nextBtn.addEventListener("click", () => this.scrollNext());
    }

    window.addEventListener("resize", () => {
      this.updateItemsToScroll();
    });

    this.updateItemsToScroll();
  }

  updateItemsToScroll() {
    const width = window.innerWidth;
    if (width < 480) {
      this.itemsToScroll = 1;
    } else if (width < 768) {
      this.itemsToScroll = 2;
    } else if (width < 1024) {
      this.itemsToScroll = 2;
    } else {
      this.itemsToScroll = 3;
    }
  }

  scrollNext() {
    this.currentIndex += this.itemsToScroll;

    if (this.currentIndex >= this.totalItems) {
      this.currentIndex = 0;
    }

    this.updatePosition();
  }

  scrollPrev() {
    this.currentIndex -= this.itemsToScroll;

    if (this.currentIndex < 0) {
      this.currentIndex = this.totalItems - this.itemsToScroll;
    }

    this.updatePosition();
  }

  updatePosition() {
    if (this.track) {
      const firstItem = this.items[0];
      if (firstItem) {
        const itemWidth = firstItem.offsetWidth;
        const gap = 16;
        const totalWidth = (itemWidth + gap) * this.currentIndex;
        this.track.style.transform = `translateX(-${totalWidth}px)`;
      }
    }
  }
}

const init = () => {
  new TechCarousel();
};

export default { init };
