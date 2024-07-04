import Image from 'next/image';
import Link from 'next/link';

import githubSVG from '../../public/github-mark.svg';
import telegramSVG from '../../public/telegram-mark.svg';
import emailSVG from '../../public/email-mark.svg';

export default function InfoHeader() {
  return (
    <>
      <div id="blog-author">Vladislav Kishkovskiy</div>

      <div id="info">
        <div id="contacts">
          <a
            id="gh-link"
            className="link-img"
            href="https://github.com/deeprecession/"
          >
            <Image src={githubSVG} alt="GitHub svg" />
            <div>GitHub</div>
          </a>

          <span className="separator">|</span>

          <a
            id="tg-link"
            className="link-img"
            href="https://t.me/deeprecession"
          >
            <Image src={telegramSVG} alt="telegram svg" />
            <span>Telegram</span>
          </a>

          <span className="separator">|</span>

          <a
            id="email"
            className="link-img"
            href="mailto:v.kishkovskiy@innopolis.university"
          >
            <Image src={emailSVG} alt="email svg" />
            <span>Email</span>
          </a>
        </div>

        <div id="navigation">
          <Link href={'/'}>About</Link>
          <span className="separator">|</span>
          <Link href={'/blog'}>Blog</Link>
          <span className="separator">|</span>
          <Link href={'/comic'}>Comic</Link>
        </div>
      </div>
    </>
  );
}
