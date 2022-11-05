function draw() {
  const canvas = document.querySelector('.board__canvas-window');

  if (canvas.getContext) {
    const ctx = canvas.getContext('2d');

    ctx.fillStyle = "rgb(200, 0, 0)";
    ctx.fillRect(10, 10, 50, 50);

    ctx.fillStyle = "rgba(0, 0, 200, 0.5)";
    ctx.fillRect(30, 30, 50, 50);
  } else {
    // canvas-unsupported code here
  }
}

window.addEventListener('load', draw);
