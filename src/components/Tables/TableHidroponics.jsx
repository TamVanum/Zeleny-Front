import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit'; // Cambia esto al icono que desees
import { defaultStyleGrid, headerAlignProps } from '../../assets/colors';

const columns = [
    { field: 'id', headerName: 'ID', flex: 1 },
    {
        field: 'plantName',
        headerName: 'Plant Name',
        flex: 2,
        editable: true,
        ...headerAlignProps,
    },
    {
        field: 'action',
        headerName: 'Action',
        flex: 2,
        sortable: false,
        ...headerAlignProps,
        renderCell: (params) => (
            <IconButton>
                <EditIcon /> {/* Icono de edición, cambia al icono que desees */}
            </IconButton>
        ),
        
    },
];

const rows = [
    { id: 1, plantName: 'Lechuga'},
    { id: 2, plantName: 'Rucula'},
    { id: 3, plantName: 'Lechuga'},
    // Agrega más filas según tus datos de hidroponía
];

export default function TableHydroponics() {
    return (
        <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                pageSize={5}
                autoHeight
                sx={{
                    ...defaultStyleGrid
                  }}
            />
        </Box>
    );
}
