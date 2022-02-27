const q_s = (e) => {
  return document.querySelector(e);
};
const qa_s = (e) => {
  return document.querySelectorAll(e);
};
const _css = (e, e1, e2) => {
  if (typeof e1 === "object") {
    Object.assign(e.style, e1);
  } else if (typeof e1 === "string") {
    e.style[e1] = e2;
  }
};
const a_class = (e, e1) => {
  e.classList.add(e1);
};
const r_class = (e, e1) => {
  e.classList.remove(e1);
};
const get_css = (e, e1) => {
  if (Object.keys(window.getComputedStyle(e)).includes(e1)) {
    return window.getComputedStyle(e).getPropertyValue(e1);
  } else {
    return Error(`invalid property: "${e1}"`);
  }
};
const on_ = (e, e1, e2) => {
  e.addEventListener(e1, e2);
};
const r_listener = (e, e1, e2) => {
  e.removeEventListener(e1, e2);
};
const create_ = (e) => {
  return document.createElement(e);
};
const append_ = (e, e1) => {
  return e.appendChild(e1);
};
const s_attr = (e, e1, e2) => {
  e.setAttribute(e1, e2);
};
const r_attr = (e, e1) => {
  e.removeAttribute(e1);
};
const _val = (e) => {
  return e.value;
};
const prevent_ = (e) => {
  return e.preventDefault();
};

//-----new-----
/*
{
    id: 2,
    parentId: 1,
    child: 2,
    create: "p",
    html: "me (p)",
    textContent: "This is a child div!",
    css: {
      color: "#f00",
    },
}
*/
/*
let mk_container_arr = [
  main container element
  {
    id: 1,
    child: 1,
    create: "div",
    html: "me (div)",
  },
  child element
  {
    id: 2,
    parentId: 1,
    child: 2,
    create: "p",
    html: "me (p)",
  },
  child's child element
  {
    id: 5,
    parentId: 2,
    child: 3,
    create: "span",
    html: "me (span)",
  },
];
*/
const mk_container_ = (mk_container_arr) => {
  try {
    //wall 1
    const ifA_Array = Array.isArray(mk_container_arr);
    if (!ifA_Array) {
      return Error(
        `Array required in function: (mk_container_), mk_container_(array)!, given: ${typeof mk_container_arr}.`
      );
    } else {
      if (mk_container_arr.length === 0) {
        return Error(`Can not give an empty array!`);
      }
    }

    let arr_of_sirial_children = [];
    let node_;
    let errors_ = { id: [], parentId: [], child: [], create: [], error: 0 };
    let foundError = 0;

    //wall 2
    let filtered_cld_1 = mk_container_arr.filter((itm) => {
      return itm.child < 2;
    });

    if (filtered_cld_1.length > 1) {
      let error_ = [];
      mk_container_arr.forEach((itm, i) => {
        if (itm.child === 1) {
          error_.push(
            `cann't set child: 1, more than once. Error at [array][${i}]`
          );
        }
      });

      return error_;
    }

    //wall 3
    let onlyOneChildObjErr = `must contain a array object that only contains = id: 1, (no parentId), child: 1, create: "div".`;

    let one_cld_ = mk_container_arr.filter((itm) => {
      return itm.child === 1;
    });

    if (one_cld_.length < 1) {
      return onlyOneChildObjErr;
    }

    //wall 4
    let one_cld__ = mk_container_arr.filter((itm) => {
      return itm.child === 1 && itm.parentId;
    });

    if (one_cld__.length >= 1) {
      return onlyOneChildObjErr;
    }

    //wall 5
    let acc_error = [];
    mk_container_arr.reduce((acc, itm, i) => {
      let id = itm.id;

      if (acc[id]) {
        acc_error.push(`unique id required!. Error at [array][${i}]`);
      } else {
        acc[id] = 1;
      }

      return acc;
    }, {});

    if (acc_error.length > 0) {
      return acc_error;
    }

    //wall 6
    mk_container_arr.forEach((itm, i) => {
      let id = itm.id;
      let parentId = itm.parentId;
      let child = itm.child;
      let create = itm.create;
      let idName = itm.idName;
      let html = itm.html;
      let textContent = itm.textContent;
      let css = itm.css;
      let className = itm.className;
      let listen = itm.listen;
      let setAttribute = itm.setAttribute;

      let elm = create_(create);

      //required
      if (!id || !parentId || !child || !create) {
        if (child !== 1) {
          if (!id) {
            errors_["error"]++;
            errors_.id.push(
              `id required!, (it cann't be 0). Error in position [array][${i}]`
            );
          }

          if (!parentId) {
            errors_["error"]++;
            errors_.parentId.push(
              `parentId required!, (it cann't be 0). Error in position [array][${i}]`
            );
          }

          if (!child) {
            errors_["error"]++;
            errors_.child.push(
              `child required!, (it cann't be 0). Error in position [array][${i}]`
            );
          }

          if (!create) {
            errors_["error"]++;
            errors_.create.push(
              `create required!, (it cann't be 0). Error in position [array][${i}]`
            );
          }
        }
      }

      //optional
      if (idName) {
        s_attr(elm, "id", idName);
      }

      if (html) {
        elm.innerHTML = html;
      }

      if (textContent) {
        elm.textContent = textContent;
      }

      if (css) {
        _css(elm, css);
      }

      if (className) {
        a_class(elm, className);
      }

      if (listen) {
        on_(elm, listen.on, listen.do);
      }

      if (setAttribute) {
        for (const key in setAttribute) {
          if (Object.hasOwnProperty.call(setAttribute, key)) {
            const LGelm = setAttribute[key];

            s_attr(elm, key, LGelm);
          }
        }
      }

      arr_of_sirial_children.push({ id, parentId, child, elm });

      if (i + 1 === mk_container_arr.length) {
        if (errors_["error"] !== 0) {
          foundError = 1;
        }

        if (foundError !== 1) {
          let maxChild = arr_of_sirial_children.reduce((acc, itm) => {
            return Math.max(acc, itm.child);
          }, 0);

          for (let index = maxChild; index > 0; index--) {
            arr_of_sirial_children.forEach((itm) => {
              if (itm.child === index) {
                let index_ = arr_of_sirial_children.findIndex((idx) => {
                  return idx["id"] === itm.parentId;
                });

                if (index_ !== -1) {
                  append_(arr_of_sirial_children[index_].elm, itm.elm);
                }
              }
            });
          }

          let index_ = arr_of_sirial_children.findIndex((idx) => {
            return idx["child"] === 1;
          });

          node_ = arr_of_sirial_children[index_].elm;
        }
      }
    });

    //wall 7
    if (foundError !== 1) {
      return node_;
    } else {
      return errors_;
    }
  } catch (error) {
    return error;
  }
};
