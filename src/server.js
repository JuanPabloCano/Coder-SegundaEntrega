import Config from './config/config.js';
import app from './app.js';

const PORT = Config.PORT;

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
