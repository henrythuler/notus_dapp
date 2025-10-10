# Daily 003: Smart Wallet / Transaction (2/2)

**Data:** 06/10/2025  
---

## Sessão de Teste

**1. Quais são os objetivos desta sessão?**

- Testar endpoint `/wallets/{walletAddress}/portfolio` (Get Smart Wallet Portfolio)
- Testar endpoint `/wallets/{walletAddress}/history` (Get Smart Wallet History)
- Testar endpoint `/wallets/{walletAddress}/history` (Get Smart Wallet History)
- Testar endpoint `/wallets/{walletAddress}/deposit` (Create Deposit Transaction)
- Testar endpoint `/wallets/{walletId}/metadata` (Update Wallet Metadata)
- Testar endpoint `/wallets/transactions/{transactionId}/metadata` (Update Transaction Metadata)

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

Achei difícil testar o endpoint `/wallets/address` para EIP7702, não está fácil de localizar na doc os factories para esse padrão. Acredito que poderia ser colocado um link na página do API Reference referente a esse endpoint (https://docs.notus.team/docs/api-reference/smart-wallets/GetAccountAbstractionAddressController_handle_v1), direcionando para a página da doc que trata do assunto.

---

**6. Observações adicionais**
