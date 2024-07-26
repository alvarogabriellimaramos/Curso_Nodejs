
module.exports = class Controller {
    static CreateTask(request,response) {
        return response.status(200).json({messagem: 'Sucess'})
    };
};
