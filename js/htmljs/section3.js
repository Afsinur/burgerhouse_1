const nth_c2 = q_s(`.sec3Div>div:nth-child(2)`);

const nth_c2_arr = [
  {
    src1: "../img/section3/left.png",
    alt1: "left.png",
    src2: "../img/section3/left-shadow.png",
    alt2: "left-shadow.png",
    h2: "Lorem ipsum dolor",
    p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, numquam.",
    href: "/",
    a_txt: "ORDER NOW",
  },
  {
    src1: "../img/section3/middle.png",
    alt1: "middle.png",
    src2: "../img/section3/middle-shadow.png",
    alt2: "middle-shadow.png",
    h2: "Lorem ipsum dolor",
    p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, numquam.",
    href: "/",
    a_txt: "ORDER NOW",
  },
  {
    src1: "../img/section3/right.png",
    alt1: "right.png",
    src2: "../img/section3/right-shadow.png",
    alt2: "right-shadow.png",
    h2: "Lorem ipsum dolor",
    p: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, numquam.",
    href: "/",
    a_txt: "ORDER NOW",
  },
];

nth_c2_arr.forEach(({ src1, alt1, src2, alt2, h2, p, href, a_txt }) => {
  nth_c2.innerHTML += `
        <div>
            <img src="${src1}" alt="${alt1}"/>
            <img src="${src2}" alt="${alt2}"/>

            <h2>${h2}</h2>
            <p>${p}</p>
            <a href="${href}">${a_txt}</a>
        </div>
    `;
});
