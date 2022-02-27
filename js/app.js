const body_ = q_s(`body`);
const ifLoading = q_s(`.ifLoading`);

let res_ = 0;
const ftcArr = [
  `section1`,
  `section2`,
  `section3`,
  `section4`,
  `section5`,
  `section6`,
];

const getPercent = (x, y) => (y * 100) / x;

const get_ftc = async (url) => {
  let res = await fetch(url);
  let txt_data = await res.text();

  return txt_data;
};

const get_html = async (get) => {
  let sl = `.${get}`;

  q_s(sl).innerHTML = `<p class="ld-6">loading..</p>`;

  let txt_data_html = await get_ftc(`./html/${get}.html`);
  let txt_data_js = await get_ftc(`./js/htmljs/${get}.js`);

  let script_ = create_(`script`);

  script_.innerHTML = txt_data_js;
  q_s(sl).innerHTML = `${txt_data_html}`;

  append_(q_s(sl), script_);

  return 1;
};

const stepBystep = async () => {
  let res = await get_html(ftcArr[res_]);
  res_ += res;

  let prcnt = getPercent(ftcArr.length, res_);
  ifLoading.innerHTML = `load completed: ${prcnt.toFixed(2)}%`;

  if (ftcArr.length > res_) {
    stepBystep();
  }

  if (prcnt === 100) {
    setTimeout(() => {
      body_.style[`overflow`] = `unset`;
      ifLoading.style[`transform`] = `translateX(-100%)`;
    }, 150);
  }
};

//init
stepBystep();
