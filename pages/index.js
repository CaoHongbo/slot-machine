import Head from "next/head";
import Image from "next/image";
// import styles from "./index.module.sass";

import BGImage from "../public/game_backdrop.jpg";
import CanvasImage from "../public/game_canvas.png";
import CanvasOverImage from "../public/game_canvas_overlay.png";

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

const icons = [
  icon1,
  icon2,
  icon3,
  icon4,
  icon5,
  icon6,
  icon7,
  icon8,
  icon9,
  icon10,
];

function getItems() {
  const items = [];
  for (let i = 0; i < 5; i++) {
    items.push(
      <div key={i + 1} className={`c${i + 1}`} style={{ float: "left" }}>
        {icons.map((d, i) => {
          return (
            <div>
              <Image src={d} key={i} width={119} height={119}></Image>
            </div>
          );
        })}
      </div>
    );
  }

  return items;
}

export default function Home() {
  return (
    <div className="container">
      <div style={{ position: "absolute" }}>
        <Image src={BGImage}></Image>
      </div>

      <div className="canvas" style={{ position: "absolute" }}>
        <Image src={CanvasImage}></Image>
      </div>

      <div className="items">
        <div className="itemsicon clearfix">{getItems()}</div>
      </div>

      <div className="slot-machine" style={{ position: "absolute" }}>
        <Image src={CanvasOverImage}></Image>
      </div>

      <style jsx>{`
        .items {
          width: 100%;
          height: 100%;
          position: absolute;
        }

        .itemsicon {
          width: 595px;
          // height: 595px;
          // background-color: red;
          position: absolute;
          left: 0;
          right: 0;
          bottom: 0;
          top: 150px;
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
