import { Flex } from '@chakra-ui/react';
import Footer from './components/Footer';
import Header from './components/Header';
import HomeScreen from './screens/HomeScreen';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

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
            <HomeScreen />
            <Routes>
              <Route path='/' element={<HomeScreen />} />
            </Routes>
          </Flex>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
