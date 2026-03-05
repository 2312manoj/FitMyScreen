function getUrlParam() {
  const params = new URLSearchParams(window.location.search);
  return params.get("url") || "https://example.com";
}

const dragContainer = document.getElementById("dragContainer");
const dragIframe = document.getElementById("dragIframe");
const verticalHandle = document.getElementById("verticalHandle");
const horizontalHandle = document.getElementById("horizontalHandle");
const resolutionIndicator = document.getElementById("resolutionIndicator");

// Initialize iframe URL
dragIframe.src = getUrlParam();

// Set default starting size (e.g., iPhone 13/14 size)
const defaultW = 390;
const defaultH = 844;
dragContainer.style.width = defaultW + "px";
dragContainer.style.height = defaultH + "px";

let width = dragContainer.offsetWidth;
let height = dragContainer.offsetHeight;

function updateResolutionDisplay() {
  resolutionIndicator.textContent = `${Math.round(width)} × ${Math.round(height)}`;
  document.getElementById("customWidth").value = Math.round(width);
  document.getElementById("customHeight").value = Math.round(height);
}

function clamp(val, min, max) {
  return Math.max(min, Math.min(val, max));
}

// Make handles draggable
function makeHandleDraggable(handle, direction) {
  handle.addEventListener("mousedown", e => {
    e.preventDefault();
    const startX = e.clientX;
    const startY = e.clientY;
    const startWidth = dragContainer.offsetWidth;
    const startHeight = dragContainer.offsetHeight;
    const rect = dragContainer.getBoundingClientRect();

    function mouseMoveHandler(ev) {
      if (direction === "vertical") {
        const deltaY = ev.clientY - startY;
        const newHeight = clamp(
          startHeight + deltaY,
          320,
          window.innerHeight - rect.top - 80
        );
        dragContainer.style.height = newHeight + "px";
        height = newHeight;
      } else {
        const deltaX = ev.clientX - startX;
        const newWidth = clamp(
          startWidth + deltaX,
          320,
          window.innerWidth - rect.left - 80
        );
        dragContainer.style.width = newWidth + "px";
        width = newWidth;
      }
      updateResolutionDisplay();
    }

    function mouseUpHandler() {
      document.body.style.cursor = "";
      document.removeEventListener("mousemove", mouseMoveHandler);
      document.removeEventListener("mouseup", mouseUpHandler);
    }

    document.body.style.cursor = direction === "vertical" ? "ns-resize" : "ew-resize";
    document.addEventListener("mousemove", mouseMoveHandler);
    document.addEventListener("mouseup", mouseUpHandler);
  });
}

makeHandleDraggable(verticalHandle, "vertical");
makeHandleDraggable(horizontalHandle, "horizontal");

window.addEventListener("resize", () => {
  width = dragContainer.offsetWidth;
  height = dragContainer.offsetHeight;
  updateResolutionDisplay();
});

updateResolutionDisplay();

// ✅ Custom resolution input
function applyCustomResolution() {
  const customW = parseInt(document.getElementById("customWidth").value, 10);
  const customH = parseInt(document.getElementById("customHeight").value, 10);

  if (customW && customH) {
    dragContainer.style.width = customW + "px";
    dragContainer.style.height = customH + "px";
    width = customW;
    height = customH;
    updateResolutionDisplay();
  } else {
    alert("Please enter both width and height values.");
  }
}

// ✅ Live mode
function openLiveMode() {
  const url = getUrlParam();
  const w = dragContainer.offsetWidth;
  const h = dragContainer.offsetHeight;

  window.open(
    url,
    "_blank",
    `width=${w},height=${h},resizable=yes,scrollbars=yes`
  );
}
