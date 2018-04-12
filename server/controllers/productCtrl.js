const getProducts = (req, res) => {
  req.app
    .get("db")
    .getProducts()
    .then(response => res.status(200).json(response))
    .catch(err => res.status(500).json(err));
};

const getCart = (req, res) => {
  req.app
    .get("db")
    .getCart(req.user.id)
    .then(response => {
      console.log(response);
      res.status(200).json(response);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
};

const addToCart = (req, res) => {
  req.app
    .get("db")
    .addToCart([req.user.id, req.params.id])
    .then(response => getCart(req, res))
    .catch(err => res.status(500).json(err));
};

const deleteFromCart = (req, res) => {
  console.log("HIT");
  console.log(req.user);
  console.log(req.params.id);
  req.app
    .get("db")
    .deleteFromCart([req.params.id, req.user.id])
    .then(response => getCart(req, res))
    .catch(err => res.status(500).json(err));
};

module.exports = {
  getProducts,
  getCart,
  addToCart,
  deleteFromCart
};
