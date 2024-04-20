import { useContext } from "react";
import userContext from "./Context";

export default function ComponentC() {
  const user = useContext(userContext);
  return (
    <div>
      <h2>{user} Welcome</h2>
    </div>
  );
}
