const dv_nth_cld_1 = q_s(`.sec4Div > div > div:nth-child(1)`);
const dv_nth_cld_2 = q_s(`.sec4Div > div > div:nth-child(2)`);
const sec4_tgl = q_s(`.sec4Toggle_`);
const sec4_tgl_cldrn = Array.from(sec4_tgl.children);
const s4_slt_clr = `#ffc045`;
const s4_slt_clr_nt = `#c4c7ca`;
const s4_slt_trns = `background-color 200ms ease-in-out`;
const s4_animNm = `s4_anim`;

const storyArr = [
  {
    h2: "DISCOVER",
    h1: "UPCOMING EVENTS",
    p: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed voluptates, nemo asperiores quos cumque error obcaecati fuga inventore enim tempora, consectetur, iusto est corporis? Quibusdam accusantium earum, quos reiciendis sit atque alias illum esse.",
    src: "img/section4/right.png",
  },

  {
    h2: "TRY",
    h1: "FOOD EVENTS",
    p: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed voluptates, nemo asperiores quos cumque error obcaecati fuga inventore enim tempora, consectetur, iusto est corporis? Quibusdam accusantium earum, quos reiciendis sit atque alias illum esse.",
    src: "img/section2/left.png",
  },

  {
    h2: "GET",
    h1: "FOOD NEWS",
    p: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed voluptates, nemo asperiores quos cumque error obcaecati fuga inventore enim tempora, consectetur, iusto est corporis? Quibusdam accusantium earum, quos reiciendis sit atque alias illum esse.",
    src: "img/section2/right-bottom.png",
  },
];

const s4_cmn_add_anim = () => {
  a_class(dv_nth_cld_1, s4_animNm);
  a_class(dv_nth_cld_2, s4_animNm);
};

const s4_cmn_rmv_anim = () => {
  on_(dv_nth_cld_1, "animationend", () => {
    r_class(dv_nth_cld_1, s4_animNm);
  });
  on_(dv_nth_cld_2, "animationend", () => {
    r_class(dv_nth_cld_2, s4_animNm);
  });
};

const s4_cmmn_shw = (e) => {
  let { h2, h1, p, src } = storyArr[e];

  dv_nth_cld_1.innerHTML = `<h2>${h2}</h2> <h1>${h1}</h1> <p>${p}</p>`;
  dv_nth_cld_2.style[`background-image`] = `url(${src})`;
};

on_(sec4_tgl, `click`, (e) => {
  let clsList = e.target.parentNode.classList;
  let condition_1 = Array.from(clsList).includes(`sec4Toggle_`);

  if (condition_1) {
    let datasetVal = e.target.dataset.tgglnum;
    s4_cmmn_shw(Number(datasetVal));
    s4_cmn_add_anim();

    sec4_tgl_cldrn.forEach((cld) => {
      if (cld.dataset.tgglnum === datasetVal) {
        cld.style[`background-color`] = s4_slt_clr;
      } else {
        cld.style[`background-color`] = s4_slt_clr_nt;
      }

      cld.style[`transition`] = s4_slt_trns;
    });
  }
});

//init
s4_cmmn_shw(0);
s4_cmn_rmv_anim();
sec4_tgl_cldrn[0].style[`background-color`] = s4_slt_clr;
