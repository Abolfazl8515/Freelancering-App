const Table = ({ children }) => {
  return (
    <div className="bg-secondary-0 overflow-x-auto">
      <table>{children}</table>
    </div>
  );
};

export default Table;

const THeader = ({ children }) => {
  return <thead>{children}</thead>;
};

const TBody = ({ children }) => {
  return <tbody>{children}</tbody>;
};

const TRow = ({ children }) => {
  return <tr className="title-row">{children}</tr>;
};

Table.Head = THeader;
Table.Body = TBody;
Table.Row = TRow;
