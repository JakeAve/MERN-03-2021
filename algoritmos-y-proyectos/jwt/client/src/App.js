import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Register from './views/Register';
import Login from './views/Login';
import Home from './views/Home';
import { UserProvider } from './contexts/user';
import { AlertProvider } from './contexts/alerts';
import Logout from './components/Logout';

function App() {
    return (
        <Router>
            <UserProvider>
                <AlertProvider>
                    <nav>
                        <Logout />
                    </nav>
                    <Switch>
                        <Route path="/register" component={Register} />
                        <Route path="/login" component={Login} />
                        <Route path="/" component={Home} />
                    </Switch>
                </AlertProvider>
            </UserProvider>
        </Router>
    );
}

export default App;
