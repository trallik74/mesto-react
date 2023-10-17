import { useEffect, useState, useCallback } from "react";

export default function useValidation({ value, validator }) {
  const [isValid, setIsValid] = useState(false);
  const [isInputReseted, setIsInputReseted] = useState(true);
  const [errorMesage, setErrorMesage] = useState("");
  const [isEmpty, setIsEmpty] = useState(true);
  const [isMinLengthError, setIsMinLengthError] = useState(false);
  const [isMaxLengthError, setIsMaxLengthError] = useState(false);
  const [isUrlError, setIsUrlError] = useState(false)
  const urlRegex =
    /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})/gi;

  const checkIsEmpty = useCallback(() => {
    if (value.length === 0 && validator.required) {
      setIsEmpty(true);
      setErrorMesage("Это поле обязательно для заполнения");
    } else {
      setIsEmpty(false);
    }
  }, [value, validator]);

  const checkMinLength = useCallback(() => {
    if (value.length > 0 && value.length < validator.minLength) {
      setIsMaxLengthError(true);
      setErrorMesage(
        `Минимальное количество символов: ${validator.minLength}. Сейчас: ${value.length}.`
      );
    } else {
      setIsMaxLengthError(false);
    }
  }, [value, validator]);

  const checkMaxLength = useCallback(() => {
    if (value.length > validator.maxLength) {
      setIsMinLengthError(true);
      setErrorMesage(
        `Максимальное количество символов: ${validator.maxLength}. Сейчас: ${value.length}.`
      );
    } else {
      setIsMinLengthError(false);
    }
  }, [value, validator]);

  const checkUrl = useCallback(() => {
    if (value.length !== 0 && !value.match(urlRegex)) {
      setIsUrlError(true)
      setErrorMesage("Введите валидный url-адрес");
    } else {
      setIsUrlError(false)
    }
  }, [value]);

  useEffect(() => {
    if (validator.type === "text") {
      checkIsEmpty();
      checkMinLength();
      checkMaxLength();

      if (isEmpty || isMinLengthError || isMaxLengthError) {
        setIsValid(false);
      } else {
        setIsValid(true);
        setErrorMesage("");
      }
    }

    if (validator.type === "url") {
      checkIsEmpty()
      checkUrl();

      if (isEmpty || isUrlError) {
        setIsValid(false);
      } else {
        setIsValid(true);
        setErrorMesage("");
      }
    }
  }, [
    checkIsEmpty,
    checkMinLength,
    checkMaxLength,
    checkUrl,
    isEmpty,
    isMinLengthError,
    isMaxLengthError,
    urlRegex,
    isUrlError,
    validator,
    value,
  ]);

  return {
    isValid,
    errorMesage,
    isInputReseted,
    setIsInputReseted,
  };
}
