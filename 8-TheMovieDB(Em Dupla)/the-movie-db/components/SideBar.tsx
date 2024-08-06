import React from 'react';
import { CreateAccount } from './CreateAccount';
import { LoginForm } from './LoginForm';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  addUser: (password: string, email: string, nome: string) => Promise<void>;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, addUser }) => {
  return (
<div className={`fixed top-0 right-0 h-full bg-white shadow-lg transition-transform transform ${isOpen ? 'translate-x-0' : 'translate-x-full'} sm:w-80 w-full z-50`}>
<div className="p-4">
        <CreateAccount addUser={addUser} />
        <button onClick={onClose} className="m-2 p-2 bg-gray-900 rounded hover:opacity-90">Close</button>
      </div>
    </div>
  );
}

export default Sidebar;
