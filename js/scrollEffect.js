function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
            change.target.classList.add('show');
        }
    })
}

let options = {
    threshold: [0.5]
};
let observer = new
IntersectionObserver(onEntry, options);
let elements =
document.querySelectorAll('.card');

for (let elm of elements) {
    observer.observe(elm);
}

const elements = document.querySelectorAll('.hidden');

function checkScroll() {
  for (let i = 0; i < elements.length; i++) {
    const element = elements[i];
    const position = element.getBoundingClientRect().top;
    const windowHeight = window.innerHeight;
    if (position < windowHeight) {
      element.classList.add('reveal');
    }
  }
}

window.addEventListener('scroll', checkScroll);
