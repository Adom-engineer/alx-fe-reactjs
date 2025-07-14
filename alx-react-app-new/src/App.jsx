import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import WelcomeMessage from './components/WelcomeMessage';
import UserProfile from './components/UserProfile';
import Counter from './components/Counter';


function App() {
    return (
        <div>
            <Header />
            <WelcomeMessage />
            <MainContent />
            <Counter />
            <Footer />
            <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />

        </div>
    );
}

export default App;
