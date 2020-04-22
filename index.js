const items = document.querySelectorAll(".toObserve");

var options = {
  rootMargin: "0px",
};

function show(element) {
  element.style = "opacity: 1";
}

var callback = function (entries, observer) {
  entries.forEach((entry) => {
    console.log(entry.isIntersecting);
    entry.isIntersecting && show(entry.target);
    if (entry.isIntersecting) {
      entry.target.src = entry.target.dataset.src;
      observer.unobserve(entry.target);
    }
  });
};

var observer = new IntersectionObserver(callback, options);

items.forEach((e) => {
  observer.observe(e);
});
