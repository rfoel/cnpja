# cnpja

[![npm](https://img.shields.io/npm/v/cnpja)](https://www.npmjs.com/cnpja)
[![npm bundle size](https://img.shields.io/bundlephobia/minzip/cnpja)](https://www.npmjs.com/cnpja)
[![NPM](https://img.shields.io/npm/l/cnpja)](LICENSE)
[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)

Enriqueça dados empresariais com nossa API de consultas a Receita, I.E. e Simples. Mais informações no [site oficial](https://www.cnpja.com.br/docs).

## Instalação

Para instalar o pacote rode:

```
npm install cnpja
```

ou

```
yarn add cnpja
```

## Obtenha sua Chave de API

Acesse a página [Minha Conta](https://www.cnpja.com.br/me) e copie sua Chave de API. Caso ainda não tenha confirmado seu e-mail, será necessário que o faça antes de poder visualizá-la.

```js
import { CNPJa } from 'cnpja'

const cnpja = new CNPJa('<SUA-CHAVE-DE-API>')

;(async () => {
  try {
    const data = await cnpja.companies('00000000000191')
    console.log(data)
  } catch (error) {
    console.log(error)
  }
})()
```

## Métodos disponíveis

### Consulta CNPJ

Nossa consulta ao CNPJ visa retornar dados das seguintes fontes em uma requisição unificada:

- **Receita Federal**: Informações institucionais, contato, endereço, atividades e membros.
- **Simples Nacional**: Opção pelo Simples e SIMEI.
- **SINTEGRA**: Inscrições estaduais de todas as UFs.
- **IBGE**: Código do estado e município.

O primeiro argumento da função é o número do CNPJ. A consulta de CNPJ também aceita um segundo argumento em formato de objeto com as seguintes propriedades:

#### Opções

| Parâmetro             | Descrição                                                                | Padrão |
| --------------------- | ------------------------------------------------------------------------ | ------ |
| company_max_age       | Idade máxima em dias para retornar dados da empresa do Cache             | 1      |
| simples_max_age       | Idade máxima em dias para retornar dados do Simples do Cache             |        |
| sintegra_max_age      | Idade máxima em dias para retornar dados do SINTEGRA                     |        |
| enable_cache_fallback | Habilita retorno em Cache no caso de uma requisição em Tempo Real falhar | false  |

#### Exemplo

```js
cnpja.companies('00000000000191', {
  company_max_age: 1,
  simples_max_age: 7,
  sintegra_max_age: 30,
  enable_cache_fallback: false,
})
```

### Download de Arquivos

Esse método faz o download de arquivos.

Aceita o código do arquivo como parâmetro.

#### Exemplo

```js
cnpja.files('file_token')
```

### Dados da Conta

Provê informações sobre sua conta, incluindo cadastro, plano e créditos restantes.

#### Exemplo

```js
cnpja.me()
```

### Consulta CNPJ

Retorna seu histórico de requisições dentro do intervalo de data especificado.

O fornecimento das datas é mandatório e deve obedecer o formato `YYYY-MM-DD`.

#### Opções

| Parâmetro  | Descrição                    |
| ---------- | ---------------------------- |
| start_date | Data de início do intervalo  |
| end_date   | Data de término do intervalo |

#### Exemplo

```js
cnpja.requests({
  start_date: '2020-12-01',
  end_date: '2020-12-10',
})
```

## Contribuindo

Issues e Pull Requests são bem-vindos.

## Licença

[MIT](https://github.com/rfoell/cnpja/blob/main/LICENSE)
