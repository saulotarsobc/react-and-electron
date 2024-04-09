"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSqlQueries = void 0;
const promises_1 = require("fs/promises");
const path_1 = require("path");
const getSqlQueries = async (folder) => {
    try {
        const diretorios = await (0, promises_1.readdir)(folder, { withFileTypes: true });
        const migrations = [];
        for (const diretorio of diretorios) {
            if (diretorio.isDirectory()) {
                const nomeDiretorio = diretorio.name;
                const caminhoArquivoSql = (0, path_1.join)(folder, nomeDiretorio, "migration.sql");
                try {
                    const conteudoSql = await (0, promises_1.readFile)(caminhoArquivoSql, "utf-8");
                    migrations.push({ nomeDiretorio, conteudoSql });
                }
                catch (err) {
                    console.error(`Erro ao ler o arquivo 'migration.sql' no diretório '${nomeDiretorio}':`, err);
                }
            }
        }
        return migrations;
    }
    catch (err) {
        console.error('Erro ao listar diretórios na pasta "migrations":', err);
        return null;
    }
};
exports.getSqlQueries = getSqlQueries;
