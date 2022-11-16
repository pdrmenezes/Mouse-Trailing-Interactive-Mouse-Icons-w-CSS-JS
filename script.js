const trailer = document.getElementById('trailer')

const getTrailerIcon = type => {
  switch (type) {
    case "video":
      return "play_arrow";
    case "picture":
      return "photo_camera";
    default:
      return "north_east";
  }
}

const animateTrailer = (e, interacting) => {
  const x = e.clientX - trailer.offsetWidth / 2;
  const y = e.clientY - trailer.offsetHeight / 2;

  const keyframes = {
    transform: `translate(${x}px, ${y}px) scale(${interacting ? 6 : 1})`
  }
  trailer.animate(keyframes, {
    duration: 800,
    fill: "forwards"
  })
}

window.onmousemove = e => {
  const interactable = e.target.closest('.interactable'),
    interacting = interactable != null

  const icon = document.getElementById('trailer-icon')

  animateTrailer(e, interacting)

  trailer.dataset.type = interacting ? interactable.dataset.type : ""

  if (interacting) {
    icon.innerText = getTrailerIcon(interactable.dataset.type)
  }
}
