class ApiResponse{
    statusCode:number;
    message:string;
    data:any;
    success:boolean= true;

    constructor(statusCode:number, message:string, data:any, success:boolean){
        this.statusCode = statusCode
        this.data = data;
        this.message = message
        this.success = success
    }
}

export {ApiResponse}