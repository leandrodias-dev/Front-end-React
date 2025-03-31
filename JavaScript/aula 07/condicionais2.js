const permissoes = 'aluno'

switch (permissoes) {
  case 'aluno':
    console.log('Você só pode visualizar as aulas.')
    break
  case 'professor':
    console.log('Voce pode alterar as aulas e adicionar exercicios')
    break
  case 'admin':
    console.log('Voce pode fazer oque quiser no sistema!')
    break
  default:
    console.log('Não sei quem você é o sistema')
}
