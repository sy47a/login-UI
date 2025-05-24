import React, { useState } from 'react';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState('');

  const handleLogin = async () => {
    setLoading(true);
    setErrorMsg('');
    try {
      const response = await axios.post('http://localhost:3000/api/auth/login', {
        email,
        password,
      });
      console.log('로그인 성공:', response.data);
    } catch (error) {
      setErrorMsg('로그인에 실패했습니다. 다시 시도해 주세요.');
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

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
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="비밀번호"
        style={styles.input}
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      <button style={styles.loginBtn} onClick={handleLogin} disabled={loading}>
        {loading ? '로그인 중...' : '로그인'}
      </button>

      {errorMsg && <p style={{ color: 'red', textAlign: 'center' }}>{errorMsg}</p>}

      <div style={styles.linkBox}>
        <a href="/signup" style={styles.link}>회원가입</a>
        <span style={styles.separator}>|</span>
        <a href="/find" style={styles.link}>아이디/비밀번호 찾기</a>
      </div>

      <div style={styles.oauthBox}>
        <a href="http://localhost:3000/oauth2/authorize/google">
          <button style={styles.oauthBtn} className="google">구글로 로그인</button>
        </a>
        <a href="http://localhost:3000/oauth2/authorize/kakao">
          <button style={styles.oauthBtn} className="kakao">카카오로 로그인</button>
        </a>
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
    width: '13%',
    padding: '0.7rem 1rem',
    fontSize: '1rem',
    border: '1px solid #ccc',
    borderRadius: '8px',
    margin: '0 auto 1rem auto',
    outline: 'none',
  },
  loginBtn: {
    display: 'block',
    width: '15%',
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
  oauthBox: {
    marginTop: '2rem',
    display: 'flex',
    justifyContent: 'center',
    gap: '1rem',
  },
  oauthBtn: {
    padding: '0.6rem 1.2rem',
    fontSize: '1rem',
    borderRadius: '8px',
    border: 'none',
    cursor: 'pointer',
  },
};

export default Login;
