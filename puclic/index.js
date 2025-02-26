async function carregarAnimais(){
    const response = await axios.get('http://localhost:8000/animais')
    
    const animais = response.data

    const lista = document.getElementById('lista-animais')
    
    lista.innerHTML = ''

    animais.forEach(animal => {
        const item = document.createElement('li')
        
        const linha = `${animal.nome} - Idade: ${animal.idade} - Sexo: ${animal.sexo} - COR: ${animal.cor} - ID: ${animal.id}`

        item.innerText = linha           

        lista.appendChild(item)
    });
}


function manipularFormulatrio(){
    const form_animal = document.getElementById('form-animal')
    const input_nome = document.getElementById('nome')
    const input_idade = document.getElementById('idade')
    const input_sexo = document.getElementById('sexo')
    const input_cor = document.getElementById('cor')



    form_animal.onsubmit = async (event) => {
        event.preventDefault()
        const nome_animal = input_nome.value
        const idade_animal = input_idade.value
        const sexo_animal = input_sexo.value
        const cor_animal = input_cor.value
        
        
        await axios.post('http://localhost:8000/animais', {
            id: 0,
            nome: nome_animal,
            idade: idade_animal,
            sexo:  sexo_animal,
            cor: cor_animal
        })

        carregarAnimais()
        alert(`Aniaml ${nome_animal}, cadastrado com sucesso`)
    }
}


function deletarAnimal(){
    const form_animaldelete = document.getElementById('form-animaldelete')
    const id_delete = document.getElementById('id-delete')

    form_animaldelete.onsubmit = async (event) => {
        event.preventDefault()
        const id_animaldelete = id_delete.value
        console.log(id_animaldelete)

    await axios.delete(`http://localhost:8000/animais/${id_animaldelete}`)
    carregarAnimais()
    alert(`Aniaml ${id_animaldelete}, deletado com sucesso`)
    }
}


document.addEventListener('DOMContentLoaded', () => {
    console.log('App Iniciado');
    carregarAnimais();
    manipularFormulatrio();
    deletarAnimal();
});