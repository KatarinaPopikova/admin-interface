/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
/* import specific icons */
import { faUser, faPenToSquare } from "@fortawesome/free-regular-svg-icons";

import {
  faArrowUpFromBracket,
  faArrowRightFromBracket,
  faXmark,
  faMagnifyingGlass,
  faCheck,
  faUserGear,
  faBars,
  faArrowLeft,
  faHouse,
  faSquareCheck,
} from "@fortawesome/free-solid-svg-icons";

/* add icons to the library */
library.add(
  faUser,
  faArrowUpFromBracket,
  faArrowRightFromBracket,
  faXmark,
  faMagnifyingGlass,
  faPenToSquare,
  faCheck,
  faUserGear,
  faBars,
  faArrowLeft,
  faHouse,
  faSquareCheck
);

export default FontAwesomeIcon;
