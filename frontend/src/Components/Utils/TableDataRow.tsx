type Props = {
  code?: string;
  subject?: string;
};

const TableDataRow = ({ code, subject }: Props) => {
  const tdStyle = "p-4 border-b border-gray-300";
  return code ? (
    <td className={`${tdStyle} border-r`}>{code}</td>
  ) : (
    <td className={`${tdStyle} border-r`}>{subject}</td>
  );
};

export default TableDataRow;
