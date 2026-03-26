const express = require('express');
const { authUser, registerUser, logoutUser, refreshToken, getUsers, getUserProfile, updateUser, deleteUser } = require('../controllers/userController');
const { protect, admin } = require('../middleware/authMiddleware');

const router = express.Router();

router.post('/login', authUser);
router.post('/', registerUser);
router.post('/logout', logoutUser);
router.post('/refresh', refreshToken);
router.get('/', protect, getUsers);
router.get('/profile/:id', protect, getUserProfile);
router.route('/:id').put(protect, admin, updateUser).delete(protect, deleteUser);

module.exports = router;
