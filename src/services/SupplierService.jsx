import instance from "../config/axiosConfig";

export async function registerEstablishment({ nome, endereco, preco, descricao }) {
    try {
        const c = JSON.parse(localStorage.getItem("key"));
        const result = await instance.post("/establishment/add", {
            nome,
            endereco,
            preco,
            descricao,
            ownerId: c.id
        });
        return result.status === 200 ? result.data : false;
    } catch (e) {
        console.error(e.response?.data?.message || "Erro ao adicionar estabelecimento");
        return false;
    }
}
