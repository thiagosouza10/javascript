describe('Treinamento de Javascript', () => {

    it('Deve somar 3 números: 1, 2 e 3', () => {

    })

    it('Deve subtrair 2 números: 1, 2', () => {

    })

    it('Deve multiplicar 3 números: 1, 2, 50', () => {

    })

    it('Deve dividir 2 números: 50, 2', () => {

    })

    it('Exibir dado array _animais no console', () => {
        let _animais = ['cão', 'gato', 'pássaro']
    })

    it('Exibir dado objeto _pessoa no console', () => {
        let _pessoa = {
            nome: 'Antônio',
            sobrenome: 'Souza',
            cpf: '123456789-11'
        }
    })

    it('Criar função para retornar o nome dentro do objeto _pessoa', () => {
        let _pessoa = {
            nome: 'Antônio',
            sobrenome: 'Souza',
            cpf: '123456789-11'
        }
    })

    it('Corrigir este teste 1', () => {
        let _pessoa = {
            nome: 'Antônio',
            sobrenome: 'Souza',
            cpf: '123456789-11'
        }
        expect(_pessoa).toEqual({
            nome: 'Antônia',
            sobrenome: 'Souza',
            cpf: 123455
        })
    })

    it('Corrigir este teste 2', () => {
        let _numero = 1.0
        expect(_pessoa).toStrictEqual(1)
    })

    it('Criar função para retornar a média entre dois números', () => {
        let numero1, numero2
    })

    it('Criar um if que verifica se a nota é maior que 5 está aprovado, caso contrário, reprovado', () => {
        let _nota = 7
    })

    it('Criar um if que verifica se a nota é maior que 5 e presença é maior ou igual que 70% está aprovado, caso contrário, reprovado', () => {
        let _nota = 7, _presenca = 0.7
    })

    it('Criar um switch para verificar as faixas de idade para votar (0, 16 -> não pode, de 16 à 18 -> facultativo, 18+ -> obrigatório)', () => {
        let _idade
    })

    it('Criar um if que faça uso de uma variável booleana para verificar se a luz está acesa', () => {
        let _aceso
    })
    
    it('Deve conter "Lorem Ipsum is simply" na string', () => {
        let _textoAValidar = "Lorem Ipsum is simply"
        let _textoASerValidado = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
    })
})