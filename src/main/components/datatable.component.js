import React from 'react';
import { useTable, useSortBy, usePagination } from 'react-table'

function Table({columns, data}) {
  const {
    page,
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,
    state: { pageIndex, pageSize },
  } = useTable(
    {
      columns,
      data,
      initialState: { pageIndex: 0 },
    },
    usePagination
  )

  return (
    <>
      <div className="card">
        <div className="card-body">
              <table className="table table-light" {...getTableProps()}>
              <thead>
                {headerGroups.map(headerGroup => (
                  <tr {...headerGroup.getHeaderGroupProps()}>
                    {headerGroup.headers.map(column => (
                      <th {...column.getHeaderProps()}>{column.render('Header')}</th>
                    ))}
                  </tr>
                ))}
              </thead>
              <tbody {...getTableBodyProps()}>
                {page.map((row, i) => {
                  prepareRow(row)
                  return (
                    <tr {...row.getRowProps()}>
                      {row.cells.map(cell => {
                        return <td {...cell.getCellProps()}>{cell.render('Cell')}</td>
                      })}
                    </tr>
                  )
                })}
              </tbody>
            </table>  

          <div className="pagination">
                  <button onClick={() => gotoPage(0)} disabled={!canPreviousPage}>
                    {'<<'}
                  </button>{' '}
                  <button onClick={() => previousPage()} disabled={!canPreviousPage}>
                    {'<'}
                  </button>{' '}
                  <button onClick={() => nextPage()} disabled={!canNextPage}>
                    {'>'}
                  </button>{' '}
                  <button onClick={() => gotoPage(pageCount - 1)} disabled={!canNextPage}>
                    {'>>'}
                  </button>{' '}
                  <span>
                    Page{' '}
                    <strong>
                      {pageIndex + 1} of {pageOptions.length}
                    </strong>{' '}
                  </span>
                  <span>
                    | Go to page:{' '}
                    <input
                      type="number"
                      defaultValue={pageIndex + 1}
                      onChange={e => {
                        const page = e.target.value ? Number(e.target.value) - 1 : 0
                        gotoPage(page)
                      }}
                      style={{ width: '100px' }}
                    />
                  </span>{' '}
                  <select
                    value={pageSize}
                    onChange={e => {
                      setPageSize(Number(e.target.value))
                    }}
                  >
                    {[10, 15, 20].map(pageSize => (
                      <option key={pageSize} value={pageSize}>
                        Show {pageSize}
                      </option>
                    ))}
                  </select>
              </div>
            </div>
      </div>
    </>

  )
}

function DataTableComponent(props) {
  const data1 = [
    {
      name: 'Sara Turner',
      email: 'sara.turner@example.com',
      phone: '(603)-641-0238'
    },
    {
      name: 'Christian Kelley',
      email: 'christian.kelley@example.com',
      phone: '(153)-324-6597'
    },
    {
      name: 'Annie Dean',
      email: 'annie.dean@example.com',
      phone: '(373)-005-2708'
    },
    {
      name: 'Cameron Hunt',
      email: 'cameron.hunt@example.com',
      phone: '(912)-351-7665'
    },
    {
      name: 'Brandon Cook',
      email: 'brandon.cook@example.com',
      phone: '(554)-103-5975'
    },
    {
      name: 'Ashley Jones',
      email: 'ashley.jones@example.com',
      phone: '(604)-896-2642'
    },
    {
      name: 'Allan Fields',
      email: 'allan.fields@example.com',
      phone: '(197)-032-6069'
    },
    {
      name: 'Justin Barnes',
      email: 'justin.barnes@example.com',
      phone: '(002)-902-1774'
    },
    {
      name: 'Willie Jordan',
      email: 'willie.jordan@example.com',
      phone: '(535)-969-6902'
    },
    {
      name: 'Rhonda Cooper',
      email: 'rhonda.cooper@example.com',
      phone: '(746)-018-4462'
    },
    {
      name: 'Sara Turner',
      email: 'sara.turner@example.com',
      phone: '(603)-641-0238'
    },
    {
      name: 'Christian Kelley',
      email: 'christian.kelley@example.com',
      phone: '(153)-324-6597'
    },
    {
      name: 'Annie Dean',
      email: 'annie.dean@example.com',
      phone: '(373)-005-2708'
    },
    {
      name: 'Cameron Hunt',
      email: 'cameron.hunt@example.com',
      phone: '(912)-351-7665'
    },
    {
      name: 'Brandon Cook',
      email: 'brandon.cook@example.com',
      phone: '(554)-103-5975'
    },
    {
      name: 'Ashley Jones',
      email: 'ashley.jones@example.com',
      phone: '(604)-896-2642'
    },
    {
      name: 'Allan Fields',
      email: 'allan.fields@example.com',
      phone: '(197)-032-6069'
    },
    {
      name: 'Justin Barnes',
      email: 'justin.barnes@example.com',
      phone: '(002)-902-1774'
    },
    {
      name: 'Willie Jordan',
      email: 'willie.jordan@example.com',
      phone: '(535)-969-6902'
    },
    {
      name: 'Rhonda Cooper',
      email: 'rhonda.cooper@example.com',
      phone: '(746)-018-4462'
    }    
  ]

  const columns1 = [
    {
      Header: 'Name',
      accessor: 'name'
    }, {
      Header: 'Email',
      accessor: 'email'
    }, {
      Header: 'Phone',
      accessor: 'phone'
    }
  ]

  return (
      <Table data={props.data} columns={props.columns}/>
  )

}

export default DataTableComponent