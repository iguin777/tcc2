import { createContext, useContext, useState } from 'react';

const UsuarioContext = createContext();

export function UsuarioProvider({ children }) {
  const [usuario, setUsuario] = useState(null);

  const atualizarUsuario = (dados) => {
    setUsuario(dados);
  };

  return (
    <UsuarioContext.Provider value={{ usuario, atualizarUsuario }}>
      {children}
    </UsuarioContext.Provider>
  );
}

export function useUsuario() {
  const context = useContext(UsuarioContext);
  if (!context) {
    throw new Error('useUsuario deve ser usado dentro de um UsuarioProvider');
  }
  return context;
}