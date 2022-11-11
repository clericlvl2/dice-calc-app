function draw() {
  const canvas = document.querySelector('.board__canvas-window');
  canvas.width = 300;
  canvas.height = 250;

  if (canvas.getContext) {
    const ctx = canvas.getContext('2d');
    const canvasBody = canvas.getBoundingClientRect();
    const ctxParams = {
      isDrawing: false,
      previousX: null,
      previousY: null,
      currentX: null,
      currentY: null,
    }
    function getCursorPosition(evt) {
      const posX = evt.clientX - canvasBody.left;
      const posY = evt.clientY - canvasBody.top;
      return {x: posX, y: posY}
    }

    canvas.addEventListener('mousedown', () => {
      ctxParams.isDrawing = true;
    });

    canvas.addEventListener('mouseup', () => {
      ctxParams.isDrawing = false;
      ctxParams.currentX = null;
      ctxParams.currentY = null;
      ctxParams.previousX = null;
      ctxParams.previousY = null;
    });

    canvas.addEventListener('mousemove', evt => {
      if (ctxParams.isDrawing) {
        const position = getCursorPosition(evt);

        if (!ctxParams.previousX || !ctxParams.previousY) {
          ctxParams.previousX = position.x;
          ctxParams.previousY = position.y;
        }
        ctxParams.currentX = position.x;
        ctxParams.currentY = position.y;

        ctx.beginPath();
        ctx.moveTo(ctxParams.previousX, ctxParams.previousY);
        ctx.lineTo(ctxParams.currentX, ctxParams.currentY);
        ctx.stroke();

        ctxParams.previousX = ctxParams.currentX;
        ctxParams.previousY = ctxParams.currentY
      }
    });
  } else {
    // canvas-unsupported code here
  }
}

window.addEventListener('load', draw);
