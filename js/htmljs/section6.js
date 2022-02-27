const se6H1 = q_s(`.sec6Div>div>div:nth-child(1)>h1`);
const se6addr = q_s(`.sec6Div>div>div:nth-child(2)>div:nth-child(2)`);
const se6lstP = q_s(`.sec6Div>div>div:nth-child(3)>p`);
const se6lstUL = q_s(`.sec6Div>div>div:nth-child(3)>ul`);

const s6_h1_obj = {
  src: "../img/section6/title-burger.png",
  alt: "title-burger.png",
  span: "BURGER HOUSE",
};

const s6_addrs_Arr = [
  {
    src: "../img/section6/location.png",
    alt: "location.png",
    addr: "MAIN RAOD, BUILDING NAME, COUNTRY",
  },
  {
    src: "../img/section6/email.png",
    alt: "email.png",
    addr: "info@companyname.com",
  },
];

const s6Foot_obj = {
  p: "&copy; company name 2022.all rights reserved.",
  ul: [
    {
      href: "/",
      src: "../img/section6/social/instagram.png",
      alt: "instagram.png",
    },
    {
      href: "/",
      src: "../img/section6/social/facebook.png",
      alt: "facebook.png",
    },
    {
      href: "/",
      src: "../img/section6/social/twitter.png",
      alt: "twitter.png",
    },
    {
      href: "/",
      src: "../img/section6/social/whatsapp.png",
      alt: "whatsapp.png",
    },
  ],
};

se6H1.innerHTML = `
    <img src="${s6_h1_obj.src}" alt="${s6_h1_obj.alt}"/>
    <span>${s6_h1_obj.span}</span>
`;

s6_addrs_Arr.forEach(({ src, alt, addr }) => {
  se6addr.innerHTML += `
        <div>
            <img src="${src}" alt="${alt}"/>
            <p>${addr}</p>
        </div>
    `;
});

se6lstP.innerHTML = s6Foot_obj.p;
s6Foot_obj.ul.forEach(({ href, src, alt }) => {
  se6lstUL.innerHTML += `
            <li>
                <a href="${href}">
                    <img src="${src}" alt="${alt}"/>
                </a>
            </li>
        `;
});
