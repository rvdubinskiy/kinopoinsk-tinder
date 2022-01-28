import { DataT } from "../../types";

import IMAGE_01 from "../converted/1.jpg";
import IMAGE_02 from "../converted/2.jpg";
import IMAGE_03 from "../converted/3.jpg";
import IMAGE_04 from "../converted/4.jpg";
import IMAGE_05 from "../converted/5.jpg";
import IMAGE_06 from "../converted/6.jpg";
import IMAGE_07 from "../converted/7.jpg";
import IMAGE_08 from "../converted/8.jpg";
import IMAGE_09 from "../converted/9.jpg";
import IMAGE_10 from "../converted/10.jpg";
import IMAGE_11 from "../converted/11.jpg";
import IMAGE_12 from "../converted/12.jpg";
import IMAGE_13 from "../converted/13.jpg";
import IMAGE_14 from "../converted/14.jpg";
import IMAGE_15 from "../converted/15.jpg";
import IMAGE_16 from "../converted/16.jpg";
import IMAGE_17 from "../converted/17.jpg";
import IMAGE_18 from "../converted/18.jpg";
import IMAGE_19 from "../converted/19.jpg";
import IMAGE_20 from "../converted/20.jpg";
import IMAGE_21 from "../converted/21.jpg";
import IMAGE_22 from "../converted/22.jpg";
import IMAGE_23 from "../converted/23.jpg";
import IMAGE_24 from "../converted/24.jpg";
import IMAGE_25 from "../converted/25.jpg";
import IMAGE_26 from "../converted/26.jpg";
import IMAGE_27 from "../converted/27.jpg";
import IMAGE_28 from "../converted/28.jpg";
import IMAGE_29 from "../converted/29.jpg";
import IMAGE_30 from "../converted/30.jpg";

const images = [
  IMAGE_01,
  IMAGE_02,
  IMAGE_03,
  IMAGE_04,
  IMAGE_05,
  IMAGE_06,
  IMAGE_07,
  IMAGE_08,
  IMAGE_09,
  IMAGE_10,
  IMAGE_11,
  IMAGE_12,
  IMAGE_13,
  IMAGE_14,
  IMAGE_15,
  IMAGE_16,
  IMAGE_17,
  IMAGE_18,
  IMAGE_19,
  IMAGE_20,
  IMAGE_21,
  IMAGE_22,
  IMAGE_23,
  IMAGE_24,
  IMAGE_25,
  IMAGE_26,
  IMAGE_27,
  IMAGE_28,
  IMAGE_29,
  IMAGE_30,
]

function getRandomArbitrary(min: number, max: number) {
  return Math.floor(Math.random() * (max - min) + min);
}

const data: DataT[] = images.map((image, index: number) => ({
  id: index + 1,
  name: "Форрест Гамп",
  isOnline: true,
  match: String(getRandomArbitrary(5, 10)),
  description:
    "Полувековая история США глазами чудака из Алабамы. Абсолютная классика Роберта Земекиса с Томом Хэнксом",
  message:
    "I will go back to Gotham and I will fight men Iike this but I will not become an executioner.",
  image: image,
}));

export default data;
