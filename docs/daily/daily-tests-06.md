# Daily 005: Crypto Operations (Swap & Transfer)

**Data:** 08/10/2025  
---

## Sessão de Teste

**1. Quais são os objetivos desta sessão?**

- Testar endpoint `/crypto/swap` (Create Swap)
- Testar endpoint `/crypto/transfer` (Create Fiat Deposit Order)

---

**2. Qual abordagem você vai usar?**

- Integrar em um PoC
- Testar através do Apollo Server
- Testar através do Postman
- Testar na página de API Reference

---

**3. Há algo que precisa ser configurado antes de começar?**

- Wallets registradas

---

**4. Você conseguiu atingir o objetivo da sessão?**

[X] SIM

---

**5. Problemas encontrados**

Ao testar o endpoint `/crypto/swap` pela página Create Swap da API Reference, os parâmetros opcionais (slippage e routeProfile) estão sendo passados, por padrão, como null no corpo da requisição. Assim, a resposta retorna um erro nos orientando a preenchermos esses valores conforme o esperado.

---

**6. Observações adicionais**
