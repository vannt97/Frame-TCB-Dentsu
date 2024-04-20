import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./assets/styles/_app.scss";
import "./assets/styles/main.css";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import React from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n/i18n.ts";
import { Provider } from "react-redux";
import store from "./store/store.ts";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "./apis/api.ts";
ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <React.Suspense fallback={<div>Loading....</div>}>
      <I18nextProvider i18n={i18n}>
        <QueryClientProvider client={queryClient}>
          <Provider store={store}>
            <App />
          </Provider>
        </QueryClientProvider>
      </I18nextProvider>
    </React.Suspense>
  </React.StrictMode>
);
