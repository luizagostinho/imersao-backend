import express from 'express';
import conectarAoBanco from './src/config/dbConfig.js';
await conectarAoBanco(process.env.STRING_CONEXAO)

const posts = [
    { descricao: "Uma foto teste", imagem: "https://placecats.com/millie/300/150", id: 1 },
    { descricao: "Gato brincando com um novelo de lã", imagem: "https://placekitten.com/400/300", id: 2 },
    { descricao: "Gato brincando com uma manga", imagem: "https://placekitten.com/400/300", id: 3 },
  ]

const app = express();
app.use(express.json());
app.listen(3000, () => {
    console.log ('Servidor escutando...');
});

app.get("/posts", (req, res) => {
    res.status(200).json(posts);
});

function buscarPostsID(id) {
    return posts.findIndex((post) => {
        return post.id === Number (id)
    })
};
app.get("/posts/:id", (req, res) => {
    const index = buscarPostsID(req.params.id)
    res.status(200).json(posts[index]);
});

