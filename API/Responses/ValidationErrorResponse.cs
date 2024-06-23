using FluentValidation.Results;

namespace API.Responses;

public class ValidationErrorResponse
{
    public IEnumerable<ValidationError> Errors { get; private set; }

    public ValidationErrorResponse(List<ValidationFailure> validationErrors)
    {
        Errors = validationErrors.Select(er => new ValidationError(er.PropertyName, er.AttemptedValue.ToString(), er.ErrorCode, er.ErrorMessage));
    }
}