import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import SelectFilterTag from "./SelectFilterTag";
import SelectFilterStatus from "./SelectFilterStatus";

function createData(
  titulo: string,
  descripcion: string,
  fecha_limite: number,
  estado: string,
  etiqueta: string,
) {
  return { titulo, descripcion, fecha_limite, estado, etiqueta };
}

const rows = [
  createData('Frozen yoghurt', "descripcion de la tarea", 6.0, "en proceso", "etiqueta de la tarea"),
  createData('Frozenasda', "descripcion de la tarea", 6.0, "en proceso", "etiqueta de la tarea"),
  createData('Frozen ydsddddoghurt', "descripcion de la tarea", 6.0, "en proceso", "etiqueta de la tarea"),
  createData('Frozen yoasdasdghurt', "descripcion de la tarea", 6.0, "en proceso", "etiqueta de la tarea"),
  createData('Frozen yssaaaaoghurt', "descripcion de la tarea", 6.0, "en proceso", "etiqueta de la tarea"),
 
];

export default function DenseTable() {
  return (
    <TableContainer component={Paper} sx={{ 
        width: '900px',

        }}>
        <SelectFilterTag/>
        <SelectFilterStatus/>
      <Table sx={{
          minWidth: 650,
          [`@media (max-width: 600px)`]: {
            minWidth: '100%',
          },
        }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Titulo</TableCell>
            <TableCell align="left">Descripcion</TableCell>
            <TableCell align="left">Fecha_limite</TableCell>
            <TableCell align="left">Estado</TableCell>
            <TableCell align="left">Etiqueta</TableCell>
            <TableCell align="left">icono dfe finalizar</TableCell>
            <TableCell align="left">Eliminar</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.titulo}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.titulo}
              </TableCell>
              <TableCell align="left">{row.descripcion}</TableCell>
              <TableCell align="left">{row.fecha_limite}</TableCell>
              <TableCell align="left">{row.estado}</TableCell>
              <TableCell align="left">{row.etiqueta}</TableCell>
              <TableCell align="left">Boton de finalizar</TableCell>
              <TableCell align="left">boton de eliminar</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}