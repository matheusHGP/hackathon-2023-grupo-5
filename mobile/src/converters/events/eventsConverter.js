const toRequest = (payload) => {
    return {
        email: payload.email,
        password: payload.password,
    }
}

const toModel = (payload) => {
    return {
        id: payload.id,
        organizationID: payload.organizationID,
        name: payload.name,
        points: payload.points,
        type: payload.type,
        reason: payload.reason,
        pixCode: payload.pixCode,
        organizationName: payload.organizationName,
        organizationCity: payload.organizationCity,
        organizationState: payload.organizationState,
        description: payload.description,
        status: Math.floor(Math.random() * 4),
        createdAt: payload.createdAt,
        updatedAt: payload.updatedAt,
    }
}

const toModels = (data) => data.map(e => toModel(e))

export { toRequest, toModel, toModels }