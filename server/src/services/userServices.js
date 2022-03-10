import DataModels from "../models/data-models";

const DataModel = DataModels.User;

/**
 * @param  {} username
 * @param  {} =>awaitDataModel.findOne({username}
 * @desc Check user from data model
 * @access private
 * @function {@link checkUser}
 */
export const checkUser = async (username) => await DataModel.findOne({ username }); // status: "Active"
