import React, { useState, type FormEvent } from "react";

interface UserData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}
export const Registration: React.FC = () => {
  const [user, setUser] = useState<UserData>({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === "email") {
      const atIndex = value.indexOf("@");
      if (atIndex > 0 && user.username === "") {
        setUser((prevUser) => ({
          ...prevUser,
          email: value,
          username: value.substring(0, atIndex),
        }));
        return;
      }
    }

    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));
  };
  
    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      console.log("Formulář odeslán: ", user);
    };
  
    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label> User name</label>
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={user.email}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Confirm Password:</label>
          <input
            type="password"
            name="confirmPassword"
            value={user.confirmPassword}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Register</button>
      </form>
    );
};
export default Registration;
