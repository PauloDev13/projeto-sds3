import { SalePage } from 'types/sale';

type Props = {
  page: SalePage;
  onChangePage: Function;
};

const Pagination = ({ page, onChangePage }: Props) => {
  return (
    <div className="row d-flex justify-content-center">
      <nav>
        <ul className="pagination">
          <li className="page-item">
            <button
              onClick={() => onChangePage(0)}
              className="page-link mr-2"
              disabled={page.first}
            >
              Primeiro
            </button>
          </li>
          <li>
            <button
              onClick={() => onChangePage(page.number - 1)}
              // className={`page-link ${page.first ? 'disabled' : ''}`}
              className="page-link"
              disabled={page.first}
            >
              Anterior
            </button>
          </li>
          <li className="page-item disabled">
            <span className="page-link">
              {page.number + 1} de {page.totalPages}
            </span>
          </li>
          <li>
            <button
              onClick={() => onChangePage(page.number + 1)}
              // className={`page-link ${page.last ? 'disabled' : ''}`}
              className="page-link mr-2"
              disabled={page.last}
            >
              Próxima
            </button>
          </li>
          <li>
            <button
              onClick={() => onChangePage(page.totalPages - 1)}
              className="page-link"
              disabled={page.last}
            >
              Última
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Pagination;
