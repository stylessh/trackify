export const scrollToRef = (ref: any) =>
  window.scrollTo({
    top: ref.current.offsetTop,
    left: 0,
    behavior: "smooth",
  });

export const watchScroll = () => {
  var scrollTop: number =
    window.pageYOffset ||
    document.documentElement.scrollTop ||
    document.body.scrollTop ||
    0;

  return scrollTop;
};
