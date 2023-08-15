import Link from "next/link";
import React, { useState } from "react";
import logo from "../Images/logo.png";
import { TransactionModal } from "@/components/TransactionModal";

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const transactions = [
    {
      id: 1,
      name: "Salário",
      amount: 1312,
      type: "Receita",
      date: "2023-08-15",
    },
    {
      id: 2,
      name: "Alimentação",
      amount: -50,
      type: "Despesa",
      date: "2023-08-10",
    },
    {
      id: 3,
      name: "Condomínio",
      amount: -449.9,
      type: "Despesa",
      date: "2023-08-15",
    },
    {
      id: 4,
      name: "Internet",
      amount: -129.9,
      type: "Despesa",
      date: "2023-08-15",
    },
    {
      id: 5,
      name: "Jogo do bicho",
      amount: 400,
      type: "Lucros ilegais",
      date: "2023-08-15",
    },
    {
      id: 6,
      name: "Blazer",
      amount: -500,
      type: "Lazer",
      date: "2023-08-15",
    },
    {
      id: 7,
      name: "Água + Luz",
      amount: -300,
      type: "Essencial",
      date: "2023-08-15",
    },
  ];

  const [modalAberto, setModalAberto] = useState(false);

  const abrirModal = () => {
    setModalAberto(true);
  };

  const fecharModal = () => {
    setModalAberto(false);
  };

  const totalEntradas = transactions.reduce((total, transaction) => {
    return transaction.amount > 0 ? total + transaction.amount : total;
  }, 0);

  const totalSaidas = transactions.reduce((total, transaction) => {
    return transaction.amount < 0 ? total - transaction.amount : total;
  }, 0);

  const total = totalEntradas - totalSaidas;

  return (
    <div>
      <div className="flex justify-between items-center p-4 bg-gray-600 text-white relative">
        <div className="flex items-center">
          <img src={logo.src} alt="Logo" className="w-20 h-16 mr-2" />
          <h1 className="text-lg font-semibold">Gerenciamento de Gastos</h1>
        </div>
        <button
          className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600"
          onClick={abrirModal}
        >
          Nova Transação
        </button>
        <TransactionModal isOpen={modalAberto} onClose={fecharModal} />
      </div>
      <div className="flex justify-around text-center text-2xl p-12">
        <div className="w-2/12 bg-green-500 p-4 rounded-lg">
          <h2 className="font-semibold mb-2">Entradas</h2>
          <p className="font-bold">${totalEntradas.toFixed(2)}</p>
        </div>
        <div className="w-2/12 bg-red-500 p-4 rounded-lg">
          <h2 className="font-semibold mb-2">Saídas</h2>
          <p className="font-bold">${totalSaidas.toFixed(2)}</p>
        </div>
        <div className="w-2/12 bg-blue-500 p-4 rounded-lg">
          <h2 className="font-semibold mb-2">Total</h2>
          <p
            className={`font-bold ${
              total >= 0 ? "text-green-400" : "text-red-400"
            }`}
          >
            ${total.toFixed(2)}
          </p>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="p-4">
          <h1 className="font-semibold mb-8 text-3xl text-center">
            Histórico de transações
          </h1>
          <table className="w-full border-collapse">
            <thead>
              <tr className="text-2xl border-b-2">
                <th className="px-20 py-2 text-center">Transações</th>
                <th className="px-20 py-2 text-center">Valor</th>
                <th className="px-20 py-2 text-center">Categoria</th>
                <th className="px-20 py-2 text-center">Data</th>
                <th className="px-20 py-2">Editar</th>
                <th className="px-20 py-2">Deletar</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.id} className="border-b">
                  <td className="p-2 text-center">{transaction.name}</td>
                  <td
                    className={`p-2 text-center ${
                      transaction.amount > 0 ? "text-green-600" : "text-red-600"
                    }`}
                  >
                    {transaction.amount >= 0
                      ? `$${transaction.amount}`
                      : `- $${-transaction.amount}`}
                  </td>
                  <td className="p-2 text-center">{transaction.type}</td>
                  <td className="p-2 text-center">{transaction.date}</td>
                  <td className="p-2 text-center">
                    <Link href={""}>Editar</Link>
                  </td>
                  <td className="p-2 text-center">
                    <button>Deletar</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Home;
