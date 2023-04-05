import React from 'react';
import { useAuth } from '../hooks/useAuth';

const Home = () => {
  useAuth();
  return <div>회원가입 로그인 버튼 생성</div>;
};

export default Home;
