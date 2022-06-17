import React, { useState } from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";

function One() {
  const navigate = useNavigate();
  const [messages] = useState([
    {
      id: "001",
      title: "消息1",
      content: "123",
    },
    {
      id: "002",
      title: "消息2",
      content: "456",
    },
    {
      id: "003",
      title: "消息3",
      content: "789",
    },
  ]);

  function showDetail(m) {
    navigate("detail", {
      replace: false,
      state: {
        id: m.id,
        title: m.title,
        content: m.content,
      },
    });
  }

  return (
    <div>
      <ul>
        {messages.map((m) => {
          return (
            <li key={m.id}>
              {/* <Link to={`detail/${m.id}/${m.title}/${m.content}`}>{m.title}</Link> */}
              {/* <Link to={`detail?id=${m.id}&title=${m.title}&content=${m.content}`}>{m.title}</Link> */}
              <Link
                to="detail"
                state={{
                  id: m.id,
                  title: m.title,
                  content: m.content,
                }}
              >
                {m.title}
              </Link>
              <button onClick={() => showDetail(m)}>查看详情</button>
            </li>
          );
        })}
      </ul>
      <hr />
      <Outlet />
    </div>
  );
}

export default One;
