import Home from "./pages/Home/Home";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import OurStory from "./pages/OurStory/OurStory";
import CSRGallery from "./pages/CSRGallery/CSRGallery";
import CelebrationEvent from "./pages/CelebrationEvent/CelebrationEvent";
import { useTranslation } from "react-i18next";
import { NAMESPACES } from "./constants/namespaces";
import CreateFrame from "./pages/CreateFrame/CreateFrame";
import ScrollToTop from "./hooks/ScrollToTop";
import DetailStory from "./pages/DetailStory/DetailStory";
import { PATH } from "./constants/paths";
import AvatarFrame from "./pages/AvatarFrame/AvatarFrame.js";

function App() {
  const { i18n } = useTranslation();
  i18n.loadNamespaces(NAMESPACES);

  return (
    <BrowserRouter>
      <ScrollToTop />
      <Switch>
        <Route exact path={`/`}>
          <Redirect to={PATH.TRANG_CHU}></Redirect>
        </Route>
        <Route exact path={PATH.CREATE_FRAME} component={CreateFrame} />
        <Route exact path={"/avatar-frame"} component={AvatarFrame} />
        <Route exact path={PATH.TAO_AVATAR} component={CreateFrame} />
        <Route exact path={PATH.TOGETHER_WE_CREATE} component={OurStory} />
        <Route exact path={PATH.TOGETHER_WE_GIVE_BACK} component={CSRGallery} />
        <Route
          exact
          path={PATH.TOGETHER_WE_CELEBRATE}
          component={CelebrationEvent}
        />
        <Route exact path={PATH.DONG_KIEN_TAO} component={OurStory} />
        <Route exact path={PATH.DONG_CHIA_SE} component={CSRGallery} />
        <Route exact path={PATH.DONG_TON_VINH} component={CelebrationEvent} />
        <Route exact path="/:lang/:slugPost" component={DetailStory} />

        <Route exact path={PATH.HOME} component={Home} />
        <Route exact path={PATH.TRANG_CHU} component={Home} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
