import React from 'react';

function Footer() {
  return (
    <footer style={styles.footer}>
      <hr style={{
          width: '100%',
          maxWidth: '800px',
          borderTop: '1px solid #eee',
          margin: '10rem auto 8rem auto'
        }} />

      <div style={styles.grid}>
        <div style={styles.column}>
          <span style={styles.title}>바로가기</span>
          <span style={styles.row2}>홈</span>
          <span style={styles.row2}>AI추천</span>
          <span style={styles.row2}>관광 정보</span>
        </div>
        <div style={styles.column}>
          <span style={styles.title}>서비스</span>
          <span style={styles.row2}>공지사항</span>
          <span style={styles.row2}>이용약관</span>
          <span style={styles.row2}>개인정보처리방침</span>
        </div>
        <div style={styles.column}>
          <span style={styles.title}>고객지원</span>
          <span style={styles.row2}>문의하기</span>
          <span style={styles.row2}>FAQ</span>
          <span style={styles.row2}>피드백</span>
        </div>
      </div>
    </footer>
  );
}

const styles = {
  footer: {
    color: 'black',
    padding: '1rem 0',
    width: '100%',
    backgroundColor: 'white',
  },
  hr: {
    border: 'none',
    borderTop: '1px solid rgba(128, 128, 128, 0.5)',
    margin: '1rem 2rem',
  },
  grid: {
    display: 'flex',
    justifyContent: 'flex-end', // 오른쪽 정렬
    gap: '3rem',
    marginRight: '2rem',
  },
  column: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start', // column 텍스트 왼쪽 정렬
    gap: '0.3rem',
  },
  row2: {
    color: 'gray',
  },
};

export default Footer;
