let ul_ = q_s(`.sec_1_div1_2 > div > ul`);

const ul_arr = [
  { href: "home_", text: "HOME" },
  { href: "menu_", text: "MENU" },
  { href: "ourStory_", text: "OUR STORY" },
  { href: "contactus_", text: "CONTACT US" },
];

ul_arr.forEach(({ href, text }) => {
  ul_.innerHTML += `
        <li>
            <a href="#${href}">${text}</a>
        </li>
    `;
});
