import React from 'react';

function Login() {
  return (
    <div>
      <h1 style={styles.login}>
        로그인/회원가입<br />
        <span style={styles.start}>간편하게 시작하기</span>
      </h1>
      <input
        type="email"
        placeholder="name@example.com"
        style={styles.input}
      />
      <button style={styles.loginBtn}>구글</button>
      <button style={styles.loginBtn}>카카오 로그인</button>

      <div style={styles.linkBox}>
        <a href="/signup" style={styles.link}>회원가입</a>
        <span style={styles.separator}>|</span>
        <a href="/find" style={styles.link}>아이디/비밀번호 찾기</a>
      </div>
    </div>
  );
}

const styles = {
  login: {
    fontSize: '3rem',
    textAlign: 'center',
    color: '#2a8cca',
    marginTop: '5rem',
    marginBottom: '1.5rem',
    lineHeight: '1',
    fontWeight: 'normal',
  },
  start: {
    fontSize: '3rem',
    textAlign: 'center',
    color: 'gray',
    marginTop: '5rem',
    marginBottom: '0.1rem',
    lineHeight: '1',
    fontWeight: 'normal',
  },
  input: {
    display: 'block',
    width: '26%',
    padding: '0.7rem 1rem',
    fontSize: '1rem',
    border: '1px solid #ccc',
    borderRadius: '8px',
    margin: '0 auto 1rem auto',
    outline: 'none',
  },
  loginBtn: {
    display: 'block',
    width: '30%',
    padding: '0.7rem',
    margin: '0 auto 0.8rem auto',
    backgroundColor: '#000',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    fontSize: '1rem',
    cursor: 'pointer',
  },
  linkBox: {
    marginTop: '1rem',
    display: 'flex',
    justifyContent: 'center',
    gap: '0.5rem',
    fontSize: '0.9rem',
  },
  link: {
    color: 'gray',
    textDecoration: 'none',
  },
  separator: {
    color: 'gray',
  },
};

export default Login;
