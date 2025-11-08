import { ReactNode } from 'react';
import { useNavigate } from 'react-router-dom';
import './GlassCard.css';

interface GlassCardProps {
  text: string;
  rotation?: number;
  icon: ReactNode;
  path?: string;
  onClick?: () => void;
  indicatorText?: string;
}

const GlassCard = ({ text, rotation = 0, icon, path, onClick, indicatorText }: GlassCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (onClick) {
      onClick();
    } else if (path) {
      navigate(path);
    }
  };

  return (
    <div 
      data-text={indicatorText || text} 
      style={{ '--r': rotation } as React.CSSProperties} 
      className={`glass-card ${!indicatorText ? '' : 'glass-card-single'}`}
      onClick={handleClick}
    >
      <div className="glass-card-icon">{icon}</div>
    </div>
  );
};

export default GlassCard;

