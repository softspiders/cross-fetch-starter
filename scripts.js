const isBrowser = typeof window !== "undefined" && window.fetch;
const fetch = isBrowser ? window.fetch : require("cross-fetch");

if (!isBrowser) exports.fetch = fetch;
