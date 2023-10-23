import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit'; // Cambia esto al icono que desees

const columns = [
    { field: 'id', headerName: 'ID', flex: 1 },
    {
        field: 'plantName',
        headerName: 'Plant Name',
        flex: 2,
        editable: true,
    },
    {
        field: 'growthStage',
        headerName: 'Growth Stage',
        flex: 2,
        editable: true,
    },
    {
        field: 'action',
        headerName: 'Action',
        flex: 2,
        sortable: false,
        renderCell: (params) => (
            <IconButton>
                <EditIcon /> {/* Icono de edición, cambia al icono que desees */}
            </IconButton>
        ),
    },
];

const rows = [
    { id: 1, plantName: 'Tomato', growthStage: 'Flowering' },
    { id: 2, plantName: 'Lettuce', growthStage: 'Vegetative' },
    { id: 3, plantName: 'Basil', growthStage: 'Harvest' },
    // Agrega más filas según tus datos de hidroponía
];

export default function TableHydroponics() {
    return (
        <Box sx={{ height: 400, width: '100%' }}>
            <DataGrid
                rows={rows}
                columns={columns}
                initialState={{
                    pagination: {
                        paginationModel: {
                            pageSize: 5,
                        },
                    },
                }}
                pageSizeOptions={[5]}
            />
        </Box>
    );
}