import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './styles/app.css';
import CreateVehicleSuccessPage from './pages/CreateVehicleSuccessPage';
import DeleteVehicleSuccessPage from './pages/DeleteVehicleSuccessPage';
import SuccessPage from './pages/SuccessPage';
import PixPaymentPage from './pages/PixPaymentPage';
import SideBarPage from './pages/SideBarPage';
import CreateVehiclePage from './pages/CreateVehiclePage';
import DeleteVehiclePage from './pages/DeleteVehiclePage';
import PaymentCompletedPage from './pages/PaymentCompletedPage';
import QrScannerComponent from './components/QrCode/QrScanner';
import EstablishmentRegistration from './pages/EstablishmentRegistration/EstablishmentRegistration';
import ChargingPointDetails from './pages/ChargingPointDetails/ChargingPointDetails';
import ChargingPointEdit from './pages/ChargingPointEdit/ChargingPointEdit';
import ChargingPointRegistration from './pages/ChargingPointRegistration/ChargingPointRegistration';
import AllVehicles from './pages/AllVehicles/AllVehicles';
import ClientHome from './pages/ClientHome/ClientHome';
import AddEstablishment from './pages/AddEstablishment/AddEstablishment';
import PagamentoRecarga from './pages/PagamentoRecarga';
import AvailableCharges from './pages/AvailableCharges/AvailableCharges'; 
import Login from './pages/Login';
import CadastroUser from './pages/CadastroUser';
import EstablishmentHome from './pages/EstablishmentHome';
import DeleteVehicleFailed from './pages/DeleteVehicleFailed';

function App() {
  const rotas = createBrowserRouter([
    {
      path: "/",
      element: <Login />
    },
    {
      path: "/supplierhome",
      element: <EstablishmentHome />
    },
    {
      path: "/chooseYourMethod",
      element: <PagamentoRecarga />,
    },
    {
      path: "/EstablishmentRegistration",
      element: <EstablishmentRegistration />
    },
    {
      path:"/detalhes-ponto-recarga",
      element:<ChargingPointDetails />
    },
    {
      path:"/editar-ponto-recarga",
      element:<ChargingPointEdit />
    },
    {
      path:"/cadastrar-ponto-de-recarga",
       element:<ChargingPointRegistration />
    },
    {
      path: "/register",
      element: <CadastroUser />
    },
    {
      path: "/SuccessPage", 
      element: <SuccessPage />
    },
    {
      path: "/CreateVehicleSuccessPage", 
      element: <CreateVehicleSuccessPage />
    },
    {
      path: "/DeleteVehicleSuccessPage", 
      element: <DeleteVehicleSuccessPage />
    },
    {
      path: "/PixPaymentPage", 
      element: <PixPaymentPage />
    },
    {
      path: "/SideBarPage", 
      element: <SideBarPage />
    },
    {
      path: "/CreateVehiclePage", 
      element: <CreateVehiclePage />
    },
    {
      path: "/DeleteVehiclePage", 
      element: <DeleteVehiclePage />
    },
    {
      path: "/availablecharges",
      element: <AvailableCharges />
    },
    {
      path: "/PaymentCompletedPage", 
      element: <PaymentCompletedPage />
    },
    {
      path: "/QrScannerPage", 
      element: <QrScannerComponent />
    },
    {
      path: "/DeleteVehicleFailed", 
      element: <DeleteVehicleFailed />
    },
    {
      path: "/allVehicles",
      element: <AllVehicles />
    },
    {
      path: "/homeclient",
      element: <ClientHome />
    },
    {
      path: "/add-estabelecimento",
      element:<AddEstablishment />
    }
  ])
      return <RouterProvider router = {rotas}></RouterProvider>
}

export default App;
