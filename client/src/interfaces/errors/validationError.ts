export interface ValidationError {
    errors: {
       errorType: string;
       propertyName: string;
       attemptedValue: string;
       errorCode: string;
       errorMessage: string;
    }[]
}