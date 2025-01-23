export const appInfo = {
    // learn more about this on https://supertokens.com/docs/session/appinfo
    appName: "book-recommendations",
    apiDomain: typeof window !== 'undefined' ? window.location.hostname : 'localhost:3000',
    websiteDomain: typeof window !== 'undefined' ? window.location.hostname : 'localhost:3000',
    apiBasePath: "api/auth",
    websiteBasePath: "/auth",
}