import { useEffect, useState } from 'react';
import axios from 'axios';

import { SalePage } from 'types/sale';
import { BASE_URL } from 'utils/requests';
import { formatLocalDate } from 'utils/format';

const DataTable = () => {
  const [page, setPage] = useState<SalePage>({
    last: true,
    first: true,
    totalPages: 0,
    totalElements: 0,
    number: 0,
  });

  useEffect(() => {
    axios
      .get(`${BASE_URL}/sales?page=1&size=10&sort=date,desc`)
      .then((response) => {
        setPage(response.data);
      });
  }, []);

  return (
    <div className="table-responsive">
      <table className="table table-striped table-sm">
        <thead>
          <tr>
            <th>Data</th>
            <th>Vendedor</th>
            <th>Clientes visitados</th>
            <th>Negócios fechados</th>
            <th>Valor</th>
          </tr>
        </thead>
        <tbody>
          {page.content?.map(({ id, date, seller, visited, deals, amount }) => (
            <tr key={id}>
              <td>{formatLocalDate(date, 'dd/MM/yyyy')}</td>
              <td>{seller.name}</td>
              <td>{visited}</td>
              <td>{deals}</td>
              <td>{amount.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
