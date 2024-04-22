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
        <Route exact path={"/"} component={AvatarFrame} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
