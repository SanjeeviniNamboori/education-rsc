"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseDAO_1 = require("./../config/BaseDAO");
const Profile_1 = require("./../models/schemas/Profile");
class ProfileDAO extends BaseDAO_1.BaseDAO {
    constructor() {
        super(Profile_1.Profile);
    }
}
exports.ProfileDAO = ProfileDAO;
Object.seal(ProfileDAO);
//# sourceMappingURL=ProfileDAO.js.map