# Daily 002: Smart Wallet (1/2)

**Data:** 03/10/2025  
---

## Sessão de Teste

**1. Quais são os objetivos desta sessão?**

- Testar endpoint `/wallets/address` (Get Smart Wallet)
- Testar endpoint `/wallets` (Get Smart Wallet By Project)
- Testar endpoint `/wallets/register` (Register Smart Wallet)

---

**2. Qual abordagem você vai usar?**

- Integrar em um PoC
- Testar através do Apollo Server
- Testar através do Postman

---

**3. Há algo que precisa ser configurado antes de começar?**

- Não

---

**4. Você conseguiu atingir o objetivo da sessão?**

[X] SIM

---

**5. Problemas encontrados**

Encontrei um problema no endpoint `/wallets/address`, onde mesmo passando o parâmetro eip7702 com o valor false, ele considerava o valor do salt e retornava a mensagem: "Salt has no effect on EIP7702 wallets as the address is the EOA itself. Remove salt if you want to use EIP7702.". O workaround foi remover o parâmetro eip7702 dos query params, assim o endpoint retornou a resposta esperada.

---

**6. Observações adicionais**

- Fora o problema encontrado, o processo de register wallet e para recuperá-las foi bem simples.
