import './Header.scss';
import { Link } from '../../atoms/Link';
import { Logo } from '../../atoms/Logo';

export default function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <Logo text="КОМБУХИ ТОМАТОСА" size="sm" />
      </div>
      <div className="header__link">
        <Link href="https://www.youtube.com/@Tomatos" size="s">
          YouTube канал
        </Link>
      </div>
    </div>
  );
}
