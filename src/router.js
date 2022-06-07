const overrideRelativeHref = (routerElement, routes, routeElement) => {
  [...routeElement.querySelectorAll(`a[href^="/"]`)].forEach((a) =>
    a.addEventListener("click", (event) => {
      event.preventDefault();
      navigate(routerElement, routes, a.getAttribute("href"));
    })
  );
};

const fadeClearRouterElement = async (routerElement, previousRoute) => {
  routerElement.className = "route-out";
  await new Promise((resolve) => setTimeout(resolve, 300));
  routerElement.removeChild(...previousRoute);
};

const clearRouterElement = async (routerElement) => {
  const previousRoute = routerElement.getElementsByTagName("div");
  previousRoute.length &&
    (await fadeClearRouterElement(routerElement, previousRoute));
};

const navigate = async (routerElement, routes, route) => {
  const newRoute = routes[route.replace(/^[\/\.]+/, "")] || routes[""];
  window.history.pushState(false, "", route);

  await clearRouterElement(routerElement);

  routerElement.innerHTML = newRoute.template;
  const [routeElement] = routerElement.getElementsByTagName("div");
  document.body.className = newRoute.mainStyle;

  newRoute.controller?.({
    routeElement,
    $: (needle) => routeElement.querySelector(needle),
  });

  overrideRelativeHref(routerElement, routes, routeElement);
  routerElement.className = "";
};

export default (routes) => {
  const routerElement = document.querySelector(`div[router]`);
  window.onpopstate = () =>
    navigate(routerElement, routes, window.location.pathname);
  window.onpopstate();
};
