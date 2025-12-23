import { useState, useCallback } from "react";
import { authApi } from "@/api/authApi";

/**
 * useLoginForm - 로그인 로직 및 데이터 상태를 관리하는 커스텀 훅
 * 비즈니스 로직(데이터 처리)을 UI와 완전히 분리합니다.
 */
export const useLoginForm = () => {
  const [phone, setPhone] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onChangePhone = useCallback((value: string) => {
    // 간단한 숫자 필터링 등 비즈니스 로직 포함 가능
    const onlyNums = value.replace(/[^0-9]/g, "");
    setPhone(onlyNums);
  }, []);

  const onSubmit = useCallback(async () => {
    if (!phone || phone.length < 10) {
      alert("올바른 핸드폰 번호를 입력해 주세요.");
      return;
    }

    setIsLoading(true);
    try {
      const response: any = await authApi.requestOtp(phone);
      if (response.success) {
        alert(response.message);
      }
    } catch (error) {
      console.error("로그인 에러:", error);
      alert("로그인 중 오류가 발생했습니다.");
    } finally {
      setIsLoading(false);
    }
  }, [phone]);

  return {
    phone,
    isLoading,
    onChangePhone,
    onSubmit,
  };
};
