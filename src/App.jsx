import './App.css';
import { Home } from './pages/home/Home';
import { Header } from './widgets/Header';

export default function App() {
    return (
        <>
            <Header />
            <main className='flex-auto'>
                <Home />
            </main>
        </>
    );
}