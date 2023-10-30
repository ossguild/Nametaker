let card: HTMLDivElement;
let bounds: { x: number; y: number; width: number; height: number };

function rotateToMouse(e: MouseEvent) {
  const mouseX = e.clientX;
  const mouseY = e.clientY;
  const leftX = mouseX - bounds.x;
  const topY = mouseY - bounds.y;
  const center = {
    x: leftX - bounds.width / 2,
    y: topY - bounds.height / 2,
  };
  const distance = Math.sqrt(center.x ** 2 + center.y ** 2);

  card.style.transform = `
    scale3d(1.05, 1.05, 1.05)
    rotate3d(
      ${center.y / 100},
      ${-center.x / 100},
      0,
      ${Math.log(distance) * 2}deg
    )
  `;
  const glowLayer = card.querySelector<HTMLDivElement>(".glow");
  glowLayer!.style.display = "block";
  glowLayer!.style.backgroundImage = `
    radial-gradient(
      circle at
      ${center.x * 2 + bounds.width / 2}px
      ${center.y * 2 + bounds.height / 2}px,
      #ffffff55,
      #0000000f
    )
  `;
}
// @ts-ignore
export const onMouseEnter = (e: Event, cardElement: HTMLDivElement) => {
  bounds = cardElement.getBoundingClientRect();
  card = cardElement;
  cardElement.addEventListener("mousemove", rotateToMouse);
};
// @ts-ignore
export const onMouseLeave = (e: Event, card: HTMLDivElement) => {
  card.querySelector<HTMLDivElement>(".glow")!.style.display = "none";
  card.removeEventListener("mousemove", rotateToMouse);
  card.style.transform = "";
  card.style.background = "";
};
