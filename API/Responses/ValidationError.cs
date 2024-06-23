namespace API.Responses;

public class ValidationError(string propertyName, string errorCode, string errorMessage)
{
    public string ErrorType { get; private set; } = "validation";
    public string PropertyName { get; private set; } = propertyName;
    public string ErrorCode { get; private set; } = errorCode;
    public string ErrorMessage { get; private set; } = errorMessage;
}