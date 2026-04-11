import { useEffect, useState } from "react";

type User = {
  name: string;
  email: string;
  password: string;
};

type Screen = "login" | "register" | "dashboard";

function App() {
  const [screen, setScreen] = useState<Screen>("login");
  const [users, setUsers] = useState<User[]>([]);
  const [loggedUser, setLoggedUser] = useState<User | null>(null);
  const [message, setMessage] = useState("");

  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    const storedUsers = localStorage.getItem("users");
    const storedSession = localStorage.getItem("loggedUser");

    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }

    if (storedSession) {
      const sessionUser = JSON.parse(storedSession);
      setLoggedUser(sessionUser);
      setScreen("dashboard");
    }
  }, []);

  const saveUsers = (updatedUsers: User[]) => {
    setUsers(updatedUsers);
    localStorage.setItem("users", JSON.stringify(updatedUsers));
  };

  const handleRegister = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");

    const { name, email, password, confirmPassword } = registerData;

    if (!name || !email || !password || !confirmPassword) {
      setMessage("All fields are required.");
      return;
    }

    if (!email.includes("@")) {
      setMessage("Invalid email.");
      return;
    }

    if (password.length < 6) {
      setMessage("Password must be at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setMessage("Passwords do not match.");
      return;
    }

    const emailExists = users.some((user) => user.email === email);
    if (emailExists) {
      setMessage("Email already registered.");
      return;
    }

    const newUser: User = { name, email, password };
    const updatedUsers = [...users, newUser];
    saveUsers(updatedUsers);

    setMessage("Account created successfully.");
    setRegisterData({
      name: "",
      email: "",
      password: "",
      confirmPassword: "",
    });

    setScreen("login");
  };

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setMessage("");

    const { email, password } = loginData;

    if (!email || !password) {
      setMessage("Email and password are required.");
      return;
    }

    const foundUser = users.find(
      (user) => user.email === email && user.password === password
    );

    if (!foundUser) {
      setMessage("Invalid credentials.");
      return;
    }

    setLoggedUser(foundUser);
    localStorage.setItem("loggedUser", JSON.stringify(foundUser));
    setLoginData({ email: "", password: "" });
    setScreen("dashboard");
  };

  const handleLogout = () => {
    setLoggedUser(null);
    localStorage.removeItem("loggedUser");
    setScreen("login");
    setMessage("Logged out successfully.");
  };

  const containerStyle: React.CSSProperties = {
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: "#0f172a",
    color: "#e2e8f0",
    fontFamily: "Arial, sans-serif",
    padding: "20px",
  };

  const cardStyle: React.CSSProperties = {
    width: "100%",
    maxWidth: "420px",
    background: "#1e293b",
    padding: "24px",
    borderRadius: "16px",
    boxShadow: "0 10px 30px rgba(0,0,0,0.3)",
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px",
    marginBottom: "12px",
    borderRadius: "8px",
    border: "1px solid #475569",
    background: "#0f172a",
    color: "#e2e8f0",
    boxSizing: "border-box",
  };

  const buttonStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px",
    borderRadius: "8px",
    border: "none",
    background: "#38bdf8",
    color: "#0f172a",
    fontWeight: "bold",
    cursor: "pointer",
    marginTop: "8px",
  };

  const linkButtonStyle: React.CSSProperties = {
    background: "transparent",
    border: "none",
    color: "#38bdf8",
    cursor: "pointer",
    marginTop: "12px",
  };

  return (
    <div style={containerStyle}>
      <div style={cardStyle}>
        <h1 style={{ marginTop: 0, textAlign: "center" }}>QA Auth Lab</h1>

        {message && (
          <p style={{ color: "#facc15", marginBottom: "16px" }}>{message}</p>
        )}

        {screen === "login" && (
          <>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
              <input
                style={inputStyle}
                type="email"
                placeholder="Email"
                value={loginData.email}
                onChange={(e) =>
                  setLoginData({ ...loginData, email: e.target.value })
                }
              />
              <input
                style={inputStyle}
                type="password"
                placeholder="Password"
                value={loginData.password}
                onChange={(e) =>
                  setLoginData({ ...loginData, password: e.target.value })
                }
              />
              <button style={buttonStyle} type="submit">
                Sign In
              </button>
            </form>

            <button
              style={linkButtonStyle}
              onClick={() => {
                setMessage("");
                setScreen("register");
              }}
            >
              Create account
            </button>
          </>
        )}

        {screen === "register" && (
          <>
            <h2>Register</h2>
            <form onSubmit={handleRegister}>
              <input
                style={inputStyle}
                type="text"
                placeholder="Name"
                value={registerData.name}
                onChange={(e) =>
                  setRegisterData({ ...registerData, name: e.target.value })
                }
              />
              <input
                style={inputStyle}
                type="email"
                placeholder="Email"
                value={registerData.email}
                onChange={(e) =>
                  setRegisterData({ ...registerData, email: e.target.value })
                }
              />
              <input
                style={inputStyle}
                type="password"
                placeholder="Password"
                value={registerData.password}
                onChange={(e) =>
                  setRegisterData({ ...registerData, password: e.target.value })
                }
              />
              <input
                style={inputStyle}
                type="password"
                placeholder="Confirm Password"
                value={registerData.confirmPassword}
                onChange={(e) =>
                  setRegisterData({
                    ...registerData,
                    confirmPassword: e.target.value,
                  })
                }
              />
              <button style={buttonStyle} type="submit">
                Register
              </button>
            </form>

            <button
              style={linkButtonStyle}
              onClick={() => {
                setMessage("");
                setScreen("login");
              }}
            >
              Back to login
            </button>
          </>
        )}

        {screen === "dashboard" && loggedUser && (
          <>
            <h2>Dashboard</h2>
            <p>Welcome, {loggedUser.name}.</p>
            <p>Email: {loggedUser.email}</p>

            <button style={buttonStyle} onClick={handleLogout}>
              Logout
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default App;