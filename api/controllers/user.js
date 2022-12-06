import User from '../models/User.js';

export const updateUser = async (req, res, next) => {
	try {
		console.log(req);
		const updatedUser = await User.findByIdAndUpdate(
			req.params.id,
			{ $set: req.body },
			{ new: true }
		);
		res.status(200).json(updatedUser);
	} catch (err) {
		next(err);
	}
};
export const deleteUser = async (req, res, next) => {
	try {
		console.log(req);
		await User.findByIdAndDelete(req.params.id);
		res.status(200).json('User has been deleted.');
	} catch (err) {
		next(err);
	}
};
export const getUser = async (req, res, next) => {
	try {
		console.log(req);
		const user = await User.findById(req.params.id);
		res.status(200).json(user);
	} catch (err) {
		next(err);
	}
};
export const getUsers = async (req, res, next) => {
	try {
		console.log(req);
		const users = await User.find();
		console.log('user sended from api are', users);
		res.status(200).json(users);
	} catch (err) {
		next(err);
	}
};
