import Cart from "../models/Cart.js";

// Get user's cart
export const getCart = async (req, res) => {
  try {
    let cart = await Cart.findOne({ userId: req.userId }).populate("items.productId");
    
    if (!cart) {
      cart = await Cart.create({ userId: req.userId, items: [] });
    }

    res.status(200).json(cart);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch cart", error: error.message });
  }
};

// Add or update items in cart
export const saveCart = async (req, res) => {
  try {
    const { items } = req.body; // Expects an array of { productId, quantity }

    let cart = await Cart.findOne({ userId: req.userId });

    if (!cart) {
      cart = await Cart.create({ userId: req.userId, items });
    } else {
      cart.items = items;
      await cart.save();
    }

    const updatedCart = await Cart.findOne({ userId: req.userId }).populate("items.productId");
    res.status(200).json(updatedCart);
  } catch (error) {
    res.status(500).json({ message: "Failed to save cart", error: error.message });
  }
};

// Clear cart
export const clearCart = async (req, res) => {
  try {
    const cart = await Cart.findOneAndUpdate(
      { userId: req.userId },
      { items: [] },
      { new: true }
    );
    res.status(200).json({ message: "Cart cleared successfully", cart });
  } catch (error) {
    res.status(500).json({ message: "Failed to clear cart", error: error.message });
  }
};