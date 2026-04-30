import { Logo } from '@/components/atoms/Logo';
import './Footer.scss';
import { Link } from '@/components/atoms/Link';

export default function Footer() {
  return (
    <>
      <div className="footer">
        <div className="footer__inner">
          <div className="footer__brand">
            <Logo text="КОМБУХИ ТОМАТОСА" size="s" />
          </div>

          <div className="footer__socials">
            <Link href="https://www.youtube.com/@Tomatos" size="m">
              YouTube
            </Link>
            <Link href="https://t.me/tomatojan" size="m">
              Telegram
            </Link>
            <Link href="https://www.twitch.tv/tomatos" size="m">
              Twitch
            </Link>
            <Link href="https://vk.com/tomatojan" size="m">
              VK
            </Link>
          </div>

          <div className="footer__copyright">
            <p>© 2026 Томатос</p>
          </div>
        </div>
      </div>
    </>
  );
}
