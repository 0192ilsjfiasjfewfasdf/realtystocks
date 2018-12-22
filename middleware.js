import routes from "./routes";

export const localsMiddleare = (req, res, next) => {
    res.locals.siteName = "Realty Stocks by Nicole Son";
    res.locals.routes = routes;
    res.locals.user = {
        isAuthenticated: true,
        id: 1
    };
    next();
};