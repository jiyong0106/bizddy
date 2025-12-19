import { createClient } from "@/libs/supabase/server";

const SupatestServer = async () => {
  const supabase = await createClient();
  const { data, error } = await supabase.from("test").select("*");

  if (error) {
    return <div style={{ color: "red" }}>서버 에러: {error.message}</div>;
  }

  return (
    <div
      style={{
        padding: "20px",
        border: "2px solid #27AE60",
        marginTop: "20px",
        borderRadius: "8px",
        backgroundColor: "#f4fdf7",
      }}
    >
      <h3 style={{ color: "#27AE60", marginTop: 0 }}>
        🖥️ Supabase 서버 사이드 테스트 (Node.js)
      </h3>
      <p style={{ fontSize: "14px", color: "#666" }}>
        이 데이터는 페이지가 렌더링되기 전 서버에서 미리 가져왔습니다.
      </p>
      {data && data.length > 0 ? (
        <ul style={{ paddingLeft: "20px" }}>
          {data.map((item) => (
            <li key={item.id} style={{ marginBottom: "10px" }}>
              <strong>{item.title}</strong>
              <div style={{ fontSize: "14px" }}>{item.content}</div>
            </li>
          ))}
        </ul>
      ) : (
        <p>데이터가 없습니다.</p>
      )}
    </div>
  );
};

export default SupatestServer;
