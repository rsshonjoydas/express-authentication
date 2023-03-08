import User from '../models/user.model';

/**
 * @param  {} email
 * @param  {} =>awaitDataModel.findOne({email})
 * @desc Check user from data model
 * @access private
 * @function {@link checkUser}
 */
export const checkUser = async (email: string) => await User.findOne({ email }); // status: "Active"
