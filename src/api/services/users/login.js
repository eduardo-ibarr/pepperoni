/* const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy

// Como iremos verificar se o usuário está ou não 
// cadastrado no banco de dados. Temos que importar
// nossos models
const User = require("../../../models/user")
const ObjectId = require('mongoose').ObjectId

require("dotenv").config()

// Estratégia Local: Receberá o POST do Login.
// No body desta requisição, teremos o campo 'email' e 'password'
passport.use(new LocalStrategy({
        cpf: 'email',
        pass: 'password'
    },
    async function (cpf, password, done) { 

        // O Middlware verifica se o usuário existe no banco de dados
        await User.findOne({ cpf }, (err, user) => { 
            if (err) {
                return done(err)
            }

            // Se não existir, retorna false ("Não autorizado!")
            if (!user) { 
                return done(null, false, { message: "User doesn't exist" })
            }

            // Se existir, verifica se a senha informada está correta
            user.compare(password, user.senha)
                .then(match => { 

                    // Se não estiver, retorna false ("Não autorizado!")
                    if (!match) {
                        return done(null, false, { message: 'Incorrect Password' })
                    }
        
                    // Se sim, retorna as informações do usuário para que o Token seja gerado
                    return done(null, user)
                })
        })
    }
))

// Estratégia JWT: Após autenticado, o usuário deverá 
// enviar o token no Header da requisição.
const opts = { 
    jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
    secretOrKey: process.env.SECRET
}

// Aqui, o middleware irá extrair o token do Header
// e verificar se ele é válido. Se o token estiver expirado,
// ou adulterado, o middleware retorna false ("Não autorizado")
passport.use(new JwtStrategy(opts, async (payload, done) => { 
    await User.findOne({ _id: payload._id }, (err, user) => {         
        if (err) { 
            return done(err, false)
        }

        if (!user) { 
            return done(null, false)
        }

        return done(null, { id: user._id })
    })
}))


// Retornamos o middleware
module.exports = app => { 
    app.use(passport.initialize())
} */