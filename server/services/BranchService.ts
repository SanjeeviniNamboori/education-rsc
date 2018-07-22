
import { BranchDAO } from "../dao/BranchDAO";
import { IBranch } from "./../models/interfaces/IBranch";
import {AddressDAO } from "../dao/AddressDAO";

export class BranchService {
    private branchDao: BranchDAO;
    private addressDao: AddressDAO;

    constructor() {
        this.branchDao = new BranchDAO();
        this.addressDao = new AddressDAO();
    }
    async entity(id: string) {
        try {
            let data: any = await this.branchDao.findById(id);
            return Promise.resolve(data);
        } catch (error) {
            return Promise.reject(error);
        }
    }
    async retrieve(reqData: any) {
        try {
            let data: any = await this.branchDao.retrieve(reqData);
            return Promise.resolve(data)
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async save(item: IBranch) {
        try {
            let obj: Array<any> = await this.branchDao.retrieve({ name: item.name });
            if (item._id != null && obj.length > 0) {
                let addressData = await this.addressDao.save(item.address);
                item.address._id = item.address._id ? item.address._id : addressData._id;
                let branchData: any = await this.branchDao.save(item);
                let returnData = {
                    _id: item._id ? item._id : branchData._id,
                    message: "Updated Successfully"
                }
                return Promise.resolve(returnData);

            } else if (item._id == null && obj.length > 0) {
                return Promise.reject({ message: 'Branch already exists' });
            } else {
                let addressData = await this.addressDao.save(item.address);
                item.address._id = item.address._id ? item.address._id : addressData._id;
                let branchData: any = await this.branchDao.save(item);
                let returnData = {
                    _id: item._id ? item._id : branchData._id,
                    message: "Saved Successfully"
                }
                return Promise.resolve(returnData);
            }

        } catch (error) {
            return Promise.reject(error);
        }
    }

    // async delete(id: any) {
    //     try {
    //         let data: any = (await this.BranchDAO.findById(id))
    //         data.status = false;
    //         console.log(data)
    //         let result: any = await this.BranchDAO.update(id, data);
    //         return Promise.resolve(data);
    //     } catch (error) {
    //         return Promise.reject(error);
    //     }
    // }
}
