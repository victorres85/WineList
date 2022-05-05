import * as ReactDOM from 'react-dom';
import { Wine } from './Components/Wine';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
    return (
        <body className='bg-dark text-light'>
            <div >
                <h1 className="p-4">Wine List</h1>
                <Wine />
            </div>
        </body>
    )
}
const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);
root.render(<App />);