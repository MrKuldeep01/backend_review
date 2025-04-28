class ApiError extends Error{
    constructor(statusCode, message, errors= []){
        super(message)
        this.statusCode = statusCode;
        this.message = message;
        this.success = false;
        this.data = null;
        this.errors = errors;
    }
}


export default ApiError;