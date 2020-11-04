class Fila {
    constructor(dao) {
        this.dao = dao
    }

    create() {
        const sql =
        `CREATE TABLE IF NOT EXISTS fila (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name Text,
            game Text)`
        return this.dao.run(sql)
    }

    insert(name, game) {
        return this.dao.run(
            `INSERT INTO fila (name, game)
                VALUES (?, ?)`,
                [name, game]
        )
    }

    update(fila) {
        const { id, name, game } = fila
        return this.dao.run(
            `UPDATE fila SET name = ? WHERE id = ?`,
            [name, id]
        )
    }

    delete(id) {
        return this.dao.run(
            `DELETE FROM fila WHERE id = ?`,
            [id]
        )
    }

    // deleta o primeiro da fila por jogo
    deleteByGame(game) {
        return this.dao.run(
            `DELETE FROM fila
            WHERE id = 
                (SELECT id FROM fila
                WHERE game = ?
                ORDER BY id ASC
                LIMIT 1)`,
            [game]
        )
    }

    getById(id) {
        return this.dao.get(
            `SELECT * FROM fila WHERE id = ?`,
            [id]
        )
    }

    // retorna o próximo jogador da fila por jogo
    getNextByGame(game) {
        return this.dao.get(
            `SELECT name FROM fila
            WHERE game = ?
            ORDER BY id ASC
            LIMIT 1`,
            [game]
        )
    }

    // retorna o numero de jogadores na fila por jogo
    getSizeByGame(game) {
        return this.dao.get(
            `SELECT COUNT(*) AS playersCount
            FROM fila
            WHERE game = ?`,
            [game]
        )
    }

    getAll() {
        return this.dao.all(`SELECT * FROM fila`)
    }
}

module.exports = Fila;