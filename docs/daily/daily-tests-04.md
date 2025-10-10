# Daily 004: KYC

**Data:** 06/10/2025  
---

## Sessão de Teste

**1. Quais são os objetivos desta sessão?**

- Testar endpoint `/kyc/individual-verification-sessions/standard` (Create a standard individual verification session)
- Testar endpoint `/kyc/individual-verification-sessions/standard/{sessionId}/process` (Process a standard individual verification session)
- Testar endpoint `/kyc/individual-verification-sessions/standard/{sessionId}` (Get a standard individual verification session result)

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

[X] Não, pois mesmo preenchendo os valores do corpo da requisição no formato esperado, testando o envio de RG e CNH, o status da verificação é automaticamente FAILED. Sendo assim, não consegui gerar um KYC válido.

---

**5. Problemas encontrados**

Encontrei uma inconsistência de nomenclatura nos exemplos de resposta do endpoint POST kyc/individual-verification-sessions/standard, entre as páginas de Guide (https://docs.notus.team/docs/guides/kyc-quickstart) e API Reference (https://docs.notus.team/docs/api-reference/know-your-customer/createStandardIndividualVerification). Os atributos no exemplo da página de Guide estão assim: "backDocumentUpload" e "frontDocumentUpload", já na API Reference: "backDocument" e "frontDocument". Inicialmente, me baseei nesse último exemplo, definindo o typeDef com os nomes dessa forma, fazendo com que eu os recebesse com valores nulos, pois a resposta correta é a que aparece em Guide.

Mesmo seguindo o processo de KYC corretamente, a verificação está gerando o status FAILED.

---

**6. Observações adicionais**

- Sugiro a correção do exemplo da API Reference para esse endpoint, visto que está inconsistente com a resposta correta da API. 
