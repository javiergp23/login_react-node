import React from 'react';
import { Box, Button, Checkbox, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from '@mui/material';

interface FormFilterProps {
    filters: { tags: string[], status: string };
    onFilterChange: (newFilters: { tags: string[], status: string }) => void;
    handleClearFilters: () => void;
}

export const FormFilter: React.FC<FormFilterProps> = ({ filters, onFilterChange, handleClearFilters }) => {
    const [tags, setTags] = React.useState(filters.tags);
    const [status, setStatus] = React.useState(filters.status);

    // Restablecer los filtros
    const clearAllFilters = () => {
        setTags([]);  
        setStatus('');  
        handleClearFilters(); 
      };

    // Actualizar el estado de los filtros cuando el usuario cambie algo
  const handleTagsChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    const newTags = checked ? [...tags, value] : tags.filter(tag => tag !== value);
    setTags(newTags);
    onFilterChange({ tags: newTags, status });
  };

  const handleStatusChange = (event: SelectChangeEvent) => {
    const newStatus = event.target.value;
    setStatus(newStatus);
    onFilterChange({ tags, status: newStatus });
  };
    return (
        <form action="">  
            <Box sx={{ 
                display: 'flex', 
                flexDirection: 'row', 
                alignItems: 'center', 
                gap: 2,
                padding: '15px',

            }}>
                <h4>Filtrar etiqueta</h4>
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', gap: 2, marginButton: 4 }}>
                    <label>Trabajo</label>
                    <Checkbox value="Trabajo" checked={tags.includes("Trabajo")} onChange={handleTagsChange}  />
                    <label>Personal</label>
                    <Checkbox value="Personal" checked={tags.includes("Personal")} onChange={handleTagsChange}  />
                    <label>Urgente</label>
                    <Checkbox value="Urgente" checked={tags.includes("Urgente")} onChange={handleTagsChange}  />
                </Box>
                <Box sx={{ 
                    minWidth: 120, 
                    width: '20%',
                    display: 'inline-block',
                    margin: '4px',
                    marginLeft: '10px',

                }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">Estado</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={status}
                        label="Estado"
                        onChange={handleStatusChange}
                    >
                    <MenuItem value='pendiente'>Pendiente</MenuItem>
                    <MenuItem value='en progreso'>En Proceso</MenuItem>
                    <MenuItem value='completada'>Completada</MenuItem>
                    </Select>
                </FormControl>
                </Box>
                <Button onClick={clearAllFilters}>
                    Limpiar filtros
                </Button>
            </Box>
        </form>
    )
}