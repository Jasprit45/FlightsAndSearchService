class CrudService {
    constructor(repository) {
        this.repository = repository;
    }

    async create(data) {
        try {
            const res = await this.repository.create(data);
            return res;
            
        } catch (error) {
            console.log("Something went wrong in the crud-service layer");
            throw(error);
        }
    }
    async delete(id) {
        try {
            await this.repository.delete(id);
            return true;
        } catch (error) {
            console.log("Something went wrong in the crud-service layer");
            throw(error);
        }
    }
    async update(data,id) {
        try {
            const res = await this.repository.update(data ,id);
            return res;
            
        } catch (error) {
            console.log("Something went wrong in the crud-service layer");
            throw(error);
        }
    }
    async get(id) {
        try {
            const res = await this.repository.get(id);
            return res;
        } catch (error) {
            console.log("Something went wrong in the crud-service layer");
            throw(error);
        }
    }
    async getAll() {
        try {
            const res = await this.repository.getAll();
            return res;
        } catch (error) {
            console.log("Something went wrong in the crud-service layer");
            throw(error); 
        }
    }
}

module.exports = CrudService;