
// utils/fetchConfig.js
import schoolConfig from "../data/schoolConfig";

const fetchConfig = async () => {
  // Simulate an async fetch (could be from Google Sheets or a backend)
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(schoolConfig);
    }, 500);
  });
};

export default fetchConfig;
