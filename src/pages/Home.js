import React from 'react';

function Home() {
  return (
    <main style={styles.main}>
      <div style={styles.section}>
        <div style={styles.card}>
          <div style={styles.imageBox}></div>
          <div style={styles.textBox}>
            <p style={styles.title}>맞춤 추천.</p>
            <p style={styles.description}>
              AI가 관심사와 취향을 분석해<br />여행지를 추천해 줄게요.
            </p>
          </div>
        </div>

        <div style={{ ...styles.card, flexDirection: 'row-reverse' }}>
          <div style={styles.imageBox}></div>
          <div style={{ ...styles.textBox, marginRight: '6rem' }}>
            <p style={styles.title}>간편 로그인.</p>
            <p style={styles.description}>
              구글과 카카오로 빠르고 쉽게<br />로그인/회원가입 해보세요.
            </p>
          </div>
        </div>

        <div style={styles.card}>
          <div style={styles.imageBox}></div>
          <div style={styles.textBox}>
            <p style={styles.title}>매칭 서비스.</p>
            <p style={styles.description}>
              관광객 - 내국인<br />매칭 서비스를 통해 관광의 재미를 높여보세요.
            </p>
          </div>
        </div>

          <hr
          style={{
            width: '100%',
            maxWidth: '800px',
            borderTop: '1px solid #eee',
            margin: '3rem auto 2rem auto',
          }}/>


        <div style={{ textAlign: 'center', marginTop: '1rem' }}>
          <h1 style={{ ...styles.bottom, margin: 0 }}>
            지금 <span style={{ color: '#007bff' }}>AI</span> 추천을 경험하세요.
          </h1>
          <p style={styles.course}>
            취향저격 여행 코스를<br />
            준비했어요!
          </p>
          <button style={styles.aiButton}>AI추천 바로가기</button>
        </div>
      </div>
    </main>
  );
}

const styles = {
  main: {
    display: 'flex',
    justifyContent: 'center',
    padding: '4rem 2rem',
    backgroundColor: '#fff',
  },
  section: {
    display: 'flex',
    flexDirection: 'column',
    gap: '3rem',
  },
  card: {
    display: 'flex',
    alignItems: 'center',
    gap: '2rem',
  },
  imageBox: {
    width: '300px',
    height: '300px',
    backgroundColor: '#f2f2f2',
    borderRadius: '1.5rem',
  },
  textBox: {
    textAlign: 'left',
    maxWidth: '400px',
  },
  title: {
    color: '#007bff',
    fontWeight: 'bold',
    fontSize: '2rem',
    margin: 0,
  },
  bottom: {
    color: '#007bff',
    fontWeight: 'normal',
    fontSize: '2rem',
    margin: 0,
  },
  description: {
    color: 'gray',
    fontSize: '1rem',
    lineHeight: '1',
    marginTop: '0.5rem',
    marginBottom: '0.1rem',
  },
  course: {
    color: '#b3def9',
    fontSize: '1.2rem',
    lineHeight: '1.4',
    margin: 0,
    marginTop: '0.4rem',
  },
  aiButton: {
    marginTop: '1rem',
    padding: '0.6rem 1.5rem',
    fontSize: '1rem',
    backgroundColor: '#2a8cca',
    color: 'white',
    border: 'none',
    borderRadius: '30px',
    cursor: 'pointer',
  },
};

export default Home;
