export default function errorHandler(error) {
  const errorMap = {
    'Error: 400': 'Ошибка 400: Допущена синтаксическая ошибка.',
    'Error: 401': 'Ошибка 401: Пользователь не авторизован.',
    'Error: 403': 'Ошибка 403: У вас недостаточно прав пользователя.',
    'Error: 404': 'Ошибка 404: Запрошенный ресурс не существует.',
    'Error: 500': 'Ошибка 500: На сервере произошла ошибка.',
  }

  function getErrorMessage(err) {
    console.log(err);
    return errorMap[err] || "что-то пошло не так...";
  }

  return getErrorMessage(error);
}
