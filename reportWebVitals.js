// src/reportWebVitals.js

const reportWebVitals = (onPerfEntry) => {
  if (onPerfEntry && typeof onPerfEntry === 'function') {
    import('web-vitals').then(({ getCLS, getFID, getFCP, getLCP, getTTFB }) => {
      if (getCLS && getFID && getFCP && getLCP && getTTFB) {
        getCLS(onPerfEntry);
        getFID(onPerfEntry);
        getFCP(onPerfEntry);
        getLCP(onPerfEntry);
        getTTFB(onPerfEntry);
      } else {
        console.error("Error: Some web-vitals functions are missing.");
      }
    }).catch((error) => {
      console.error("Error loading web-vitals:", error);
    });
  }
};

export default reportWebVitals;
