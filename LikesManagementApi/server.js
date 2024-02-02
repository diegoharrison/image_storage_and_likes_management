const express = require('express');
const jwt = require('jsonwebtoken');

const app = express();
const PORT = 3001;

// Simula um banco de dados de contagens de curtidas
let likes = {};

// Middleware para autenticação JWT
const authenticateJWT = (req, res, next) => {
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ error: 'Token não fornecido' });
    }

    jwt.verify(token, 'upikrules', (err, user) => {
        if (err) {
            return res.status(403).json({ error: 'Token inválido' });
        }
        req.user = user;
        next();
    });
};

// Endpoint para obter a contagem de curtidas para uma imagem específica
app.get('/api/likes/:imageId', authenticateJWT, (req, res) => {
    const imageId = req.params.imageId;
    const likesCount = likes[imageId] || 0;
    res.json({ likes: likesCount });
});

// Endpoint para adicionar uma curtida a uma imagem
app.post('/api/likes/:imageId', authenticateJWT, (req, res) => {
    const imageId = req.params.imageId;
    likes[imageId] = (likes[imageId] || 0) + 1;
    res.json({ success: true });
});

app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
});

module.exports = app; // Para testes unitários
