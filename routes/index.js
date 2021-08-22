var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Person Test' });
});
router.get('/:param1/:param2?/:param3?/:param4?', function (req, res, next) {
  res.render('index', {
    title: `/${req.params.param1}/${
      req.params?.param2 ? req.params?.param2 + '/' : ''
    } ${req.params?.param3 ? req.params?.param3 + '/' : ''} ${
      req.params?.param4 ? req.params?.param4 + '/' : ''
    }`,
  });
});

// router.get('/tv-por-assinatura', function (req, res, next) {
//   res.render('index', { title: 'tv-por-assinatura' });
// });
// router.get('/now', function (req, res, next) {
//   res.render('index', { title: 'now' });
// });
// router.get('/tv-por-assinatura/programacao', function (req, res, next) {
//   res.render('index', { title: 'tv-por-assinatura/programacao' });
// });
// router.get('/checkout/dados-pessoais', function (req, res, next) {
//   res.render('index', { title: 'checkout/dados-pessoais' });
// });
// /* GET login page. */
// router.get('/login', function (req, res, next) {
//   res.render('index', { title: 'Tela de login' });
// });
// /* GET login page. */
// router.get('/teste123', function (req, res, next) {
//   res.render('index', { title: 'Tela not send dcm now online' });
// });
// /* GET login page. */
// router.get('/teste', function (req, res, next) {
//   res.render('index', { title: 'Tela not send dcm now online' });
// });

module.exports = router;
