import React, { useState } from 'react';
import './CadastroUser.css';
import './../../components/Logo/Logo.css';
import Logo from "./../../components/Logo";
import InputMask from 'react-input-mask';

export default function CadastroUser() {
    const [formData, setFormData] = useState({
        fullName: '',
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
        phone: '',
        userType: '',
        cpf: '',
        cnpj: ''
    });

    const [errors, setErrors] = useState({});
    const [hasBeTryToCreate, setHasBeTryToCreate] = useState(false)
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
        if (hasBeTryToCreate) {
            Validation();
        }
    };

    const validatePassword = (password) => {
        const hasLetter = /[a-zA-Z]/.test(password);
        const hasNumber = /\d/.test(password);
        const isValidLength = password.length >= 8;

        if (!hasLetter || !hasNumber || !isValidLength) {
            return 'A senha deve conter pelo menos uma letra, um número e ter no mínimo 8 caracteres.';
        }
        return '';
    };


    const Validation = () =>{
        const newErrors = {};

        console.log(formData)
        if (!formData.fullName) newErrors.fullName = 'Nome completo é obrigatório';
        if (!formData.username) newErrors.username = 'Nome de usuário é obrigatório';
        if (!formData.email) newErrors.email = 'E-mail é obrigatório';
        if (!formData.password) {
            newErrors.password = 'Senha é obrigatória';
        } else {
            const passwordError = validatePassword(formData.password);
            if (passwordError) newErrors.password = passwordError;
        }
        if (formData.password !== formData.confirmPassword) newErrors.confirmPassword = 'As senhas não coincidem';
        if (!formData.phone) newErrors.phone = 'Telefone é obrigatório';
        if (!formData.userType) newErrors.userType = 'Tipo de usuário é obrigatório';
        if (formData.cpf.length < 11 && formData.userType === 'cliente') newErrors.cpf = 'CPF não está preenchido';
        if (formData.cnpj.length < 14 && formData.userType === 'fornecedor') newErrors.cnpj = 'CNPJ não está preenchido';

        setErrors(newErrors);
        return newErrors;
    }

    const handleSubmit = () => {
        const newErrors = Validation();
        console.log(newErrors)
        setHasBeTryToCreate(true)
        if (Object.keys(newErrors).length === 0) {
            console.log("AQUI FOI, PORRA!")
        }
    };

    return (
        <section className='containerGeral'>
            <img id='logo' src='./logo.png'></img>
            <p className='tituloPrincipalCadastro'>
                Crie sua Conta <br /> na <span className="tituloGradient">EcoChargerStation</span>
            </p>
            <div className='formulario'>
                <div className="input_component">
                    <input
                        type="text"
                        name="fullName"
                        placeholder='Nome Completo'
                        value={formData.fullName}
                        onChange={handleChange}
                    />
                    {errors.fullName && <div className="error-message">{errors.fullName}</div>}
                </div>
                <div className="input_component">
                    <input
                        type="text"
                        name="username"
                        placeholder='Nome de Usuário'
                        value={formData.username}
                        onChange={handleChange}
                    />
                    {errors.username && <div className="error-message">{errors.username}</div>}
                </div>
                <div className="input_component">
                    <input
                        type="email"
                        name="email"
                        placeholder='E-Mail'
                        value={formData.email}
                        onChange={handleChange}
                    />
                    {errors.email && <div className="error-message">{errors.email}</div>}
                </div>
                <div className="input_component">
                    <input
                        type="password"
                        name="password"
                        placeholder='Senha'
                        value={formData.password}
                        onChange={handleChange}
                    />
                    {errors.password && <div className="error-message">{errors.password}</div>}
                </div>
                <div className="input_component">
                    <input
                        type="password"
                        name="confirmPassword"
                        placeholder='Confirme a sua Senha'
                        value={formData.confirmPassword}
                        onChange={handleChange}
                    />
                    {errors.confirmPassword && <div className="error-message">{errors.confirmPassword}</div>}
                </div>
                <div className="input_component">
                    <InputMask
                        mask="99 999999999"
                        name="phone"
                        placeholder='Insira o seu Telefone'
                        value={formData.phone}
                        onChange={handleChange}
                    />
                    {errors.phone && <div className="error-message">{errors.phone}</div>}
                </div>
                <div className="input_component">
                    <select
                        name="userType"
                        value={formData.userType}
                        onChange={handleChange}
                        defaultValue=""
                    >
                        <option value="" disabled hidden>Tipo de Usuário</option>
                        <option value="fornecedor">Fornecedor</option>
                        <option value="cliente">Cliente</option>
                    </select>
                    {errors.userType && <div className="error-message">{errors.userType}</div>}
                </div>

                {
                    formData.userType === "cliente" ? (
                        <div className="input_component">
                            <InputMask
                                mask="999.999.999-99"
                                name="cpf"
                                placeholder='Insira seu cpf'
                                value={formData.cpf}
                                onChange={handleChange}
                            />
                            {errors.cpf && <div className="error-message">{errors.cpf}</div>}
                        </div>
                    ) : (
                        <div className="input_component">
                            <InputMask
                                mask="99.999.999/99-999"
                                name="cnpj"
                                placeholder='Insira seu cnpj'
                                value={formData.cnpj}
                                onChange={handleChange}
                            />
                            {errors.cnpj && <div className="error-message">{errors.cnpj}</div>}
                        </div>
                    )
                }

                                <button className='botaoGenerico' onClick={handleSubmit}> CADASTRAR-SE </button>

                                <h4>Cadastrar-se com</h4>

                                <div className="botoes">
                                    <button className="botaoEntrarCom"><img src="./instagram_icon.png" alt="Insta" /></button>
                                    <button className="botaoEntrarCom"><img src="./google_icon.png" alt="Google" /></button>
                                    <button className="botaoEntrarCom"><img src="./facebook_icon.png" alt="Facebook" /></button>
                                </div>
                            </div>
        </section>
    );
}
