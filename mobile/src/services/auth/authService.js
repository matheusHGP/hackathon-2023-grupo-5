import { get, create } from '../baseService';
import { toRequest, toModel, toRegisterRequest } from '../../converters/auth/authConverter'

export const login = async (payload) => {
  const response = await create('/users/auth', toRequest(payload))
  if (response.success) {
    return {
      data: toModel(response.data),
      success: true
    }
  }

  return response
};

export const register = async (payload) => {
  const response = await create('/users/create', toRegisterRequest(payload))
  if (response.success) {
    return {
      success: true
    }
  }

  return response
};

export const validateAuth = async () => {
  // return true
  return await get('/user/auth/validate')
}

export const allowShareAccountData = async () => {
  return await create('/user/client/share-bank-account-data')
}
