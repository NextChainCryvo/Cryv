const { body, validationResult } = require('express-validator');

const regrasCadastro = [
    body('email')
        .isEmail().withMessage('Insira um e-mail válido')
        .normalizeEmail(),
    
    body('senha')
        .isLength({ min: 8 }).withMessage('A senha deve ter no mínimo 8 caracteres')
        .matches(/\d/).withMessage('A senha deve conter pelo menos um número'),

    (req, res, next) => {
        const erros = validationResult(req);
        if (!erros.isEmpty()) {
            return res.status(400).json({ erros: erros.array() });
        }
        next(); 
    }
];

module.exports = { regrasCadastro };