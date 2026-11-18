import mongoose from 'mongoose';
import Item from '../models/item.model.js';

/**
 * @desc    Create a new item (Create)
 * @route   POST /api/items
 * @access  Public
 */
export const createItem = async (req, res) => {
  try {
    const { title, description, category, price, inStock } = req.body;

    if (!title) {
      return res.status(400).json({
        success: false,
        message: 'Please provide an item title.',
      });
    }

    const newItem = await Item.create({
      title,
      description,
      category,
      price,
      inStock,
    });

    return res.status(201).json({
      success: true,
      message: 'Item created successfully!',
      data: newItem,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Server error while creating item.',
      error: error.message,
    });
  }
};

/**
 * @desc    Get all items (Read - All)
 * @route   GET /api/items
 * @access  Public
 */
export const getAllItems = async (req, res) => {
  try {
    const items = await Item.find().sort({ createdAt: -1 });

    return res.status(200).json({
      success: true,
      count: items.length,
      data: items,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Server error while fetching items.',
      error: error.message,
    });
  }
};

/**
 * @desc    Get a single item by ID (Read - One)
 * @route   GET /api/items/:id
 * @access  Public
 */
export const getItemById = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid item ID format.',
      });
    }

    const item = await Item.findById(id);
    if (!item) {
      return res.status(404).json({
        success: false,
        message: `Item with ID ${id} not found.`,
      });
    }

    return res.status(200).json({
      success: true,
      data: item,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Server error while fetching item.',
      error: error.message,
    });
  }
};

/**
 * @desc    Update an item by ID (Update)
 * @route   PUT /api/items/:id
 * @access  Public
 */
export const updateItem = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid item ID format.',
      });
    }

    const updatedItem = await Item.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedItem) {
      return res.status(404).json({
        success: false,
        message: `Item with ID ${id} not found.`,
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Item updated successfully!',
      data: updatedItem,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Server error while updating item.',
      error: error.message,
    });
  }
};

/**
 * @desc    Delete an item by ID (Delete)
 * @route   DELETE /api/items/:id
 * @access  Public
 */
export const deleteItem = async (req, res) => {
  try {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
      return res.status(400).json({
        success: false,
        message: 'Invalid item ID format.',
      });
    }

    const deletedItem = await Item.findByIdAndDelete(id);
    if (!deletedItem) {
      return res.status(404).json({
        success: false,
        message: `Item with ID ${id} not found.`,
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Item deleted successfully!',
      data: deletedItem,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Server error while deleting item.',
      error: error.message,
    });
  }
};
