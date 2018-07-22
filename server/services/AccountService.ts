
import { AccountDAO } from "../dao/AccountDAO";
import { IAccount } from "./../models/interfaces/IAccount";
import { ProfileDAO } from "../dao/ProfileDAO";
import { ProfileReportDAO } from "../dao/ProfileReportDAO";
import { AddressDAO } from "../dao/AddressDAO";


export class AccountService {
    private accountDao: AccountDAO;
    private profileDAO: ProfileDAO;
    private profileReportDao: ProfileReportDAO;
    private addressDao: AddressDAO;


    constructor() {
        this.accountDao = new AccountDAO();
        this.profileDAO = new ProfileDAO();
        this.profileReportDao = new ProfileReportDAO();
        this.addressDao = new AddressDAO();

    }

    async entity(id: string) {
        try {
            let data: any = await this.accountDao.findById(id);
            return Promise.resolve(data);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async retrieve(reqData: any) {
        try {
            let data: any = await this.accountDao.retrieve(reqData);
            return Promise.resolve(data)
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async saveEntity(item: IAccount, isNew: boolean) {
        let addressData = await this.addressDao.save(item.profile);
        item.profile.address = addressData._id;
        let profileData = await this.profileDAO.save(item.profile);
        item.profile._id = item.profile._id ? item.profile._id : profileData._id;
        let accountData: any = await this.accountDao.save(item);
        let returnData = {
            _id: item._id ? item._id : accountData._id,
            message: "Updated Successfully"
        }
        if (isNew) {
            let profileReport: any = {
                joinDate: Date.now(),
                updatedBy: profileData.name,
                account: accountData._id,
                updatedDate: Date.now()
            }
            let profileReportData = await this.profileReportDao.save(profileReport);
            returnData = {
                _id: item._id ? item._id : accountData._id,
                message: "Saved Successfully"
            }
        }
        return returnData;

    }

    async save(item: IAccount) {
        try {
            let obj: Array<any> = await this.profileDAO.retrieve({ email: item.profile.email });
            if (item._id != null && obj.length > 0) {
                return Promise.resolve(this.saveEntity(item, false));
            } else if (item._id == null && obj.length > 0) {
                return Promise.reject({ message: 'Email already exists' });
            } else {
                item.branch = "DigitalLync";
                return Promise.resolve(this.saveEntity(item, true));
            }

        } catch (error) {
            return Promise.reject(error);
        }
    }

    async delete(id: any) {
        try {
            let data: any = (await this.accountDao.findById(id))
            data.status = false;
            console.log(data)
            let result: any = await this.accountDao.update(id, data);
            return Promise.resolve(data);
        } catch (error) {
            return Promise.reject(error);
        }
    }
}
