const documentWidth = document.documentElement.clientWidth;
const documentHeight = document.documentElement.clientHeight;

export function documentOrientatin() {
  return documentWidth > documentHeight ? "landscape" : "portrait");
}
