"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/libs/supabase/client";

interface TestData {
  id: number;
  title: string;
  content: string;
  created_at: string;
}

const SupatestClient = () => {
  const [data, setData] = useState<TestData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: testData, error: supabaseError } = await supabase
          .from("test")
          .select("*");

        if (supabaseError) {
          throw supabaseError;
        }

        if (testData) {
          setData(testData);
        }
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading)
    return (
      <div style={{ padding: "10px" }}>
        클라이언트에서 데이터를 불러오는 중...
      </div>
    );
  if (error)
    return (
      <div style={{ padding: "10px", color: "red" }}>
        클라이언트 에러: {error}
      </div>
    );

  return (
    <div
      style={{
        padding: "20px",
        border: "2px solid #4A90E2",
        marginTop: "20px",
        borderRadius: "8px",
        backgroundColor: "#f8fbff",
      }}
    >
      <h3 style={{ color: "#4A90E2", marginTop: 0 }}>
        🌐 Supabase 클라이언트 사이드 테스트 (Browser)
      </h3>
      <p style={{ fontSize: "14px", color: "#666" }}>
        이 데이터는 브라우저가 마운트된 후 클라이언트에서 직접 호출했습니다.
      </p>
      {data.length > 0 ? (
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

export default SupatestClient;
