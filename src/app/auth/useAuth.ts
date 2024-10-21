import React, { useState, useEffect, useRef } from "react";
import Keycloak from "keycloak-js";

const useAuth = () => {
  const isRun = useRef(false);
  const [token, setToken] = useState(null);
  const [isLogin, setLogin] = useState(false);

  useEffect(() => {
    const client = new Keycloak({
      url: "http://localhost:8080/",
      realm: "TestRealm",
      clientId: "TestClient",
      /*  url: process.env.NEXT_KEYCLOAK_URL,
      realm: process.env.NEXT_KEYCLOAK_URL,
      clientId: process.env.NEXT_KEYCLOAK_URL, */
    });

    if (isRun.current) return;
    isRun.current = true;
    
    client.init({ onLoad: "login-required" }).then((res) => {
      setLogin(res);
      setToken(client.token);
    });
  }, []);

  return [isLogin, token];
};

export default useAuth;
