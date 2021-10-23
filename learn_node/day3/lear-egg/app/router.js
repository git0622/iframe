module.exports = (app) => {
  let { router, controller } = app;
  router.post('/list', controller.home.list)
  router.get('/list2', controller.home.list2)
}