import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';

const columns = [
  { field: 'id', headerName: 'ID', flex: 1 },
  {
    field: 'name',
    headerName: 'Nombre',
    flex: 2,
    editable: true,
  },
  {
    field: 'role',
    headerName: 'Rol',
    flex: 2,
    editable: true,
    valueOptions: ['ADMIN', 'CLIENTE'],
  },
  {
    field: 'action',
    headerName: 'Action',
    flex: 2,
    sortable: false,
    renderCell: (params) => (
      <IconButton>
        <EditIcon />
      </IconButton>
    ),
  },
];

const rows = [
  { id: 1, name: 'Jon Snow', role: 'ADMIN' },
  { id: 2, name: 'Cersei Lannister', role: 'CLIENTE' },
  { id: 3, name: 'Jaime Lannister', role: 'ADMIN' },
  // Agrega más filas según tus datos de usuarios
];

export default function TableUsers() {
  return (
    <div style={{ height: '100%', width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSize={5}
        autoHeight
      />
    </div>
  );
}