import React from 'react';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>
          &copy; {new Date().getFullYear()} This is my Website. All rights
          reserved by me, THE FOOTER.
        </p>
      </div>
    </footer>
  );
}
