import express from 'express';
import {
  createItem,
  getAllItems,
  getItemById,
  updateItem,
  deleteItem,
} from '../controllers/item.controller.js';

const router = express.Router();

// GET /api/items - Fetch all items
router.get('/', getAllItems);

// POST /api/items - Create a new item
router.post('/', createItem);

// GET /api/items/:id - Fetch single item by ID
router.get('/:id', getItemById);

// PUT /api/items/:id - Update item by ID
router.put('/:id', updateItem);

// DELETE /api/items/:id - Delete item by ID
router.delete('/:id', deleteItem);

export default router;
