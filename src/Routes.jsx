import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "pages/Home";
import NotFound from "pages/NotFound";
const PDPblackWithCartItem = React.lazy(() =>
  import("pages/PDPblackWithCartItem")
);
const PDPblackTwo = React.lazy(() => import("pages/PDPblackTwo"));
const PDPwhiteWithCartItem = React.lazy(() =>
  import("pages/PDPwhiteWithCartItem")
);
const PDPwhite = React.lazy(() => import("pages/PDPwhite"));
const PDPgoldWithCartItem = React.lazy(() =>
  import("pages/PDPgoldWithCartItem")
);
const PDPgold = React.lazy(() => import("pages/PDPgold"));
const PDPpurpleWithCartItemOne = React.lazy(() =>
  import("pages/PDPpurpleWithCartItemOne")
);
const PDPpurpleWithCartItem = React.lazy(() =>
  import("pages/PDPpurpleWithCartItem")
);
const PDPblackOne = React.lazy(() => import("pages/PDPblackOne"));
const PDPblack = React.lazy(() => import("pages/PDPblack"));
const PDPwhiteOne = React.lazy(() => import("pages/PDPwhiteOne"));
const PDPwhiteTwo = React.lazy(() => import("pages/PDPwhiteTwo"));
const PDPgoldOne = React.lazy(() => import("pages/PDPgoldOne"));
const PDPgoldTwo = React.lazy(() => import("pages/PDPgoldTwo"));
const PDPpurple = React.lazy(() => import("pages/PDPpurple"));
const PDPpurpleOne = React.lazy(() => import("pages/PDPpurpleOne"));
const CART = React.lazy(() => import("pages/CART"));
const HomeLiteMode = React.lazy(() => import("pages/HomeLiteMode"));
const Home1scrollUpper = React.lazy(() => import("pages/Home1scrollUpper"));
const Home2scrollLower = React.lazy(() => import("pages/Home2scrollLower"));
const SurfacePro8One = React.lazy(() => import("pages/SurfacePro8One"));
const Home1 = React.lazy(() => import("pages/Home1"));
const ProjectRoutes = () => {
  return (
    <React.Suspense fallback={<>Loading...</>}>
      <Router>
        <Routes>
          <Route path="/" element={<Home1 />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/surfacepro8one" element={<SurfacePro8One />} />
          <Route path="/home2scrolllower" element={<Home2scrollLower />} />
          <Route path="/home1scrollupper" element={<Home1scrollUpper />} />
          <Route path="/homelitemode" element={<HomeLiteMode />} />
          <Route path="/cart" element={<CART />} />
          <Route path="/pdppurpleone" element={<PDPpurpleOne />} />
          <Route path="/pdppurple" element={<PDPpurple />} />
          <Route path="/pdpgoldtwo" element={<PDPgoldTwo />} />
          <Route path="/pdpgoldone" element={<PDPgoldOne />} />
          <Route path="/pdpwhitetwo" element={<PDPwhiteTwo />} />
          <Route path="/pdpwhiteone" element={<PDPwhiteOne />} />
          <Route path="/pdpblack" element={<PDPblack />} />
          <Route path="/pdpblackone" element={<PDPblackOne />} />
          <Route
            path="/pdppurplewithcartitem"
            element={<PDPpurpleWithCartItem />}
          />
          <Route
            path="/pdppurplewithcartitemone"
            element={<PDPpurpleWithCartItemOne />}
          />
          <Route path="/pdpgold" element={<PDPgold />} />
          <Route
            path="/pdpgoldwithcartitem"
            element={<PDPgoldWithCartItem />}
          />
          <Route path="/pdpwhite" element={<PDPwhite />} />
          <Route
            path="/pdpwhitewithcartitem"
            element={<PDPwhiteWithCartItem />}
          />
          <Route path="/pdpblacktwo" element={<PDPblackTwo />} />
          <Route
            path="/pdpblackwithcartitem"
            element={<PDPblackWithCartItem />}
          />
          <Route path="/dhiwise-dashboard" element={<Home />} />
        </Routes>
      </Router>
    </React.Suspense>
  );
};
export default ProjectRoutes;
