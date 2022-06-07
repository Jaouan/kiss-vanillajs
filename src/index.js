import "./index.css";
import router from "./router";

import hi from "./pages/hi";
import little from "./pages/little";
import squirrel from "./pages/squirrel";

// - Bootstrap router.
router({
  "": hi,
  little,
  squirrel,
});

// - Uncloak.
document.body.style.display = "";
