import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ReactGA from "react-ga4";

const RouteChangeTracker = () => {
  const location = useLocation();

  useEffect(() => {
    // We are sending a pageview hit every time the route changes
    ReactGA.send({
      hitType: "pageview",
      page: location.pathname + location.search,
      title: document.title, // Optionally send the page title
    });
  }, [location]); // The effect runs every time the location object changes

  return null; // This component does not render anything to the DOM
};

export default RouteChangeTracker;