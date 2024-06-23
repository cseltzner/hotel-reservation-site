namespace API.Responses;

public class ValidationError(string propertyName, string? attemptedValue, string errorCode, string errorMessage)
{
    public string ErrorType { get; private set; } = "validation";
    public string PropertyName { get; private set; } = propertyName;
    public string? AttemptedValue { get; set; } = attemptedValue;
    public string ErrorCode { get; private set; } = errorCode;
    public string ErrorMessage { get; private set; } = errorMessage;
}