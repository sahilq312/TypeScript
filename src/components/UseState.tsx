/* eslint-disable @typescript-eslint/no-explicit-any */
//import { useEffect, useState } from "react";

/* normal state */
/* export default function State1(){
    const [user, setUser] = useState<{name: string, salary?: number}>({
        name: "",
        salary: 0
    })
    useEffect(()=> {
        setUser({name: "sahil", salary:100000})
    },[])
    return (
        <>
        <h1>{user.name}</h1>
        <span>{user.salary}</span></>
    )
} */
/* state with mapping  */
/* export default function State1() {
  const [user, setUser] = useState<{ [key: string]: any }>({});
  useEffect(() => {
    setUser({
      name: "sahil",
      salary: 100000,
      department: "Dev",
      task: ["dev", "test", "ship"],
    });
  }, []);
  return (
    <>
      <h1>{user.name}</h1>
      <span>{user.salary}</span>
      <ul>
        {user.task.map((task: string, index: number) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </>
  );
}
 */
/* fetching data and rendering using useState and useEffect */
/* export default function State1() {

    interface IPost  {
        userId : number;
        id: number;
        title: string;
        body: string;
    } 
    const [post, setPost] = useState<IPost[]>([])
    const getPosts = async()=> {
        const res : Response = await fetch("https://jsonplaceholder.typicode.com/posts");
        const posts : IPost[] = await res.json();
        setPost(posts)
    }
    useEffect(()=> {
        getPosts()
    })
    return (
        <>
        {post.map((post, )=> 
        <div key={post.id}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
        </div>)}</>
    )
} */
