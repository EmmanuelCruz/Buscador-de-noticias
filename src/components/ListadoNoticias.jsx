import Grid from "@mui/material/Grid"
import Typography from "@mui/material/Typography"
import useNoticias from "../hooks/useNoticias"
import Noticia from "./Noticia"
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';

const ListadoNoticias = () => {

  const { noticias, totalNoticias, handleChangePagina, pagina } = useNoticias()

  const totalPaginas = Math.ceil(totalNoticias / 20);

  return (
    <>
      <Typography
        textAlign='center'
        marginY={5}
        variant='h3'
        component='h2'
      >
        Últimas noticias
      </Typography>

      <Grid
        container
        spacing={2}
      >
        {
          noticias.map(noticia => (
            <Noticia
              noticia={noticia}
              key={noticia.url}
            />
          ))
        }
      </Grid>

      <Stack
        spacing={2}
        justifyContent='center'
        alignItems='center'
        sx={{
          marginY: 5
        }}
      >
        <Pagination page={pagina} onChange={handleChangePagina} count={totalPaginas} color="primary" />
      </Stack>
    </>
  )
}

export default ListadoNoticias
