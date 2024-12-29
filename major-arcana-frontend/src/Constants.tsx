// This is the base URL that we'll use for all API requests. When
// making a production build, the environment variable
// REACT_APP_SERVER_URL will be defined to point to "/api"; see the
// file .env.production to change this. If it's unset, then we'll
// just use the default Jetty URL.
export const SERVER_URL:string = import.meta.env.REACT_APP_SERVER_URL || "http://localhost:4567";
