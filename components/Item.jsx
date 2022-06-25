import { useState, useEffect, useRef } from "react";

import Image from "next/image";

import icon1 from "../public/icon_1_boned.png";
import icon2 from "../public/icon_2_whiskey.png";
import icon3 from "../public/icon_3_skull.png";
import icon4 from "../public/icon_4_danger.png";
import icon5 from "../public/icon_5_wagon.png";
import icon6 from "../public/icon_6_snake.png";
import icon7 from "../public/icon_7_cards.png";
import icon8 from "../public/icon_8_dynamite.png";
import icon9 from "../public/icon_9_skull.png";
import icon10 from "../public/icon_10_sheriff.png";

const icons = [];

for (let i = 0; i < 5; i++) {
  icons.push(
    icon1,
    icon2,
    icon3,
    icon4,
    icon5,
    icon6,
    icon7,
    icon8,
    icon9,
    icon10
  );
}

// const ICON_WIDTH = 119; // px
// const ICON_HEIGHT = 119; // px
const ICON_NUM_TH = 20;
// const ICON_DIV_SIZE = 124.5; // px
// const THRESHOLD = ICON_NUM_TH * ICON_DIV_SIZE;

function getPageScale() {
  var pageWidth = window.innerWidth,
    pageHeight = window.innerHeight;

  if (typeof pageWidth !== "number") {
    if (document.compatMode === "CSS1Compat") {
      pageWidth = document.documentElement.clientWidth;
      pageHeight = document.documentElement.clientHeight;
    } else {
      pageWidth = document.body.clientWidth;
      pageHeight = document.body.clientHeight;
    }
  }

  return { pageWidth, pageHeight };
}

export default function Items({
  curIcons,
  finallIcons,
  buttonAble,
  setButtonAble,
  setCurIcons,
  win,
}) {
  const itemsRef1 = useRef();
  const itemsRef2 = useRef();
  const itemsRef3 = useRef();
  const itemsRef4 = useRef();
  const itemsRef5 = useRef();
  const [iconWidth, setIconWidth] = useState(0);
  const [iconHeight, setIconHeight] = useState(0);

  useEffect(() => {
    setIconWidth(itemsRef1.current.offsetWidth);
    setIconHeight(getPageScale().pageHeight / 8.28);
    // console.log(window.screen.width);
    // console.log(window.screen.height);
  }, []);

  function getItems(
    curIcons,
    finallIcons,
    buttonAble,
    setButtonAble,
    setCurIcons,
    ...itemsRefs
  ) {
    const items = [];
    const THRESHOLD = ICON_NUM_TH * iconHeight;

    for (let i = 0; i < 5; i++) {
      let _scroll = 0;
      if (
        itemsRefs[i].current &&
        parseFloat(itemsRefs[i].current.style.top.replace("px", "")) !== 0
      ) {
        _scroll = parseFloat(itemsRefs[i].current.style.top.replace("px", ""));
      } else {
        _scroll = -30 * iconHeight;
      }

      let scroll = _scroll;
      if (buttonAble) {
        // Do not use recious caution const value = scroll <= -30 * iconHeight ? THRESHOLD : 0;
        const value = THRESHOLD;
        scroll += THRESHOLD;
        console.log(
          `_scroll:${_scroll}, scroll:${scroll}, ${i}, [${curIcons}], [${finallIcons}], ${value}, ${iconWidth}, ${iconHeight}, ${
            -30 * iconHeight
          }`
        );
      } else {
        const value = (finallIcons[i] + ICON_NUM_TH - curIcons[i]) * iconHeight;
        scroll -= value;
      }

      if (scroll <= -40 * iconHeight && iconHeight !== 0) {
        console.warn(
          "programming error, plz check " +
            `_scroll:${_scroll}, scroll:${scroll}, ${i}, [${curIcons}], [${finallIcons}], ${iconWidth}, ${iconHeight}`
        );
        // alert("error");
        // scroll += 10 * iconHeight;
        // console.warn(`fixScroll:${scroll}`);
      }

      items.push(
        <div
          key={i.toString()}
          className={`c${i + 1}`}
          ref={itemsRefs[i]}
          onTransitionEnd={() => {
            if (i == 4) {
              setButtonAble(true); // Button Able
              setCurIcons(finallIcons); // finallIcons -> curIcons
              alert(win ? "you win" : "you lose");
            }
          }}
          style={{
            width: "20%",
            float: "left",
            position: "relative",
            top: `${scroll}px`,
            transition: buttonAble
              ? null
              : `top ${0.5 + i * 0.5}s cubic-bezier(0.25,0.1,0.25,1)`,
          }}
        >
          {icons.map((d, index) => {
            // console.log(index);
            return (
              <div key={index} style={{ width: iconWidth, height: iconHeight }}>
                <Image
                  src={d}
                  width={iconWidth}
                  height={iconHeight}
                  layout="fixed"
                ></Image>
              </div>
            );
          })}
        </div>
      );
    }

    return items;
  }

  return (
    <div className="items">
      <div className="itemsicon clearfix">
        {getItems(
          curIcons,
          finallIcons,
          buttonAble,
          setButtonAble,
          setCurIcons,
          itemsRef1,
          itemsRef2,
          itemsRef3,
          itemsRef4,
          itemsRef5
        )}
      </div>

      <style jsx>{`
        .items {
          width: 100%;
          height: 100%;
          position: absolute;
        }

        .itemsicon {
          width: 42%;
          height: 530px;
          // background-color: red;
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          top: 5%;
          margin: auto;
          overflow: hidden;
        }

        .clearfix {
          *zoom: 1;
        }

        .clearfix:after {
          content: "";
          display: block;
          clear: both;
        }

        @media only screen and (min-width: 1280px) {
          .itemsicon {
            height: 72%;
            top: 3.3%;
          }
        }
      `}</style>
    </div>
  );
}
