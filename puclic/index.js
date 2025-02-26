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


    form_animal.onsubmit = async (event) => {
        event.preventDefault()
        const nome_animal = input_nome.value
        console.log(nome_animal)
        
        
        await axios.post('http://localhost:8000/animais', {
            id: 0,
            nome: nome_animal,
            idade: 0,
            sexo: 'M',
            cor: 'color'
        })

        carregarAnimais()
        alert(`Aniaml ${nome_animal}, cadastrado com sucesso`)
    }
}



document.addEventListener('DOMContentLoaded', () => {
    console.log('App Iniciado');
    carregarAnimais();
    manipularFormulatrio();
});