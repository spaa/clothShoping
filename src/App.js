import {Routes, Route} from 'react-router-dom';

import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';

const Shop = ()=>{
  return (
    <div>Shop Now</div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation/>}>
        {/* <Route path="" element={<Home />} /> */}
        <Route index element={<Home />} />
        <Route path='auth' element={<Authentication />} />
        <Route path="shop" element={<Shop />} />
      </Route>
    </Routes>
  );
}

export default App;
