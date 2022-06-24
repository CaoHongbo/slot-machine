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

const ICON_WIDTH = 119; // px
const ICON_HEIGHT = 119; // px

function getItems(curIcons, finallIcons, ...itemsRefs) {
  const items = [];
  for (let i = 0; i < 5; i++) {
    let scroll = itemsRefs[i].current
      ? parseFloat(itemsRefs[i].current.style.top.replace("px", ""))
      : 0;

    // console.log(itemsRefs[i].current.style.top);
    // console.log(scroll);

    if (curIcons[i] === finallIcons[i]) {
      scroll -= 10 * 124.5;
    } else {
      scroll -= (finallIcons[i] + 10 - curIcons[i]) * 124.5;
    }

    items.push(
      <div
        key={i + 1}
        className={`c${i + 1}`}
        ref={itemsRefs[i]}
        style={{
          float: "left",
          position: "relative",
          top: `${scroll}px`,
          transition: `top ${0.5}s cubic-bezier(0.25,0.1,0.25,1)`,
        }}
      >
        {icons.map((d, index) => {
          return (
            <div>
              <Image
                src={d}
                key={index}
                width={ICON_WIDTH}
                height={ICON_HEIGHT}
              ></Image>
            </div>
          );
        })}
      </div>
    );
  }

  return items;
}

export default function Items({ curIcons, finallIcons }) {
  const itemsRef1 = useRef();
  const itemsRef2 = useRef();
  const itemsRef3 = useRef();
  const itemsRef4 = useRef();
  const itemsRef5 = useRef();

  return (
    <div className="items">
      <div className="itemsicon clearfix">
        {getItems(
          curIcons,
          finallIcons,
          itemsRef1,
          itemsRef2,
          itemsRef3,
          itemsRef4,
          itemsRef5
        )}
      </div>

      <style jsx>{`
        .bg,
        .canvas,
        .slot-machine {
          position: absolute;
          width: 100%;
          height: 100%;
        }

        .button {
          position: absolute;
        }

        .items {
          width: 100%;
          height: 100%;
          position: absolute;
        }

        .itemsicon {
          width: 595px;
          height: 530px;
          background-color: red;
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          top: 16px;
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
      `}</style>
    </div>
  );
}
