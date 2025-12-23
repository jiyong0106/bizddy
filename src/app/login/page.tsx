"use client";

import { useState } from "react";
import LoginForm from "@/components/login/login-form";

const LoginPage = () => {
  const [phone, setPhone] = useState("");

  const handleSubmit = () => {
    // TODO: 로그인 API 호출 로직 구현 예정 (비즈니스 로직)
    console.log("로그인 시도:", phone);
    alert(`인증번호가 ${phone}으로 발송되었습니다.`);
  };

  return (
    <LoginForm phone={phone} onChangePhone={setPhone} onSubmit={handleSubmit} />
  );
};

export default LoginPage;
