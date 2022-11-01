import {Routes, Route, Link} from 'react-router-dom';
import { HomePage } from './components/HomePage';
import { PublickPage } from './components/PublickPage';
import { FotoPage } from './components/FotoPage';
import { ContactsPage } from './components/ContactsPage';
import { NotfoundPage } from './components/NotfoundPage';


function App() {
  return(
    <>
      <h1>20-react-router</h1>
      <header>
      <Link to="/">Home</Link>
      <Link to="/publick">Public</Link>
      <Link to="/foto">Foto</Link>
      <Link to="/contacts">Contacts</Link>
      </header>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/publick' element={<PublickPage />} />
        <Route path='/foto' element={<FotoPage />} />
        <Route path='/contacts' element={< ContactsPage />} />
        <Route path='*' element={<NotfoundPage />} />
      </Routes>
    </>
  );
}

export default App;