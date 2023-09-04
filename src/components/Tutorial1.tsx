export default function Tutorial1() {
  interface User {
    name: string;
  }
  const user: User = {
    name: "sahil",
  };
  return (
    <div>
      <h1>hello {user.name}</h1>
    </div>
  );
}
