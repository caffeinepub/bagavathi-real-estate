import {
  RouterProvider,
  createRootRoute,
  createRoute,
  createRouter,
} from "@tanstack/react-router";
import { ThemeProvider } from "next-themes";
import SiteLayout from "./components/SiteLayout";
import AboutPage from "./pages/AboutPage";
import BuildingsPage from "./pages/BuildingsPage";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import PlotsPage from "./pages/PlotsPage";

const rootRoute = createRootRoute({
  component: SiteLayout,
});

const indexRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/",
  component: HomePage,
});

const aboutRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/about",
  component: AboutPage,
});

const plotsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/plots",
  component: PlotsPage,
});

const buildingsRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/buildings",
  component: BuildingsPage,
});

const contactRoute = createRoute({
  getParentRoute: () => rootRoute,
  path: "/contact",
  component: ContactPage,
});

const routeTree = rootRoute.addChildren([
  indexRoute,
  aboutRoute,
  plotsRoute,
  buildingsRoute,
  contactRoute,
]);

const router = createRouter({ routeTree });

declare module "@tanstack/react-router" {
  interface Register {
    router: typeof router;
  }
}

function App() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
