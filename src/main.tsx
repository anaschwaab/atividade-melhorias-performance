import ReactDOM from 'react-dom/client'
import './index.css';
import { ListKeys } from './pages/ListKeys';
import { ContadorComErros } from './pages/ContadorComErros';
import { ColorResponsive } from './pages/ColorResponsive';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <ContadorComErros />
    // <ListKeys />
    // <ColorResponsive />
)
