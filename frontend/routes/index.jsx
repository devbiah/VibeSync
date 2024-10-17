import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from '../app/LandingPage';

export default function WebRoutes() {
    return (
        <div>
            <Router>
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                </Routes>
            </Router>
        </div>
    );
}