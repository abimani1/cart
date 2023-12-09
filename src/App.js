import './App.css';
import AppRoutes from './routes';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { AuthContextProvider } from './auth-providers/auth';
import { BrowserRouter } from 'react-router-dom';

const client = new ApolloClient({
  uri: process.env.REACT_APP_HASURA_BASE_URL,
  cache: new InMemoryCache(),
  headers: {
    'Content-Type': 'application/json',
    'x-hasura-admin-secret': process.env.REACT_APP_HASURA_ADMIN_SECRET,
  },
});

function App() {
  return (
    <div className="App">
      <ApolloProvider client={client}>
        <BrowserRouter>
          <AuthContextProvider>   
            <AppRoutes/>
          </AuthContextProvider>
        </BrowserRouter>
      </ApolloProvider>
    </div>
  );
}

export default App;
