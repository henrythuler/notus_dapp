# Daily 001: Blockchain Data

**Data:** 02/10/2025  
---

## Sessão de Teste

**1. Quais são os objetivos desta sessão?**

- Estruturar PoC de um dApp para realizar os testes
- Desenvolver o client para Notus API
- Configurar variáveis de ambiente da Notus API
- Testar endpoint `/crypto/chains` (List Chains)
- Testar endpoint `/crypto/tokens` (List Tokens)

---

**2. Qual abordagem você vai usar?**

- Integrar em um PoC
- Testar através do Apollo Server

---

**3. Há algo que precisa ser configurado antes de começar?**

- Instalar as dependências (npm i)
- Configurar as variáveis de ambiente para NOTUS_API_KEY e NOTUS_BASE_URL

---

**4. Você conseguiu atingir o objetivo da sessão?**

[X] SIM

---

**5. Problemas encontrados**

De início, achei confuso o endpoint List Tokens retornar somente os tokens whitelisted, mesmo que não passemos o parâmetro projectId.

---

**6. Observações adicionais**

- O quickstart com a API é muito simples e intuitivo.