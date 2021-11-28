class Tabelas {
    init(conexao) {
        this.conexao = conexao

        this.criarTableUsuarios()
        this.criarTableDynatrace()

    }

    criarTableUsuarios() {
        const sql = 'CREATE TABLE IF NOT EXISTS usuarios (id_usuarios VARCHAR(25) NOT NULL, name_usuarios VARCHAR(50) NOT NULL, pwd_usuarios VARCHAR(50) NOT NULL, PRIMARY KEY (id_usuarios))'

        this.conexao.query(sql, erro => {
            if(erro) {
                console.log(erro)
            } else {
                console.log('Tabela Usuarios criada com sucesso')
            }
        })
    }

    criarTableDynatrace() {

    }


}

module.exports = new Tabelas