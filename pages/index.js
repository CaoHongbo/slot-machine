import { useState, useEffect } from "react";
import Image from "next/image";

import { random } from "../common/util.js";
import BGImage from "../public/game_backdrop.jpg";
import CanvasImage from "../public/game_canvas.png";
import CanvasOverImage from "../public/game_canvas_overlay.png";

import Items from "./Item.jsx";

const INIT_ICON = [1, 1, 1, 1, 1];

export default function Home() {
  const [curIcons, setCurIcons] = useState(INIT_ICON);
  const [finallIcons, setFinallIcons] = useState(INIT_ICON);
  const [buttonAble, setButtonAble] = useState(true);

  const click = (e) => {
    const arr = [];
    const r = random(1, 100);
    const iconIndex = random(1, 10);

    if (r <= 2) {
      // %2 win 10ways
      arr.push(iconIndex, iconIndex, iconIndex, iconIndex, iconIndex);
    } else if (r <= 7) {
      // %5 win 20ways
      if (iconIndex <= 5) {
        arr.push(iconIndex + 1, iconIndex, iconIndex, iconIndex, iconIndex);
      } else {
        arr.push(iconIndex, iconIndex, iconIndex, iconIndex, iconIndex - 1);
      }
    } else if (r <= 17) {
      // %10 win 90ways
      if (iconIndex <= 3) {
        arr.push(iconIndex + 1, iconIndex + 2, iconIndex, iconIndex, iconIndex);
      } else if (iconIndex <= 6) {
        arr.push(iconIndex + 1, iconIndex, iconIndex, iconIndex, iconIndex - 1);
      } else {
        arr.push(iconIndex, iconIndex, iconIndex, iconIndex - 2, iconIndex - 1);
      }
    } else {
      // lose
      if (iconIndex <= 3) {
        arr.push(
          iconIndex + 1,
          iconIndex + 2,
          iconIndex,
          iconIndex + 6,
          iconIndex + 4
        );
      } else if (iconIndex <= 6) {
        arr.push(
          iconIndex - 1,
          iconIndex - 3,
          iconIndex,
          iconIndex + 1,
          iconIndex + 4
        );
      } else {
        arr.push(
          iconIndex - 1,
          iconIndex,
          iconIndex,
          iconIndex - 5,
          iconIndex - 6
        );
      }
    }

    setButtonAble(false);
    setFinallIcons(arr);
  };

  return (
    <div className="container" style={{ height: "100%" }}>
      <div className="bg">
        <Image src={BGImage} layout="fill"></Image>
      </div>

      <div className="canvas">
        <Image src={CanvasImage} layout="fill"></Image>
      </div>

      <Items
        curIcons={curIcons}
        finallIcons={finallIcons}
        buttonAble={buttonAble}
        setButtonAble={(able) => {
          setButtonAble(able);
        }}
        setCurIcons={(cis) => {
          setCurIcons(cis);
        }}
      ></Items>

      <div className="slot-machine" style={{ position: "absolute" }}>
        <Image src={CanvasOverImage} layout="fill"></Image>
      </div>

      <div className="button" onClick={click}>
        <button>spin</button>
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

        .clearfix {
          *zoom: 1;
        }

        .clearfix:after {
          content: "";
          display: block;
          clear: both;
        }
      `}</style>

      <style global jsx>{`
        body,
        html {
          /* set size of body to full page and remove margins */
          width: 100%;
          height: 100%;
          padding: 0;
          margin: 0;
        }
      `}</style>
    </div>
  );
}
