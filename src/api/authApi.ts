/**
 * Auth API - 인증 관련 API 호출 함수 모음
 * 가이드라인에 따라 camelCase + Api 네이밍을 사용합니다.
 */
export const authApi = {
  /**
   * 핸드폰 번호로 인증번호 요청
   */
  requestOtp: async (phone: string) => {
    // 실제 환경에서는 supabase나 외부 API 호출이 일어나는 곳입니다.
    console.log(`[API CALL] OTP 요청: ${phone}`);

    // 시뮬레이션용 가짜 지연
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ success: true, message: "인증번호가 발송되었습니다." });
      }, 500);
    });
  },
};
