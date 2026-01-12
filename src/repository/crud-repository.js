class CrudRepository{
    constructor(model) {
        this.model = model;
    }

    async create(data) {
        try {
            const res = await this.model.create(data);
            return res;
        } catch (error) {
            console.log("Something went wrong in crud-repository");
            throw(error);
        }
    }
    async destroy(modelId) {
        try {
            await this.model.destroy({
                where: {
                    id: modelId
                }
                });
            return true;
        } catch (error) {
            console.log("Something went wrong in crud-repository");
            throw(error);
        }
    }
    async get(modelId) {
        try {
            const res = await this.model.findByPk(modelId);
            return res;
        } catch (error) {
            console.log("Something went wrong in crud-repository");
            throw(error);
        }
    }
    async getAll() {
        try {
            const res = await this.model.findAll();
            return res;
        } catch (error) {
            console.log("Something went wrong in crud-repository");
            throw(error);
        }
    }
    async update(data , modelId) {
        try {
            const res = await this.model.update(data,{
                where : {
                    id: modelId,
                }
            });
            return res;
        } catch (error) {
            console.log("Something went wrong in crud-repository");
            throw(error);
        }
    }


}

module.exports = CrudRepository;