import { useEffect } from 'react';
import { Header } from 'components/Header/header';
import  Map from 'components/Footer/map';
import Loader from 'components/Loader';

import Products from 'components/Products';
import Cart from 'components/Cart';

import { useProducts } from 'contexts/products-context';

import * as S from './style';

function App() {
  const { isFetching, products, fetchProducts } = useProducts();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  return (
    <S.Container>
       <S.MainHeader>
        <Header />
       </S.MainHeader>
      {isFetching && <Loader />}
      <S.TwoColumnGrid>
        <S.Main>
          <S.MainHeader>
            <p>{products?.length} Productos en stock</p>
          </S.MainHeader>
          <Products products={products} />
        </S.Main>
        <Map />
      </S.TwoColumnGrid>
      <Cart />
    </S.Container>
  );
}

export default App;
