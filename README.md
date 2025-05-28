# Projeto Pets 🐾

## Funcionalidades

O sistema implementa as seguintes funções:

- **geradorDeTagsDeIdentificacao(nome)**  
  Retorna o nome do pet em letras maiúsculas para uso em tags de identificação.

- **verificarSePodeSerAdotado(idade, porte)**  
  Verifica se um pet está apto para adoção com base na idade e porte.

- **calcularConsumoDeRacao(nome, idade, peso)**  
  Calcula o consumo diário de ração com base no peso (300g por kg).

- **decidirTipoDeAtividadePorPorte(porte)**  
  Retorna a atividade ideal para o pet com base em seu porte (pequeno, médio ou grande).

- **buscarDadoAsync()**  
  Simula uma chamada assíncrona que retorna dados após um tempo.

## Como rodar o projeto

### 1. Pré-requisitos

Certifique-se de ter o **Node.js** instalado. Para verificar:

```bash
node -v
npm -v
```

Se não estiver instalado, baixe em: https://nodejs.org

> ⚠️ Após instalar o Node.js, reinicie seu terminal.  
> No PowerShell, talvez você precise liberar execução de scripts com:
> ```powershell
> Set-ExecutionPolicy -Scope CurrentUser -ExecutionPolicy RemoteSigned
> ```

### 2. Instale as dependências

Este projeto não possui dependências externas, mas é necessário inicializar o `package.json`:

```bash
npm init -y
```

### 3. Execute os testes

Este projeto utiliza o framework **Mocha** com o módulo nativo `assert`.  
Para executar os testes, use o comando abaixo:

```bash
npm test
```

Você verá uma saída indicando se os testes passaram ou falharam.

## 📁 Estrutura do Projeto

```
projeto-pets/
├── trabalho.js                # Arquivo com as funções principais
├── test/
│   └── trabalho-final.js      # Arquivo com os testes
├── package.json
└── README.md
```

## ✍️ Autor

Beatriz — desenvolvido como trabalho de conclusão da disciplina Programação para Automação de Testes
