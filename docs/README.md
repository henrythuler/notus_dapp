# 🚀 Notus dApp PoC

> A Proof of Concept for testing and validating Notus API’s flows using Node.js (GraphQL backend).

This project was developed as part of **NotusLab DX Research**.

---

## 🧩 Project Overview

The **Notus dApp PoC** simulates realistic user flows that integrate multiple Notus API endpoints:

1. **Smart Wallet** → Registration, deposit, and metadata management  
2. **KYC** → Full identity verification (including document upload to AWS S3)  
3. **Fiat Ramp** → On/Off-ramp operations (deposit and withdrawal)  
4. **Crypto** → Swaps and transfers between wallets  
5. **Portfolio & History** → Balance overview and transaction records  

Each flow was tested through a **GraphQL API**, acting as a middle layer between the Notus API and potential decentralized applications.

---

## 🧠 Architecture Overview

This PoC follows a modular and extensible structure:

```
backend/
├─ src/
│ ├─ graphql/
│ │ ├─ resolvers/ # Business resolvers (domain-level)
│ │ ├─ typeDefs/ # GraphQL schema definitions
│ ├─ services/ # External integrations (Notus API client)
│ └─ config/ # Environment configuration
├─ index.js # Apollo Server + Express setup
└─ package.json
```

---

## 🛠️ Technologies Used

- **Node.js 22**
- **Express 5**
- **GraphQL (Apollo Server)**
- **Axios**

---

## ⚙️ Environment Setup

### **1. Clone the repository**

```bash
git clone https://github.com/henrythuler/notus_dapp.git
cd notus_dapp
```

### **2. Install dependencies**

```bash
cd backend
npm install
```

### **3. Create a .env file**

In `/backend`, create a `.env` file with the following content:

```env
PORT=4000
NODE_ENV=development
NOTUS_API_KEY=your_notus_api_key_here
NOTUS_BASE_URL=https://api.notus.team/api/v1
```

### **4. Start the server**

```bash
npm start
```

Once started, the GraphQL server will be available at:

`http://localhost:4000/graphql`

---

## 🧪 How to Test

The GraphQL API exposes operations corresponding to each Notus API domain.

You can find examples for queries and mutations within `test_examples/queries_and_mutations.md`

---

## 💬 Acknowledgments

I would like to express my gratitude to **Notus** and **NearX** for the opportunity to develop this PoC and explore the integration with its API.  

This project was an incredible experience to deepen my understanding of Web3 applications integrated with real-world financial systems.

Many thanks to the **Notus** team for their availability and technical support.  

> _“Building the future of decentralized finance, one block of code at a time.”_

— **Henry Thuler**

