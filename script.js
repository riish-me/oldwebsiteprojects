function locomotive() {
  gsap.registerPlugin(ScrollTrigger);
  const e = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: !0,
  });
  e.on("scroll", ScrollTrigger.update),
    ScrollTrigger.scrollerProxy("#main", {
      scrollTop(n) {
        return arguments.length
          ? e.scrollTo(n, 0, 0)
          : e.scroll.instance.scroll.y;
      },
      getBoundingClientRect: () => ({
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      }),
      pinType: document.querySelector("#main").style.transform
        ? "transform"
        : "fixed",
    }),
    ScrollTrigger.addEventListener("refresh", () => e.update()),
    ScrollTrigger.refresh();
}
locomotive();
const canvas = document.querySelector("canvas"),
  context = canvas.getContext("2d");
function files(e) {
  return "\n     ./male0001.webp\n     ./male0002.webp\n     ./male0003.webp\n     ./male0004.webp\n     ./male0005.webp\n     ./male0006.webp\n     ./male0007.webp\n     ./male0008.webp\n     ./male0009.webp\n     ./male0010.webp\n     ./male0011.webp\n     ./male0012.webp\n     ./male0013.webp\n     ./male0014.webp\n     ./male0015.webp\n     ./male0016.webp\n     ./male0017.webp\n     ./male0018.webp\n     ./male0019.webp\n     ./male0020.webp\n     ./male0021.webp\n     ./male0022.webp\n     ./male0023.webp\n     ./male0024.webp\n     ./male0025.webp\n     ./male0026.webp\n     ./male0027.webp\n     ./male0028.webp\n     ./male0029.webp\n     ./male0030.webp\n     ./male0031.webp\n     ./male0032.webp\n     ./male0033.webp\n     ./male0034.webp\n     ./male0035.webp\n     ./male0036.webp\n     ./male0037.webp\n     ./male0038.webp\n     ./male0039.webp\n     ./male0040.webp\n     ./male0041.webp\n     ./male0042.webp\n     ./male0043.webp\n     ./male0044.webp\n     ./male0045.webp\n     ./male0046.webp\n     ./male0047.webp\n     ./male0048.webp\n     ./male0049.webp\n     ./male0050.webp\n     ./male0051.webp\n     ./male0052.webp\n     ./male0053.webp\n     ./male0054.webp\n     ./male0055.webp\n     ./male0056.webp\n     ./male0057.webp\n     ./male0058.webp\n     ./male0059.webp\n     ./male0060.webp\n     ./male0061.webp\n     ./male0062.webp\n     ./male0063.webp\n     ./male0064.webp\n     ./male0065.webp\n     ./male0066.webp\n     ./male0067.webp\n     ./male0068.webp\n     ./male0069.webp\n     ./male0070.webp\n     ./male0071.webp\n     ./male0072.webp\n     ./male0073.webp\n     ./male0074.webp\n     ./male0075.webp\n     ./male0076.webp\n     ./male0077.webp\n     ./male0078.webp\n     ./male0079.webp\n     ./male0080.webp\n     ./male0081.webp\n     ./male0082.webp\n     ./male0083.webp\n     ./male0084.webp\n     ./male0085.webp\n     ./male0086.webp\n     ./male0087.webp\n     ./male0088.webp\n     ./male0089.webp\n     ./male0090.webp\n     ./male0091.webp\n     ./male0092.webp\n     ./male0093.webp\n     ./male0094.webp\n     ./male0095.webp\n     ./male0096.webp\n     ./male0097.webp\n     ./male0098.webp\n     ./male0099.webp\n     ./male0100.webp\n     ./male0101.webp\n     ./male0102.webp\n     ./male0103.webp\n     ./male0104.webp\n     ./male0105.webp\n     ./male0106.webp\n     ./male0107.webp\n     ./male0108.webp\n     ./male0109.webp\n     ./male0110.webp\n     ./male0111.webp\n     ./male0112.webp\n     ./male0113.webp\n     ./male0114.webp\n     ./male0115.webp\n     ./male0116.webp\n     ./male0117.webp\n     ./male0118.webp\n     ./male0119.webp\n     ./male0120.webp\n     ./male0121.webp\n     ./male0122.webp\n     ./male0123.webp\n     ./male0124.webp\n     ./male0125.webp\n     ./male0126.webp\n     ./male0127.webp\n     ./male0128.webp\n     ./male0129.webp\n     ./male0130.webp\n     ./male0131.webp\n     ./male0132.webp\n     ./male0133.webp\n     ./male0134.webp\n     ./male0135.webp\n     ./male0136.webp\n     ./male0137.webp\n     ./male0138.webp\n     ./male0139.webp\n     ./male0140.webp\n     ./male0141.webp\n     ./male0142.webp\n     ./male0143.webp\n     ./male0144.webp\n     ./male0145.webp\n     ./male0146.webp\n     ./male0147.webp\n     ./male0148.webp\n     ./male0149.webp\n     ./male0150.webp\n     ./male0151.webp\n     ./male0152.webp\n     ./male0153.webp\n     ./male0154.webp\n     ./male0155.webp\n     ./male0156.webp\n     ./male0157.webp\n     ./male0158.webp\n     ./male0159.webp\n     ./male0160.webp\n     ./male0161.webp\n     ./male0162.webp\n     ./male0163.webp\n     ./male0164.webp\n     ./male0165.webp\n     ./male0166.webp\n     ./male0167.webp\n     ./male0168.webp\n     ./male0169.webp\n     ./male0170.webp\n     ./male0171.webp\n     ./male0172.webp\n     ./male0173.webp\n     ./male0174.webp\n     ./male0175.webp\n     ./male0176.webp\n     ./male0177.webp\n     ./male0178.webp\n     ./male0179.webp\n     ./male0180.webp\n     ./male0181.webp\n     ./male0182.webp\n     ./male0183.webp\n     ./male0184.webp\n     ./male0185.webp\n     ./male0186.webp\n     ./male0187.webp\n     ./male0188.webp\n     ./male0189.webp\n     ./male0190.webp\n     ./male0191.webp\n     ./male0192.webp\n     ./male0193.webp\n     ./male0194.webp\n     ./male0195.webp\n     ./male0196.webp\n     ./male0197.webp\n     ./male0198.webp\n     ./male0199.webp\n     ./male0200.webp\n     ./male0201.webp\n     ./male0202.webp\n     ./male0203.webp\n     ./male0204.webp\n     ./male0205.webp\n     ./male0206.webp\n     ./male0207.webp\n     ./male0208.webp\n     ./male0209.webp\n     ./male0210.webp\n     ./male0211.webp\n     ./male0212.webp\n     ./male0213.webp\n     ./male0214.webp\n     ./male0215.webp\n     ./male0216.webp\n     ./male0217.webp\n     ./male0218.webp\n     ./male0219.webp\n     ./male0220.webp\n     ./male0221.webp\n     ./male0222.webp\n     ./male0223.webp\n     ./male0224.webp\n     ./male0225.webp\n     ./male0226.webp\n     ./male0227.webp\n     ./male0228.webp\n     ./male0229.webp\n     ./male0230.webp\n     ./male0231.webp\n     ./male0232.webp\n     ./male0233.webp\n     ./male0234.webp\n     ./male0235.webp\n     ./male0236.webp\n     ./male0237.webp\n     ./male0238.webp\n     ./male0239.webp\n     ./male0240.webp\n     ./male0241.webp\n     ./male0242.webp\n     ./male0243.webp\n     ./male0244.webp\n     ./male0245.webp\n     ./male0246.webp\n     ./male0247.webp\n     ./male0248.webp\n     ./male0249.webp\n     ./male0250.webp\n     ./male0251.webp\n     ./male0252.webp\n     ./male0253.webp\n     ./male0254.webp\n     ./male0255.webp\n     ./male0256.webp\n     ./male0257.webp\n     ./male0258.webp\n     ./male0259.webp\n     ./male0260.webp\n     ./male0261.webp\n     ./male0262.webp\n     ./male0263.webp\n     ./male0264.webp\n     ./male0265.webp\n     ./male0266.webp\n     ./male0267.webp\n     ./male0268.webp\n     ./male0269.webp\n     ./male0270.webp\n     ./male0271.webp\n     ./male0272.webp\n     ./male0273.webp\n     ./male0274.webp\n     ./male0275.webp\n     ./male0276.webp\n     ./male0277.webp\n     ./male0278.webp\n     ./male0279.webp\n     ./male0280.webp\n     ./male0281.webp\n     ./male0282.webp\n     ./male0283.webp\n     ./male0284.webp\n     ./male0285.webp\n     ./male0286.webp\n     ./male0287.webp\n     ./male0288.webp\n     ./male0289.webp\n     ./male0290.webp\n     ./male0291.webp\n     ./male0292.webp\n     ./male0293.webp\n     ./male0294.webp\n     ./male0295.webp\n     ./male0296.webp\n     ./male0297.webp\n     ./male0298.webp\n     ./male0299.webp\n     ./male0300.webp\n ".split(
    "\n"
  )[e];
}
(canvas.width = window.innerWidth),
  (canvas.height = window.innerHeight),
  window.addEventListener("resize", function () {
    (canvas.width = window.innerWidth),
      (canvas.height = window.innerHeight),
      render();
  });
const frameCount = 300,
  images = [],
  imageSeq = { frame: 1 };
for (let e = 0; e < 300; e++) {
  const n = new Image();
  (n.src = files(e)), images.push(n);
}
function render() {
  scaleImage(images[imageSeq.frame], context);
}
function scaleImage(e, n) {
  var a = n.canvas,
    l = a.width / e.width,
    p = a.height / e.height,
    m = Math.max(l, p),
    w = (a.width - e.width * m) / 2,
    b = (a.height - e.height * m) / 2;
  n.clearRect(0, 0, a.width, a.height),
    n.drawImage(e, 0, 0, e.width, e.height, w, b, e.width * m, e.height * m);
}
gsap.to(imageSeq, {
  frame: 299,
  snap: "frame",
  ease: "none",
  scrollTrigger: {
    scrub: 0.15,
    trigger: "#page>canvas",
    start: "top top",
    end: "600% top",
    scroller: "#main",
  },
  onUpdate: render,
}),
  (images[1].onload = render),
  ScrollTrigger.create({
    trigger: "#page>canvas",
    pin: !0,
    scroller: "#main",
    start: "top top",
    end: "600% top",
  }),
  gsap.to("#page1", {
    scrollTrigger: {
      trigger: "#page1",
      start: "top top",
      end: "bottom top",
      pin: !0,
      scroller: "#main",
    },
  }),
  gsap.to("#page2", {
    scrollTrigger: {
      trigger: "#page2",
      start: "top top",
      end: "bottom top",
      pin: !0,
      scroller: "#main",
    },
  }),
  gsap.to("#page3", {
    scrollTrigger: {
      trigger: "#page3",
      start: "top top",
      end: "bottom top",
      pin: !0,
      scroller: "#main",
    },
  });
