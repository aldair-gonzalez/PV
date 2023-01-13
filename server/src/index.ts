import app from './app'

import { PORT } from './config/config'

app.listen(PORT, () => console.log(`Servidor escuchando en el puerto http://localhost:${PORT}`))