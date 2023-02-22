const allRouters = {
    web3Router: require('./web3Routes'),
};

const initializeApplicationRoutes = (app) => {
    initializeResponseHeaderMiddleware(app);

    for (const property in allRouters) {
        app.use(allRouters[property].basePrefix, allRouters[property].router);
    }
};

const initializeResponseHeaderMiddleware = (app) => {
    app.use((req, res, next) => {
        res.header("Access-Control-Allow-Headers", "x-access-token, Origin, Content-Type, Accept");
        next();
    });
};

module.exports = {
    initializeApplicationRoutes
};