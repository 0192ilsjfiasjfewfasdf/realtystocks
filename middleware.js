import routes from "./routes";

export const localsMiddleare = (req, res, next) => {
    res.locals.siteName = "Realty Stocks";
    res.locals.routes = routes;
    next();
};