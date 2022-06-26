export class MiError extends Error{
    constructor(value){
        super(value);
        this.name="MiError";

    }
}