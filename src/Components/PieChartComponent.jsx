import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import { useData } from '../Context/Context'

const COLORS = ['#F86C9A', '#3498DB', '#F1C40F', '#1ABC9C'];

const PieChartComponent = () => {
  const { Transaction } = useData();

  // Step 1: Filter only expenses and convert amounts to numbers
  const expenses = Transaction
    .filter(item => item.type === 'Expense')
    .map(item => ({
      category: item.category,
      amount: parseFloat(item.amount)
    }));

  // Step 2: Group by category and sum amounts
  const groupedData = Object.values(
    expenses.reduce((acc, curr) => {
      if (!acc[curr.category]) {
        acc[curr.category] = { category: curr.category, amount: 0 };
      }
      acc[curr.category].amount += curr.amount;
      return acc;
    }, {})
  );

  return (
    <div
      style={{
        background: '#fff',
        color: 'black',
        padding: '20px',
        borderRadius: '12px',
        width: '300px',
        textAlign: 'center',
        margin: '0 auto',
      }}
    >
      <h3>Spending Breakdown</h3>

      {/* Pie Chart */}
      <PieChart width={250} height={250}>
        <Pie
          data={groupedData}
          cx="50%"
          cy="50%"
          outerRadius={80}
          dataKey="amount"
        >
          {groupedData.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip />
      </PieChart>

      {/* Custom Legend Below */}
      <div
        style={{
          marginTop: '20px',
          display: 'flex',
          flexWrap: 'wrap',
          gap: '15px',
          alignItems: 'center',
          justifyContent: 'space-around',
        }}
      >
        {groupedData.map((entry, index) => (
          <div
            key={index}
            style={{
              display: 'flex',
              alignItems: 'center',
              marginBottom: '8px',
            }}
          >
            <div
              style={{
                width: 15,
                height: 15,
                backgroundColor: COLORS[index % COLORS.length],
                marginRight: 8,
                borderRadius: 3,
              }}
            />
            <span>{entry.category}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PieChartComponent;
