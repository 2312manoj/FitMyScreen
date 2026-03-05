// preview-script.js

// Master device definitions: phones, tablets, laptops, desktops, TVs
const deviceSizes = {
  // ---------------- iPhone ----------------
  iphone7: { name: "iPhone 7", portrait: { w: 375, h: 667 }, landscape: { w: 667, h: 375 } },
  iphone7plus: { name: "iPhone 7 Plus", portrait: { w: 414, h: 736 }, landscape: { w: 736, h: 414 } },
  iphone8: { name: "iPhone 8", portrait: { w: 375, h: 667 }, landscape: { w: 667, h: 375 } },
  iphone8plus: { name: "iPhone 8 Plus", portrait: { w: 414, h: 736 }, landscape: { w: 736, h: 414 } },
  iphonex: { name: "iPhone X", portrait: { w: 375, h: 812 }, landscape: { w: 812, h: 375 } },
  iphonexr: { name: "iPhone XR", portrait: { w: 414, h: 896 }, landscape: { w: 896, h: 414 } },
  iphonexs: { name: "iPhone XS", portrait: { w: 375, h: 812 }, landscape: { w: 812, h: 375 } },
  iphonexsmax: { name: "iPhone XS Max", portrait: { w: 414, h: 896 }, landscape: { w: 896, h: 414 } },
  iphone11: { name: "iPhone 11", portrait: { w: 414, h: 896 }, landscape: { w: 896, h: 414 } },
  iphone11pro: { name: "iPhone 11 Pro", portrait: { w: 375, h: 812 }, landscape: { w: 812, h: 375 } },
  iphone11promax: { name: "iPhone 11 Pro Max", portrait: { w: 414, h: 896 }, landscape: { w: 896, h: 414 } },
  iphonese2020: { name: "iPhone SE 2020", portrait: { w: 375, h: 667 }, landscape: { w: 667, h: 375 } },
  iphonese2022: { name: "iPhone SE 2022", portrait: { w: 375, h: 667 }, landscape: { w: 667, h: 375 } },
  iphone12mini: { name: "iPhone 12 Mini", portrait: { w: 375, h: 812 }, landscape: { w: 812, h: 375 } },
  iphone12: { name: "iPhone 12", portrait: { w: 390, h: 844 }, landscape: { w: 844, h: 390 } },
  iphone12pro: { name: "iPhone 12 Pro", portrait: { w: 390, h: 844 }, landscape: { w: 844, h: 390 } },
  iphone12promax: { name: "iPhone 12 Pro Max", portrait: { w: 428, h: 926 }, landscape: { w: 926, h: 428 } },
  iphone13mini: { name: "iPhone 13 Mini", portrait: { w: 375, h: 812 }, landscape: { w: 812, h: 375 } },
  iphone13: { name: "iPhone 13", portrait: { w: 390, h: 844 }, landscape: { w: 844, h: 390 } },
  iphone13pro: { name: "iPhone 13 Pro", portrait: { w: 390, h: 844 }, landscape: { w: 844, h: 390 } },
  iphone13promax: { name: "iPhone 13 Pro Max", portrait: { w: 428, h: 926 }, landscape: { w: 926, h: 428 } },
  iphone14: { name: "iPhone 14", portrait: { w: 390, h: 844 }, landscape: { w: 844, h: 390 } },
  iphone14plus: { name: "iPhone 14 Plus", portrait: { w: 428, h: 926 }, landscape: { w: 926, h: 428 } },
  iphone14pro: { name: "iPhone 14 Pro", portrait: { w: 393, h: 852 }, landscape: { w: 852, h: 393 } },
  iphone14promax: { name: "iPhone 14 Pro Max", portrait: { w: 430, h: 932 }, landscape: { w: 932, h: 430 } },
  iphone15: { name: "iPhone 15", portrait: { w: 393, h: 852 }, landscape: { w: 852, h: 393 } },
  iphone15plus: { name: "iPhone 15 Plus", portrait: { w: 430, h: 932 }, landscape: { w: 932, h: 430 } },
  iphone15pro: { name: "iPhone 15 Pro", portrait: { w: 393, h: 852 }, landscape: { w: 852, h: 393 } },
  iphone15promax: { name: "iPhone 15 Pro Max", portrait: { w: 430, h: 932 }, landscape: { w: 932, h: 430 } },
  iphone16: { name: "iPhone 16", portrait: { w: 390, h: 844 }, landscape: { w: 844, h: 390 } },
  iphone16plus: { name: "iPhone 16 Plus", portrait: { w: 430, h: 932 }, landscape: { w: 932, h: 430 } },
  iphone16pro: { name: "iPhone 16 Pro", portrait: { w: 402, h: 874 }, landscape: { w: 874, h: 402 } },
  iphone16promax: { name: "iPhone 16 Pro Max", portrait: { w: 440, h: 956 }, landscape: { w: 956, h: 440 } },

  // ---------------- iPad ----------------
  ipadmini1: { name: "iPad Mini (2012)", portrait: { w: 768, h: 1024 }, landscape: { w: 1024, h: 768 } },
  ipadmini2: { name: "iPad Mini 2 (2013)", portrait: { w: 768, h: 1024 }, landscape: { w: 1024, h: 768 } },
  ipadmini3: { name: "iPad Mini 3 (2014)", portrait: { w: 768, h: 1024 }, landscape: { w: 1024, h: 768 } },
  ipadmini4: { name: "iPad Mini 4 (2015)", portrait: { w: 768, h: 1024 }, landscape: { w: 1024, h: 768 } },
  ipadmini5: { name: "iPad Mini 5 (2019)", portrait: { w: 768, h: 1024 }, landscape: { w: 1024, h: 768 } },
  ipadmini6: { name: "iPad Mini 6 (2021)", portrait: { w: 744, h: 1133 }, landscape: { w: 1133, h: 744 } },

  ipadair1: { name: "iPad Air (2013)", portrait: { w: 768, h: 1024 }, landscape: { w: 1024, h: 768 } },
  ipadair2: { name: "iPad Air 2 (2014)", portrait: { w: 768, h: 1024 }, landscape: { w: 1024, h: 768 } },
  ipadair3: { name: "iPad Air 3 (2019)", portrait: { w: 834, h: 1112 }, landscape: { w: 1112, h: 834 } },
  ipadair4: { name: "iPad Air 4 (2020)", portrait: { w: 820, h: 1180 }, landscape: { w: 1180, h: 820 } },
  ipadair5: { name: "iPad Air 5 (2022)", portrait: { w: 820, h: 1180 }, landscape: { w: 1180, h: 820 } },
  ipadair11_2024: { name: "iPad Air 11 (2024)", portrait: { w: 820, h: 1180 }, landscape: { w: 1180, h: 820 } },
  ipadair13_2024: { name: "iPad Air 13 (2024)", portrait: { w: 1024, h: 1366 }, landscape: { w: 1366, h: 1024 } },

  ipad1: { name: "iPad (2010)", portrait: { w: 768, h: 1024 }, landscape: { w: 1024, h: 768 } },
  ipad2: { name: "iPad 2 (2011)", portrait: { w: 768, h: 1024 }, landscape: { w: 1024, h: 768 } },
  ipad3: { name: "iPad 3 (2012)", portrait: { w: 768, h: 1024 }, landscape: { w: 1024, h: 768 } },
  ipad4: { name: "iPad 4 (2012)", portrait: { w: 768, h: 1024 }, landscape: { w: 1024, h: 768 } },
  ipad5: { name: "iPad 5 (2017)", portrait: { w: 768, h: 1024 }, landscape: { w: 1024, h: 768 } },
  ipad6: { name: "iPad 6 (2018)", portrait: { w: 768, h: 1024 }, landscape: { w: 1024, h: 768 } },
  ipad7: { name: "iPad 7 (2019)", portrait: { w: 810, h: 1080 }, landscape: { w: 1080, h: 810 } },
  ipad8: { name: "iPad 8 (2020)", portrait: { w: 810, h: 1080 }, landscape: { w: 1080, h: 810 } },
  ipad9: { name: "iPad 9 (2021)", portrait: { w: 810, h: 1080 }, landscape: { w: 1080, h: 810 } },
  ipad10: { name: "iPad 10 (2022)", portrait: { w: 810, h: 1080 }, landscape: { w: 1080, h: 810 } },

  ipadpro9: { name: "iPad Pro 9.7 (2016)", portrait: { w: 768, h: 1024 }, landscape: { w: 1024, h: 768 } },
  ipadpro10: { name: "iPad Pro 10.5 (2017)", portrait: { w: 834, h: 1112 }, landscape: { w: 1112, h: 834 } },
  ipadpro11_2018: { name: "iPad Pro 11 (2018)", portrait: { w: 834, h: 1194 }, landscape: { w: 1194, h: 834 } },
  ipadpro12_2015: { name: "iPad Pro 12.9 (2015)", portrait: { w: 1024, h: 1366 }, landscape: { w: 1366, h: 1024 } },
  ipadpro12_2017: { name: "iPad Pro 12.9 (2017)", portrait: { w: 1024, h: 1366 }, landscape: { w: 1366, h: 1024 } },
  ipadpro12_2018: { name: "iPad Pro 12.9 (2018)", portrait: { w: 1024, h: 1366 }, landscape: { w: 1366, h: 1024 } },
  ipadpro11_2020: { name: "iPad Pro 11 (2020)", portrait: { w: 834, h: 1194 }, landscape: { w: 1194, h: 834 } },
  ipadpro12_2020: { name: "iPad Pro 12.9 (2020)", portrait: { w: 1024, h: 1366 }, landscape: { w: 1366, h: 1024 } },
  ipadpro11_2021: { name: "iPad Pro 11 (2021)", portrait: { w: 834, h: 1194 }, landscape: { w: 1194, h: 834 } },
  ipadpro12_2021: { name: "iPad Pro 12.9 (2021)", portrait: { w: 1024, h: 1366 }, landscape: { w: 1366, h: 1024 } },
  ipadpro11_2022: { name: "iPad Pro 11 (2022)", portrait: { w: 834, h: 1194 }, landscape: { w: 1194, h: 834 } },
  ipadpro12_2022: { name: "iPad Pro 12.9 (2022)", portrait: { w: 1024, h: 1366 }, landscape: { w: 1366, h: 1024 } },
  ipadpro11_2024: { name: "iPad Pro 11 (2024)", portrait: { w: 834, h: 1194 }, landscape: { w: 1194, h: 834 } },
  ipadpro13_2024: { name: "iPad Pro 13 (2024)", portrait: { w: 1024, h: 1366 }, landscape: { w: 1366, h: 1024 } },

  // ---------------- Android ----------------
  galaxy_s24: { name: "Samsung Galaxy S24", portrait: { w: 412, h: 915 }, landscape: { w: 915, h: 412 } },
  galaxy_s24plus: { name: "Samsung Galaxy S24+", portrait: { w: 412, h: 915 }, landscape: { w: 915, h: 412 } },
  galaxy_s24ultra: { name: "Samsung Galaxy S24 Ultra", portrait: { w: 480, h: 1066 }, landscape: { w: 1066, h: 480 } },
  galaxy_s23: { name: "Samsung Galaxy S23", portrait: { w: 412, h: 915 }, landscape: { w: 915, h: 412 } },
  galaxy_s23plus: { name: "Samsung Galaxy S23+", portrait: { w: 412, h: 915 }, landscape: { w: 915, h: 412 } },
  galaxy_s23ultra: { name: "Samsung Galaxy S23 Ultra", portrait: { w: 480, h: 1066 }, landscape: { w: 1066, h: 480 } },
  galaxy_s22: { name: "Samsung Galaxy S22", portrait: { w: 412, h: 915 }, landscape: { w: 915, h: 412 } },
  galaxy_s21: { name: "Samsung Galaxy S21", portrait: { w: 412, h: 915 }, landscape: { w: 915, h: 412 } },
  galaxy_s20: { name: "Samsung Galaxy S20", portrait: { w: 412, h: 915 }, landscape: { w: 915, h: 412 } },

  galaxy_note20: { name: "Samsung Galaxy Note 20", portrait: { w: 412, h: 915 }, landscape: { w: 915, h: 412 } },
  galaxy_note20ultra: { name: "Samsung Galaxy Note 20 Ultra", portrait: { w: 480, h: 1066 }, landscape: { w: 1066, h: 480 } },

  galaxy_zfold5: { name: "Samsung Galaxy Z Fold 5", portrait: { w: 768, h: 1040 }, landscape: { w: 1040, h: 768 } },
  galaxy_zflip5: { name: "Samsung Galaxy Z Flip 5", portrait: { w: 412, h: 915 }, landscape: { w: 915, h: 412 } },

  oneplus12: { name: "OnePlus 12", portrait: { w: 412, h: 915 }, landscape: { w: 915, h: 412 } },
  oneplus11: { name: "OnePlus 11", portrait: { w: 412, h: 915 }, landscape: { w: 915, h: 412 } },
  oneplus10pro: { name: "OnePlus 10 Pro", portrait: { w: 412, h: 915 }, landscape: { w: 915, h: 412 } },
  oneplus9: { name: "OnePlus 9", portrait: { w: 412, h: 915 }, landscape: { w: 915, h: 412 } },

  xiaomi_13: { name: "Xiaomi 13", portrait: { w: 412, h: 915 }, landscape: { w: 915, h: 412 } },
  xiaomi_12: { name: "Xiaomi 12", portrait: { w: 412, h: 915 }, landscape: { w: 915, h: 412 } },
  redmi_note12: { name: "Redmi Note 12", portrait: { w: 412, h: 915 }, landscape: { w: 915, h: 412 } },
  redmi_note11: { name: "Redmi Note 11", portrait: { w: 412, h: 915 }, landscape: { w: 915, h: 412 } },

  oppo_findx6: { name: "Oppo Find X6", portrait: { w: 412, h: 915 }, landscape: { w: 915, h: 412 } },
  oppo_reno10: { name: "Oppo Reno 10", portrait: { w: 412, h: 915 }, landscape: { w: 915, h: 412 } },
  vivo_x90: { name: "Vivo X90", portrait: { w: 412, h: 915 }, landscape: { w: 915, h: 412 } },
  vivo_x80: { name: "Vivo X80", portrait: { w: 412, h: 915 }, landscape: { w: 915, h: 412 } },

  pixel8: { name: "Google Pixel 8", portrait: { w: 412, h: 915 }, landscape: { w: 915, h: 412 } },
  pixel8pro: { name: "Google Pixel 8 Pro", portrait: { w: 448, h: 998 }, landscape: { w: 998, h: 448 } },
  pixel7: { name: "Google Pixel 7", portrait: { w: 412, h: 915 }, landscape: { w: 915, h: 412 } },
  pixel7pro: { name: "Google Pixel 7 Pro", portrait: { w: 412, h: 892 }, landscape: { w: 892, h: 412 } },

  android_small: { name: "Generic Small Android", portrait: { w: 360, h: 640 }, landscape: { w: 640, h: 360 } },
  android_medium: { name: "Generic Medium Android", portrait: { w: 412, h: 732 }, landscape: { w: 732, h: 412 } },
  android_large: { name: "Generic Large Android", portrait: { w: 480, h: 853 }, landscape: { w: 853, h: 480 } },
  android_xlarge: { name: "Generic XL Android", portrait: { w: 600, h: 960 }, landscape: { w: 960, h: 600 } },

  // ---------------- Laptop ----------------
  laptop_l: { name: "Laptop-L", portrait: { w: 1600, h: 900 }, landscape: { w: 1600, h: 900 } },
  laptop_m: { name: "Laptop-M", portrait: { w: 1366, h: 768 }, landscape: { w: 1366, h: 768 } },
  laptop_s: { name: "Laptop-S", portrait: { w: 1280, h: 800 }, landscape: { w: 1280, h: 800 } },
  laptop_xs: { name: "Laptop-XS", portrait: { w: 1024, h: 768 }, landscape: { w: 1024, h: 768 } },

  macbook_air: { name: "MacBook Air", portrait: { w: 1440, h: 900 }, landscape: { w: 1440, h: 900 } },
  macbook: { name: "MacBook", portrait: { w: 2304, h: 1440 }, landscape: { w: 2304, h: 1440 } },
  macbook_pro: { name: "MacBook Pro", portrait: { w: 1440, h: 900 }, landscape: { w: 1440, h: 900 } },
  macbook_pro_16_retina: { name: "MacBook Pro 16\" Retina", portrait: { w: 3072, h: 1920 }, landscape: { w: 3072, h: 1920 } },
  macbook_pro_14_retina: { name: "MacBook Pro 14\" Retina", portrait: { w: 3024, h: 1964 }, landscape: { w: 3024, h: 1964 } },
  macbook_pro_13_retina: { name: "MacBook Pro 13\" Retina", portrait: { w: 2560, h: 1600 }, landscape: { w: 2560, h: 1600 } },

  // ---------------- Desktop ----------------
  desktop_svga: { name: "SVGA", portrait: { w: 800, h: 600 }, landscape: { w: 800, h: 600 } },
  desktop_xga: { name: "XGA", portrait: { w: 1024, h: 768 }, landscape: { w: 1024, h: 768 } },
  desktop_wxga: { name: "WXGA", portrait: { w: 1280, h: 800 }, landscape: { w: 1280, h: 800 } },
  desktop_sxga: { name: "SXGA", portrait: { w: 1280, h: 1024 }, landscape: { w: 1280, h: 1024 } },
  desktop_hd: { name: "HD", portrait: { w: 1366, h: 768 }, landscape: { w: 1366, h: 768 } },
  desktop_fhd: { name: "Full HD", portrait: { w: 1920, h: 1080 }, landscape: { w: 1920, h: 1080 } },
  desktop_wuxga: { name: "WUXGA", portrait: { w: 1920, h: 1200 }, landscape: { w: 1920, h: 1200 } },
  desktop_qhd: { name: "QHD", portrait: { w: 2560, h: 1440 }, landscape: { w: 2560, h: 1440 } },
  desktop_qhdplus: { name: "QHD+", portrait: { w: 3200, h: 1800 }, landscape: { w: 3200, h: 1800 } },
  desktop_uhd: { name: "UHD 4K", portrait: { w: 3840, h: 2160 }, landscape: { w: 3840, h: 2160 } },
  desktop_5k: { name: "5K", portrait: { w: 5120, h: 2880 }, landscape: { w: 5120, h: 2880 } },
  desktop_8k: { name: "8K", portrait: { w: 7680, h: 4320 }, landscape: { w: 7680, h: 4320 } },
  desktop_ultrawide: { name: "Ultrawide QHD", portrait: { w: 3440, h: 1440 }, landscape: { w: 3440, h: 1440 } },
  desktop_superultrawide: { name: "Super Ultrawide", portrait: { w: 5120, h: 1440 }, landscape: { w: 5120, h: 1440 } },

  imac_retina_2016_27: { name: "iMac Retina 27\" (2016)", portrait: { w: 2560, h: 1440 }, landscape: { w: 2560, h: 1440 } },
  imac_retina_4k_21_5: { name: "iMac Retina 21.5\" 4K", portrait: { w: 2048, h: 1152 }, landscape: { w: 2048, h: 1152 } },
  imac_retina_4_5k_24: { name: "iMac Retina 24\" 4.5K", portrait: { w: 2240, h: 1260 }, landscape: { w: 2240, h: 1260 } },
  imac_pro_retina_5k_27: { name: "iMac Pro Retina 27\" 5K", portrait: { w: 3200, h: 1800 }, landscape: { w: 3200, h: 1800 } },
  mac_studio_display: { name: "Mac Studio Display", portrait: { w: 5120, h: 2880 }, landscape: { w: 5120, h: 2880 } },
  mac_pro_display_xdr: { name: "Pro Display XDR", portrait: { w: 6016, h: 3384 }, landscape: { w: 6016, h: 3384 } },
  mac_mini_external_display: { name: "Mac Mini External Display", portrait: { w: 1920, h: 1080 }, landscape: { w: 1920, h: 1080 } },

  // ---------------- TV ----------------
  tv_hd: { name: "HD TV", portrait: { w: 1280, h: 720 }, landscape: { w: 1280, h: 720 } },
  tv_fhd: { name: "Full HD TV", portrait: { w: 1920, h: 1080 }, landscape: { w: 1920, h: 1080 } },
  tv_uhd: { name: "4K UHD TV", portrait: { w: 3840, h: 2160 }, landscape: { w: 3840, h: 2160 } },
  tv_uhd8k: { name: "8K UHD TV", portrait: { w: 7680, h: 4320 }, landscape: { w: 7680, h: 4320 } },
  tv_ultrawide: { name: "Ultrawide Smart TV", portrait: { w: 5120, h: 2160 }, landscape: { w: 5120, h: 2160 } }
};

// Parse query params
function getParams() {
  const params = new URLSearchParams(window.location.search);
  return {
    url: params.get("url"),
    device: params.get("device"),
    orientation: params.get("orientation") || "portrait"
  };
}

// Category helpers
function isDesktopOrLaptop(deviceKey) {
  return deviceKey.startsWith("desktop") ||
         deviceKey.startsWith("laptop") ||
         deviceKey.startsWith("imac") ||
         deviceKey.startsWith("mac");
}
function isTV(deviceKey) {
  return deviceKey.startsWith("tv");
}

// Set frame, cap to viewport, and hide orientation as needed
function setDeviceFrame(deviceKey, orientation) {
  const device = deviceSizes[deviceKey];
  if (!device) return;

  const frameBox = document.getElementById("deviceFrameBox");
  const iframe = document.getElementById("deviceIframe");
  const label = document.getElementById("deviceLabel");
  const portraitBtn = document.getElementById("portraitBtn");
  const landscapeBtn = document.getElementById("landscapeBtn");

  // Use fixed orientation for desktop/laptop/TV
  const fixed = isDesktopOrLaptop(deviceKey) || isTV(deviceKey);
  const mode = fixed ? "landscape" : orientation;

  const { w: baseW, h: baseH } = device[mode];

  // Compute max inner size
  const maxW = Math.floor(window.innerWidth - 40 - 48);  // viewport padding - frame padding
  const maxH = Math.floor(window.innerHeight - 140 - 48); // header+label space - frame padding

  // Scale down if needed, preserving aspect ratio
  let w = baseW;
  let h = baseH;
  const scaleW = maxW / w;
  const scaleH = maxH / h;
  const scale = Math.min(1, scaleW, scaleH);
  w = Math.floor(w * scale);
  h = Math.floor(h * scale);

  // Apply sizes
  frameBox.style.width = w + 48 + "px";
  frameBox.style.height = h + 48 + "px";
  iframe.style.width = w + "px";
  iframe.style.height = h + "px";

  // Label: show real device resolution and scale info if applied
  const scaled = scale < 1 ? ` (scaled ×${scale.toFixed(2)})` : "";
  label.textContent = `${device.name} — ${baseW}×${baseH}${scaled}`;

  // Hide orientation toggle for desktop/laptop/TV
  if (fixed) {
    portraitBtn.style.display = "none";
    landscapeBtn.style.display = "none";
  } else {
    portraitBtn.style.display = "";
    landscapeBtn.style.display = "";
  }
}

// Init
document.addEventListener("DOMContentLoaded", () => {
  const { url, device, orientation } = getParams();
  const iframe = document.getElementById("deviceIframe");
  iframe.src = url || "https://example.com";

  setDeviceFrame(device, orientation);

  document.getElementById("portraitBtn").classList.toggle("active", orientation === "portrait");
  document.getElementById("landscapeBtn").classList.toggle("active", orientation === "landscape");

  document.getElementById("portraitBtn").onclick = () => {
    setDeviceFrame(device, "portrait");
    document.getElementById("portraitBtn").classList.add("active");
    document.getElementById("landscapeBtn").classList.remove("active");
  };
  document.getElementById("landscapeBtn").onclick = () => {
    setDeviceFrame(device, "landscape");
    document.getElementById("portraitBtn").classList.remove("active");
    document.getElementById("landscapeBtn").classList.add("active");
  };

  // Recompute on resize to keep frame within viewport
  window.addEventListener("resize", () => setDeviceFrame(device, orientation));
});
