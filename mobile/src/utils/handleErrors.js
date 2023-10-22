// import { statusEnum } from './enum';

export const handleErrors = (error) => {
  let response = {
    success: false,
    message: 'Sistema indisponível no momento. Tente novamente mais tarde.',
    isAuth: true
  };

  if (error?.response?.status === 401) {
    // if (error?.response?.status === "") {
    //   // localStorage.removeItem('TOKEN');
    //   // window.location.href = '/login';
    //   return;
    response.isAuth = false
  }

  if (error?.response?.data?.messages) {
    response.message = error.response.data.messages[0];
  }

  return response;
};
