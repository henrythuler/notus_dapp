# Relatório Final - NotusLab DX Research

## Dados do Participante

**Nome:** Henry Thuler Serbillera

**Email:** henrythuler2003@outlook.com

**Ferramentas utilizadas:** Postman, Node.js, GraphQL (Apollo Server), Express, Axios

**Link do repositório:** https://github.com/henrythuler/notus_dapp

**Link do post público:** https://www.linkedin.com/posts/henrythuler_acabaram-as-desculpas-para-n%C3%A3o-integrar-activity-7382578593505374209-uu9w?utm_source=share&utm_medium=member_desktop&rcm=ACoAADr-h2YBrARBNIMZWNldAHiY4Id7UWUysk4

**Data de iní­cio:** 02/10/2024

**Data de conclusão:** 10/10/2024

---

## Relatório

### **1. Qual trilha você testou?**

- (X) Trilha A - Smart Wallet, KYC, Fiat, Portfolio, History
- (X) Trilha B - Smart Wallet, Swaps, Transfer, Portfolio, History
- (  ) Trilha C - Smart Wallet, Liquidity Pools, Portfolio, History

---

### **2. Quais endpoints você testou com mais profundidade?**

- `/wallets/address` (Get Smart Wallet)
- `/wallets/register` (Register Smart Wallet)

Foi validada a criação de carteiras determinísticas, mudando os valores dos parâmetros da requisição e observando o comportamento.

- `/kyc/individual-verification-sessions/standard` (Create a standard individual verification session)
- `/kyc/individual-verification-sessions/standard/{sessionId}/process` (Process a standard individual verification session)
- `/kyc/individual-verification-sessions/standard/{sessionId}` (Get a standard individual verification session result)

Foi validado o fluxo de KYC como um todo, passando dados com o formato não esperado, fotos não nítidas, e depois com os valores corretos.

---

### **3. Quais foram os principais bugs encontrados?**

- GET `/wallets/address`
Mesmo passando o parâmetro eip7702 com o valor false, ele retornava a mensagem: "Salt has no effect on EIP7702 wallets as the address is the EOA itself. Remove salt if you want to use EIP7702." O correto seria considerar o valor do salt e retornar uma resposta de sucesso. O problema só era resolvido quando removíamos completamente o parâmetro eip7702 da requisição.

É um bug de gravidade baixa que acontece sempre quando passamos eip7702, e algum valor para salt.

---

### **4. Quais comportamentos inesperados você identificou?**

- Parâmetros da resposta diferentes em API Reference (POST kyc/individual-verification-sessions/standard) e KYC Quickstart (Guide).
- Valor de page padrão na query de list chains (GET `/crypto/chains`) da página API Reference como 2, retornando um array vazio.
- Para testar o endpoint de Create Swap em API Reference, os parâmetros opcionais (slippage e routeProfile) estão sendo passados como null por padrão no corpo da requisição, gerando um erro quando não alteramos os valores antes de fazer a requisição diretamente pela página.
- É necessário pedir autorização para as rotas FIAT mesmo com um KYC válido.

---

### **5. Como foi a experiência de usar a API?**

* A documentação foi suficiente? 4 - Algumas inconsistências entre os exemplos das páginas acabaram confundindo um pouco
* As mensagens de erro ajudaram? 5
* O fluxo fez sentido? 4
* O tempo de resposta era razoável? 5

---

### **6. Alguma funcionalidade estava ausente ou incompleta?**

Não tinha uma funcionalidade para recuperar o individual_id sem o session_id.
Não suporta testnets, o que dificulta os testes para os endpoints de swap, transfer, etc.

---

### **7. Quais melhorias você sugere?**

Na página de API Reference, sugiro deixar os valores padrão dos campos opcionais preenchidos, ou removê-los completamente da requisição e só adicioná-los se o usuário os alterar. Também a manter a consistência entre os exemplos de resposta nas páginas do Guide e API Reference, como no caso do endpoint `/kyc/individual-verification-sessions/standard`.

Disponibilizar as redes de testnet para facilitar os testes de endpoints que envolvem transações.

---

### **8. Como você avaliaria a estabilidade geral da API nesta trilha?**

* [X] Estável - poucos problemas, nada crí­tico

O tempo de resposta da API e sua disponibilidade são excelentes, não tive nenhum problema de latência ou servidor fora do ar. O principal problema que tive foi a instabilidade do KYC, que estava retornando FAILED automaticamente para todas as sessions criadas.

---

### **9. Há testes que você gostaria de ter feito, mas não conseguiu? Por quê?**

Sim, os testes que envolvem transações, pois não é possível utilizar testnets dentro das chains disponibilizadas. Apesar de conseguir criar as operações de swap, transfer e deposit, não pude verificar alterações no balance, portfolio e histórico das wallets.

---

### **10. Comentários finais ou insights gerais?**

A experiência geral com a Notus API foi muito boa, apesar de algumas inconsistências, a documentação está bem clara e os exemplos de resposta ajudam bastante a estruturar nossa aplicação para se integrar a ela. Vejo como principal ponto de melhoria: disponibilizar as testnets dentro das chains suportadas para que testes de transações possam ser feitos sem envolver custos financeiros. As mensagens de erro retornadas são coerentes e identificam o problema claramente.

---
