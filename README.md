# react-router-dom v6


로그인 여부에 따른 라우터(레이아웃) 설정

1. 로그인 여부에 대한 값을 context에 저장, 해당 context는 private route에서 사용
2. private route를 컴포넌트에 대한 guard로 두어 페이지 이동 시 로그인 체크
3. routes 를 그리는 함수를 따로 두어, 레이아웃 컴포넌트를 같이 전달
4. router 정보에 guard에 대한 정보를 두고 사용
   (fragment children에 대한 route 작동 여부 확인 필요)