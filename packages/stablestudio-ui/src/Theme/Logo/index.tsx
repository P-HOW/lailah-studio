import { Next } from "./Next";

export function Logo(props: JSX.IntrinsicElements["img"]) {
  return (
    <img
      src="/logo.png"
      alt="Logo"
      style={{ maxWidth: "30px", maxHeight: "30px" }}
      {...props}
    />
  );
}

Logo.Next = Next;
