import { Flex } from '@chakra-ui/react';
import Footer from './components/Footer';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ProductScreen from './screens/ProductScreen';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
          {/* <div style={{ height: '100px' }}></div> */}
          <Flex
            as='main'
            mt='72px'
            direction='column'
            py='6'
            px='6'
            bgColor='gray.200'
          >
            <Routes>
              <Route path='/' element={<HomeScreen />} />
              <Route path='/product/:id' element={<ProductScreen />} />
            </Routes>
          </Flex>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
