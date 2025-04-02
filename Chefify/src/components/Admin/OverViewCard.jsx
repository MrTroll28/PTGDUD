const OverViewCard = ({ title, amount }) => {
    return (
    <div className="p-4 border rounded-lg shadow">
        <h3 className="text-lg font-bold">{title}</h3>
        <p className="text-2xl font-semibold">{amount}</p>
    </div>
    );
};
  
export default OverViewCard;