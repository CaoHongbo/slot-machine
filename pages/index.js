import Head from "next/head";
import Image from "next/image";
import "./index.module.sass";

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

function Items() {
  return (
    <div className="items">
      <div className="c1">
        <Image src={icon1} width={50} height={50}></Image>
        <Image src={icon2} width={50} height={50}></Image>
        <Image src={icon3} width={50} height={50}></Image>
        <Image src={icon4} width={50} height={50}></Image>
        <Image src={icon5} width={50} height={50}></Image>
        <Image src={icon6} width={50} height={50}></Image>
        <Image src={icon7} width={50} height={50}></Image>
        <Image src={icon8} width={50} height={50}></Image>
        <Image src={icon9} width={50} height={50}></Image>
        <Image src={icon10} width={50} height={50}></Image>
      </div>
      <div className="c2">
        <Image src={icon1} width={50} height={50}></Image>
        <Image src={icon2} width={50} height={50}></Image>
        <Image src={icon3} width={50} height={50}></Image>
        <Image src={icon4} width={50} height={50}></Image>
        <Image src={icon5} width={50} height={50}></Image>
        <Image src={icon6} width={50} height={50}></Image>
        <Image src={icon7} width={50} height={50}></Image>
        <Image src={icon8} width={50} height={50}></Image>
        <Image src={icon9} width={50} height={50}></Image>
        <Image src={icon10} width={50} height={50}></Image>
      </div>
      <div className="c3">
        <Image src={icon1} width={50} height={50}></Image>
        <Image src={icon2} width={50} height={50}></Image>
        <Image src={icon3} width={50} height={50}></Image>
        <Image src={icon4} width={50} height={50}></Image>
        <Image src={icon5} width={50} height={50}></Image>
        <Image src={icon6} width={50} height={50}></Image>
        <Image src={icon7} width={50} height={50}></Image>
        <Image src={icon8} width={50} height={50}></Image>
        <Image src={icon9} width={50} height={50}></Image>
        <Image src={icon10} width={50} height={50}></Image>
      </div>
      <div className="c4"></div>
      <div className="c5"></div>
    </div>
  );
}

export default function Home() {
  return (
    <div className="container">
      <div style={{ position: "absolute" }}>
        <Image src={BGImage} width={1920} height={1080}></Image>
      </div>

      <div className="canvas" style={{ position: "absolute" }}>
        <Image src={CanvasImage}></Image>
      </div>

      <div className="slot-machine" style={{ position: "absolute" }}>
        <Image src={CanvasOverImage}></Image>
        <Items></Items>
      </div>
      {/* 
      <div className="item" style={{ position: "absolute" }}>
        <Image src={CanvasOverImage}></Image>
      </div> */}
    </div>
  );
}
