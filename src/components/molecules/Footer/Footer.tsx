import { Logo } from '@/components/atoms/Logo';
import './Footer.scss';

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer__brand">
          <Logo text="КОМБУХИ ТОМАТОСА" />
        </div>
        <div className="footer__contact"></div>
      </div>
    </>
  );
}
