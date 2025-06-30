import './App.css'
import './style.css'
import Login from './pages/Login'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainLayout from './layout/MainLayout';
import Insights from './pages/Insights';
import MinimalLayout from './layout/MinimalLayout';
function App() {

  return (
    <>

      <BrowserRouter basename="/">
        {/* <ToastContainer/> */}

        <Routes>
          <Route path="/" element={<MinimalLayout />}>
            <Route path="login" element={<Login />} />
            {/* <Route path="signup" element={<SignupPage />} /> */}
          </Route>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<Insights />} />
            <Route path="Insights" element={<Insights />} />
            {/* <Route path="dashboards/">
							<Route path="dashboard1" element={<Dashboard1Page />} />
							<Route path="dashboard2" element={<Dashboard2Page />} />
							<Route path="dashboard3" element={<Dashboard3Page />} />
							<Route path="dashboard4" element={<Dashboard4Page />} />
							<Route path="dashboard5" element={<Dashboard5Page />} />
						</Route> */}

          </Route>

          {/* <Route path="/" element={<MainLayout container={false} pb={false} />}>
						<Route path="pages/">
							<Route path="wip" element={<WIPPage />} />
						</Route>
					</Route> */}
          {/* <Route path="*" element={<Page404 />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
