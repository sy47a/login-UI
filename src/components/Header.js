import React from 'react';

function Header({ hideTitle }) {
  return (
    <header style={styles.header}>
      <nav style={styles.nav}>
        <div style={styles.leftMenu}>
          <a href="/" style={{ ...styles.boxLink, ...styles.homeBox, color: 'black' }}>홈</a>
          <button style={{ ...styles.boxLink, ...styles.recBox, color: 'black' }}>추천 명소</button>
          <a href="/login" style={{ ...styles.boxLink, ...styles.signBox, color: 'black' }}>회원가입/로그인</a>
        </div>
        <button style={{ ...styles.boxLink, ...styles.AIrecBox, marginLeft: 'auto', color: 'white' }}>
          AI추천 시작
        </button>
      </nav>
      {!hideTitle && (
        <h1 style={styles.title}>
          파란 하늘, 여행 시작.<br />
          <span style={styles.aiText}>AI가 추천하는 대한민국 명소</span>
        </h1>
      )}
    </header>
  );
}

const styles = {
  header: {
    padding: '1rem',
    textAlign: 'center',
    color: '#2a8cca',
  },
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1rem',
    padding: '0 1rem',
  },
  leftMenu: {
    display: 'flex',
    gap: '1rem',
    marginLeft: '15.5rem',
  },
  boxLink: {
    display: 'inline-flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '0.1rem 0.8rem',
    borderRadius: '30px',
    textDecoration: 'none',
    fontWeight: 'normal',
    cursor: 'pointer',
    border: 'none',
    outline: 'none',
    lineHeight: '1.2',
    height: '2.5rem',
  },
  homeBox: {
    minWidth: '25px',
    padding: '0.1rem 0.5rem',
    fontSize: '1rem',
    backgroundColor: '#b3def9',
    height: '2rem',
  },
  recBox: {
    minWidth: '80px',
    padding: '0.1rem 0.5rem',
    fontSize: '1rem',
    backgroundColor: '#b3def9',
    height: '2rem',
  },
  signBox: {
    minWidth: '120px',
    padding: '0.1rem 0.5rem',
    fontSize: '1rem',
    backgroundColor: '#2a8cca',
    height: '2rem',
  },
  AIrecBox: {
    minWidth: '100px',
    padding: '0.1rem 0.5rem',
    fontSize: '1rem',
    backgroundColor: '#2a8cca',
    height: '2rem',
  },
  title: {
    fontSize: '3rem',
    fontWeight: 'normal',
    marginTop: '10rem',
    marginBottom: '0.1rem',
    lineHeight: '1',
  },
  aiText: {
    color: '#b3def9',
    fontWeight: 'normal',
  },
};

export default Header;
