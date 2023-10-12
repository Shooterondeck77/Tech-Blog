const withAuth = (req, res, next) => {
    if (!req.session.user_id) {
      console.log("USER IS NOT LOGGED IN!!")
      res.redirect('/login');
    } else {
      next();
    }
  };
  
  module.exports = withAuth;


  