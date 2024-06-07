import { useLocation } from 'react-router-dom';
import { useEffect, useState } from "react"
import './../styles/PixPaymentPage.css';
import { GerarCobranca } from '../services/User';

const PixPaymentPage = () => {


  const location = useLocation();
  const [image, setImage] = useState("");
  const [verify, setVerify] = useState("");
  useEffect(()=>{
    console.log(location)
    GerarCobranca(location.state.stablishing_id, location.state.total).then((result)=>{
      console.log(result)
      setImage(`/QRCODE-id=${result}.png`);
      setVerify(result);
    })
  }, [])
  
  
  const expiryTime = 60;

  const copyPixCode = () => {
    const pixCode = import.meta.env.VITE_API_URL + "/payment/verify?id=" + verify // Substitua pelo código PIX real
    navigator.clipboard.writeText(pixCode);
    alert("Código PIX copiado para a área de transferência!");
  };

  return (
    <div className="pix-payment-page">
      <h1 className="page-title">PAGAMENTO VIA PIX</h1>
      <div className="payment-qrcode">
        <p className="expiry-time">Expira em {expiryTime}s</p>
        {image !== "" && <img src={`${import.meta.env.VITE_API_URL}/payment/qrcode${image}`} alt="QR Code" className="qr-code" />}
        <button className="copy-pix-code-button" onClick={copyPixCode}>
        COPIAR CÓDIGO PIX
      </button>
      </div>
    </div>
  );
};

export default PixPaymentPage;
