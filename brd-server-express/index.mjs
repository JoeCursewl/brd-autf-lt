import express from "express";
import mysql from "mysql";
import cors from "cors";


const app = express();
app.use(cors());
app.use(express.json());


const brd_db = mysql.createConnection({
    host: "adress",
    user: "user",
    password: "",
    database: "database_name"
});

const bd_port = 3001;


app.post("/register", (req, res) => {
    const nom_song = req.body.nom_song;
    const nom_comp = req.body.nom_comp;
    const nom_genero = req.body.nom_genero;
    const nom_prod = req.body.nom_prod;

    brd_db.query('INSERT INTO songs_reg_all(nom_song, nom_comp, nom_genero, nom_prod) VALUES(?, ?, ?, ?)', [nom_song, nom_comp, nom_genero, nom_prod], (error, result) => {
        if (error) {
            console.log(`BRD | Ha ocurrido un error al insertar en la db ${error}`);
            res.status(500).send("BRD | Error al registrar los datos");
        } else {
            console.log("BRD | Los datos han sido registrados con éxito");
            res.status(200).send("BRD | Registrado con éxito");
        }
    });
});

app.get("/songs-all", (req, res) => {

    brd_db.query('SELECT * FROM songs_reg_all', (error, result) => {
        if (error) {
            console.log(`BRD | Ha ocurrido un error al insertar en la db ${error}`);
            res.status(500).send("BRD | Error al consultar los datos");
        } else {
            console.log("BRD | Los datos han sido registrados con éxito");
            res.status(200).send(result);
        }
    });
});


app.put("/update", (req, res) => {
    const id_song = req.body.id_song;
    const nom_song = req.body.nom_song;
    const nom_comp = req.body.nom_comp;
    const nom_genero = req.body.nom_genero;
    const nom_prod = req.body.nom_prod;

    brd_db.query('UPDATE songs_reg_all SET nom_song = ?, nom_comp = ?, nom_genero = ?, nom_prod = ? WHERE id_song = ?', [nom_song, nom_comp, nom_genero, nom_prod, id_song], (error, result) => {
        if (error) {
            console.log(`BRD | Ha ocurrido un error al actualizar en la db ${error}`);
            res.status(500).send("BRD | Error al consultar los datos");
        } else {
            console.log("BRD | Los datos han sido actualizados con éxito");
            res.status(200).send(result);
        }
    });
});

app.delete("/delete/:id", (req, res) => {
    const id_song = req.params.id;

    brd_db.query('DELETE FROM songs_reg_all WHERE id_song = ?', id_song, (error, result) => {
        if (error) {
            console.log(`BRD | Ha ocurrido un error al eliminar en la db ${error}`);
            res.status(500).send("BRD | Error al consultar los datos");
        } else {
            console.log("BRD | Eliminado con éxito.");
            res.status(200).send(result);
        }
    });
});

app.get("/songs/:nom_song",  (req, res) => {
    const nom_song = req.params.nom_song;

    brd_db.query('SELECT * FROM songs_reg_all WHERE nom_song = ?', [nom_song], (error, result) => {
        if(error) {
            console.log(`BRD | Ha habido un error en la db ${error}`)
            res.status(500).send("Error: status code 500")
        }
        else {
            res.status(200).send(result);
        }
    });
});





app.listen(bd_port, () => {
    console.log(`BRD | Server running at port ${bd_port}`)
});
