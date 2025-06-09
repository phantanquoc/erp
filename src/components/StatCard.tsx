import React from 'react';

interface StatCardProps {
  title: string;
  value: number;
  icon: React.ReactNode;
  color: string;
}

const StatCard: React.FC<StatCardProps> = ({ title, value, icon, color }) => {
  return (
    <div className={`rounded-lg p-6 ${color} text-white flex justify-between items-center`}>
      <div>
        <p className="text-sm font-medium">{title}</p>
        <p className="text-3xl font-bold">{value}</p>
      </div>
      <div className="text-white text-opacity-80">
        {icon}
      </div>
    </div>
  );
};

export default StatCard;
