module.exports = {
    unauthorized: {
        error: true,
        code: 401,
        message: "Acesso não autorizado."
    },
    badRequest: {
        error: true,
        code: 400,
        message: "Verifique os dados informados e tente novamente."
    },
    notFound: {  
        error: true,
        code: 404,
        message: `Nenhum registro foi encontrado.`
    }
}