class Fila {
    constructor(dao) {
        this.dao = dao
    }

    createTable() {
        const sql =
        `CREATE TABLE IF NOT EXISTS fila (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name Text,
            game Text,
            branch Text)`
        return this.dao.run(sql)
    }

    resetTable() {
        return this.dao.run(`DELETE FROM fila`)
    }

    insert(name, game, branch) {
        return this.dao.run(
            `INSERT INTO fila (name, game, branch)
                VALUES (?, ?, ?)`,
                [name, game, branch]
        )
    }

    update(fila) {
        const { id, name, game, branch } = fila
        return this.dao.run(
            `UPDATE fila SET name = ?
            WHERE id = ?
            AND branch = ?`,
            [name, id, branch]
        )
    }

    delete(id) {
        return this.dao.run(
            `DELETE FROM fila
            WHERE id = ?`,
            [id]
        )
    }

    // deleta o primeiro da fila por jogo
    deleteByGame(game, branch) {
        return this.dao.run(
            `DELETE FROM fila
            WHERE id = 
                (SELECT id FROM fila
                WHERE game = ?
                AND branch = ?
                ORDER BY id ASC
                LIMIT 1)`,
            [game, branch]
        )
    }

    getById(id) {
        return this.dao.get(
            `SELECT * FROM fila WHERE id = ?`,
            [id]
        )
    }

    // retorna os nomes de todos os jogadores na fila por jogo
    getNamesByGame(game, branch) {
        return this.dao.all(
            `SELECT name
            FROM fila
            WHERE game = ?
            AND branch = ?
            ORDER BY id ASC`,
            [game, branch]
        )
    }

    // retorna o próximo jogador da fila por jogo
    getNextByGame(game, branch) {
        return this.dao.get(
            `SELECT name FROM fila
            WHERE game = ?
            AND branch = ?
            ORDER BY id ASC
            LIMIT 1`,
            [game, branch]
        )
    }

    // retorna o numero de jogadores na fila por jogo
    getSizeByGame(game, branch) {
        return this.dao.get(
            `SELECT COUNT(*) AS playersCount
            FROM fila
            WHERE game = ?
            AND branch = ?`,
            [game, branch]
        )
    }

    getAll() {
        return this.dao.all(`SELECT * FROM fila`)
    }

    getallByBranch(branch) {
        return this.dao.all(
            `SELECT * FROM fila
            WHERE branch = ?`,
            [branch]
        )
    }
}

module.exports = Fila;