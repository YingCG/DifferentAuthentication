export const msalConfig = {
  auth: {
    clientId: "ad15b1fc-7bff-4d2c-af0d-c50f932c45db",
    authority:
      "https://login.microsoftonline.com/181d82a2-39a4-4a67-ac77-14f37724e23b", // --> htpps://login.microsoftonline.com/GUID
    redirectUri: "http://localhost:3000", // --> we put our actual url here in production
  },
  cache: {
    cacheLocation: "sessionStorage", // This configures where your cache will be stored
    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
  },
  system: {
    loggerOptions: {
      loggerCallback: (level, message, containsPii) => {
        if (containsPii) {
          return;
        }
        switch (level) {
          case LogLevel.Error:
            console.error(message);
            return;
          case LogLevel.Info:
            console.info(message);
            return;
          case LogLevel.Verbose:
            console.debug(message);
            return;
          case LogLevel.Warning:
            console.warn(message);
            return;
          default:
            return;
        }
      },
    },
  },
};
