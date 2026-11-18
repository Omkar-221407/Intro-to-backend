import express from 'express';
import {
  registerUser,
  loginUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
} from '../controllers/user.controller.js';

const router = express.Router();

/**
 * Authentication Routes
 */
router.post('/register', registerUser);
router.post('/login', loginUser);

/**
 * User CRUD Routes
 */
// GET /api/users - Fetch all users
router.get('/', getAllUsers);

// GET /api/users/:id - Fetch single user by ID
router.get('/:id', getUserById);

// PUT /api/users/:id - Update user by ID
router.put('/:id', updateUser);

// DELETE /api/users/:id - Delete user by ID
router.delete('/:id', deleteUser);

export default router;
