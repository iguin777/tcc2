// src/context/UsuarioContext.js

import { createContext, useContext, useState } from 'react';

// Cria o contexto
const UsuarioContext = createContext();

// Cria o provedor do contexto
export const UsuarioProvider = ({ children }) => {
  const [usuario, setUsuario] = useState(null); // Armazena os dados do usuário

  // Função de login (aqui você pode ajustar conforme sua necessidade)
  const login = (usuarioInfo) => {
    setUsuario(usuarioInfo); // Faz login (salva as informações do usuário no estado global)
  };

  const logout = () => {
    setUsuario(null); // Realiza o logout (limpa os dados do usuário)
  };

  return (
    <UsuarioContext.Provider value={{ usuario, login, logout }}>
      {children}
    </UsuarioContext.Provider>
  );
};

// Hook customizado para usar o contexto
export const useUsuario = () => {
  const context = useContext(UsuarioContext);
  if (!context) {
    throw new Error('useUsuario must be used within a UsuarioProvider');
  }
  return context;
};
