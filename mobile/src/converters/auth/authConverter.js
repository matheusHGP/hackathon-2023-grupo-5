const toRequest = (payload) => {
    return {
        email: payload.email,
        password: payload.password,
    }
}

const toRegisterRequest = (payload) => {
    return {
        name: payload.name,
        email: payload.email,
        password: payload.password,
    }
}

const toModel = (payload) => {
    return {
        token: payload.token
    }
}

export { toRequest, toModel, toRegisterRequest }