const cart = ["shoes", "Shirts", "Jeans"];

api.createOrder(cart, () => {
  api.proceedPayment(() => {
    api.showOrder(() => {
      api.updateWallet();
    });
  });
});

// This structure is also known as Pyramid of Doom.

console.log();
